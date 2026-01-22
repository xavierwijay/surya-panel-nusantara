import type { ImageMetadata } from 'astro';

import intfarm1 from '../assets/projects/intergrated-farm/intfarm-1.jpeg';
import intfarm2 from '../assets/projects/intergrated-farm/intfarm-2.jpg';
import intfarm3 from '../assets/projects/intergrated-farm/intfarm-3.jpg';

import pjuts1 from '../assets/projects/pjuts/pjuts-1.jpg';
import pjuts2 from '../assets/projects/pjuts/pjuts-2.jpg';

import ziyad1 from '../assets/projects/pt-ziyad/ziyad-1.jpg';
import ziyad2 from '../assets/projects/pt-ziyad/ziyad-2.jpg';
import ziyad3 from '../assets/projects/pt-ziyad/ziyad-3.jpg';

import resto1 from '../assets/projects/resto-aperto/resto-1.jpg';
import resto2 from '../assets/projects/resto-aperto/resto-2.jpg';
import resto3 from '../assets/projects/resto-aperto/resto-3.jpg';

export interface Project {
  title: string;
  location: string;
  image: ImageMetadata;
  images?: ImageMetadata[];
  description?: string;
  capacity?: string;
  year?: string;
  type?: string;
  imageClass?: string; // Custom tailwind classes for the image (e.g. object position)
}

export const PROJECTS: Project[] = [
  {
    title: "INTEGRATED FARM",
    location: "JAWA TENGAH",
    image: intfarm1,
    images: [intfarm1, intfarm2, intfarm3],
    description: "Sistem irigasi dan kelistrikan tenaga surya untuk pertanian terpadu (Integrated Farming).",
    capacity: "Hybrid System",
    year: "2024",
    type: "Agricultural Solar",
    imageClass: "object-top md:object-center",
  },
  {
    title: "PT ZIYAD",
    location: "SOLO",
    image: ziyad1,
    images: [ziyad1, ziyad2, ziyad3],
    description: "Instalasi PLTS atap untuk efisiensi energi operasional kantor dan percetakan PT Ziyad.",
    capacity: "Commercial On-Grid",
    year: "2023",
    type: "Commercial",
  },
  {
    title: "RESTO APERTO",
    location: "YOGYAKARTA",
    image: resto1,
    images: [resto1, resto2, resto3],
    description: "Penerapan energi hijau untuk kebutuhan operasional restoran modern.",
    capacity: "Hybrid Backup",
    year: "2024",
    type: "Commercial",
  },
  {
    title: "PJUTS AREA",
    location: "VARIOUS",
    image: pjuts1,
    images: [pjuts1, pjuts2],
    description: "Penerangan Jalan Umum Tenaga Surya untuk area akses publik dan kawasan industri.",
    capacity: "Stand-alone",
    year: "2023",
    type: "Public infrastructure",
  },
];
