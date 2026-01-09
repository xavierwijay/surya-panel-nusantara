import AOS from "aos";

function initAOS() {
  AOS.init({
    duration: 800,
    easing: "ease-out-cubic",
    once: true,
    offset: 50,
  });
}

function initCounters() {
  const counters = document.querySelectorAll<HTMLElement>(".counter-value");
  const statsSection = document.getElementById("stats");
  if (!statsSection || counters.length === 0) return;

  const animateCounters = () => {
    counters.forEach((element) => {
      const targetStr = element.getAttribute("data-target");
      if (!targetStr) return;

      const target = Number(targetStr);
      if (!Number.isFinite(target)) return;

      const duration = 1500;
      const frameDuration = 20;
      const totalFrames = Math.round(duration / frameDuration);
      const increment = target / totalFrames;

      let current = 0;

      const updateCount = () => {
        current += increment;
        if (current < target) {
          element.innerText = String(Math.ceil(current));
          setTimeout(updateCount, frameDuration);
        } else {
          element.innerText = String(target);
        }
      };

      updateCount();
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(statsSection);
}

function initMobileMenu() {
  const btn = document.getElementById(
    "mobile-menu-btn"
  ) as HTMLButtonElement | null;
  const menu = document.getElementById("mobile-menu") as HTMLElement | null;
  const backdrop = document.getElementById(
    "mobile-backdrop"
  ) as HTMLElement | null;
  const links = document.querySelectorAll<HTMLElement>(".mobile-link");

  if (!btn || !menu) return;

  const iconHamburger = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>`;

  const iconClose = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>`;

  let isOpen = false;

  function setOpen(next: boolean) {
    isOpen = next;
    btn!.setAttribute("aria-expanded", String(isOpen));

    if (isOpen) {
      menu!.classList.remove("translate-x-full");
      backdrop?.classList.remove("opacity-0", "pointer-events-none");
      btn!.innerHTML = iconClose;
      document.body.style.overflow = "hidden";
    } else {
      menu!.classList.add("translate-x-full");
      backdrop?.classList.add("opacity-0", "pointer-events-none");
      btn!.innerHTML = iconHamburger;
      document.body.style.overflow = "auto";
    }
  }

  function toggleMenu() {
    setOpen(!isOpen);
  }

  btn.addEventListener("click", toggleMenu);
  backdrop?.addEventListener("click", () => isOpen && setOpen(false));
  links.forEach((link) =>
    link.addEventListener("click", () => isOpen && setOpen(false))
  );

  // initial state
  btn.innerHTML = iconHamburger;
  btn.setAttribute("aria-expanded", "false");
}

function initDesktopNavbarScroll() {
  const desktopNav = document.getElementById(
    "desktop-navbar"
  ) as HTMLElement | null;
  const desktopLogo = document.getElementById(
    "desktop-brand-logo"
  ) as HTMLElement | null;
  if (!desktopNav) return;

  let lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      desktopNav.style.transform = "translateY(-200%)";
      if (desktopLogo) {
        desktopLogo.style.opacity = "0";
        desktopLogo.style.pointerEvents = "none";
      }
    } else {
      desktopNav.style.transform = "translateY(0)";
      if (desktopLogo) {
        desktopLogo.style.opacity = "1";
        desktopLogo.style.pointerEvents = "auto";
      }
    }

    lastScrollTop = scrollTop;
  });
}

window.addEventListener("DOMContentLoaded", () => {
  initAOS();
  initCounters();
  initMobileMenu();
  initDesktopNavbarScroll();
});
