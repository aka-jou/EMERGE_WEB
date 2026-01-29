import type { LucideIcon } from "lucide-react";

export type NavLink = { name: string; href: string };

export type Service = {
  id: number;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  image: string;
  items: string[];
};

export type Objective = {
  id: number;
  title: string;
  description: string;
};

export type ProjectItem = {
  id: number;
  tag: string;       // Etiqueta sobre la imagen (ej: Energía Renovable)
  category: string;  // Categoría en pill verde (ej: Asistencia técnica)
  title: string;     // Título principal (ej: Montaje G52...)
  caption: string;   // Ubicación y Fecha (ej: Arriaga • Agosto 2025)
  image: string;
  bullets: string[];
  linkText: string;
  url?: string;
};
export type TrajectoryItem = {
  year: string;
  badge: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  textColor: string;
  badgeColor: string;
  shadow: string;
  borderColor?: string;
};

export type StatItem = {
  value: string;
  label: string;
  icon: LucideIcon;
};

export type ClientCardProps = {
  icon: LucideIcon;
  title: string;
  count: string;
  description: string;
  image: string;
  highlight?: boolean;
};
