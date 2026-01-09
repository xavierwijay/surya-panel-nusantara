export interface Project {
  title: string;
  location: string;
  image: string;
  description?: string;
  capacity?: string;
  year?: string;
  type?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "COLOMADU",
    location: "JAWA TENGAH",
    image:
      "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=2000&auto=format&fit=crop",
    description:
      "Instalasi panel surya di area persawahan dan perumahan hijau Colomadu.",
    capacity: "50 kWp",
    year: "2023",
    type: "Residential Hybrid",
  },
  {
    title: "GUNUNG KIDUL",
    location: "DIY",
    image:
      "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=2000&auto=format&fit=crop",
    description:
      "Pembangkit listrik tenaga surya atap industri di kawasan Gunung Kidul.",
    capacity: "1.2 MWp",
    year: "2024",
    type: "Industrial On-Grid",
  },
  {
    title: "EDU PARK",
    location: "UMS",
    image:
      "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=2000&auto=format&fit=crop",
    description: "Sistem panel surya edukasi yang terintegrasi di kampus UMS.",
    capacity: "200 kWp",
    year: "2022",
    type: "Educational Facility",
  },
  {
    title: "SOLO BARU",
    location: "JAWA TENGAH",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2000&auto=format&fit=crop",
    description: "Sistem panel surya residensial.",
    capacity: "10 kWp",
    year: "2023",
    type: "Residential On-Grid",
  },
];
