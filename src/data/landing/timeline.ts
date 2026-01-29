import { Trophy, Zap, Sprout, TrendingUp, Users } from "lucide-react";
import type { TrajectoryItem, StatItem } from "../../components/landing/types";

export const TIMELINE: TrajectoryItem[] = [
  {
    year: "2024",
    badge: "Estrategia & Liderazgo",
    title: "Consolidación Nacional",
    description:
      "Aporte de contenido nacional en servicios especializados. Liderazgo en el mercado con 44% de cuota actual.",
    icon: Trophy,
    color: "bg-[#005900]",
    textColor: "text-white",
    badgeColor: "bg-green-800 text-green-100",
    shadow: "shadow-2xl shadow-green-900/40",
  },
  {
    year: "2018",
    badge: "Expansión",
    title: "Diversificación de Cartera",
    description:
      "Creación de nuevas carteras de servicios. Representación técnico-comercial de 3 ISP emergentes y suma de 1.8 GW+.",
    icon: Zap,
    color: "bg-white",
    textColor: "text-[#1D1D1D]",
    badgeColor: "bg-green-100 text-[#005900]",
    borderColor: "border-green-500",
    shadow: "shadow-xl shadow-gray-200/50",
  },
  {
    year: "2013",
    badge: "El Origen",
    title: "Los Cimientos",
    description:
      "Inicio como Coordinador O&M. De 234 MW a 1.5 GW en 5 años. Aprendizaje clave con Gamesa, Acciona y Clipper.",
    icon: Sprout,
    color: "bg-gray-50",
    textColor: "text-gray-700",
    badgeColor: "bg-gray-200 text-gray-600",
    borderColor: "border-gray-200",
    shadow: "shadow-lg shadow-gray-200/50",
  },
];

export const STATS: StatItem[] = [
  { value: "3.3 GW", label: "Potencia Gestionada", icon: Zap },
  { value: "+535", label: "Aerogeneradores", icon: TrendingUp },
  { value: "44%", label: "Del mercado actual", icon: Users },
];
