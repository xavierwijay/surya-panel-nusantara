export interface Project {
  title: string;
  location: string;
  image: string;
  images?: string[];
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
    images: [
      "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=2000&auto=format&fit=crop",
    ],
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
    images: [
      "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1664195196928-837fe1a0a521?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2000&auto=format&fit=crop",
    ],
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
    images: [
      "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=2000&auto=format&fit=crop",
      "https://plus.unsplash.com/premium_photo-1679917152960-b9e6456ba12f?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1626079084725-70a2559a4b3f?q=80&w=2000&auto=format&fit=crop",
    ],
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
    images: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605980413988-9ff24c537d33?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2000&auto=format&fit=crop",
    ],
    description: "Sistem panel surya residensial.",
    capacity: "10 kWp",
    year: "2023",
    type: "Residential On-Grid",
  },
];
