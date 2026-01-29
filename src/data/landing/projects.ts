import type { ProjectItem } from "../../components/landing/types";
import jamatec from "../../assets/jamatec.jpg";
import oaxtec from "../../assets/oaxtec.png";









export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    tag: "Energía Renovable",
    category: "Asistencia técnica",
    title: "Asistencia Técnica Especializada G8X  Newport",
    caption: "Jamaica • Agosto 2025",
    // Usamos una imagen de muestra similar a la tuya
    image: jamatec,
    bullets: [
      "Diagnóstico de fallas en subestaciones.",
      "Mantenimiento preventivo programado.",
      "Mantenimiento correctivo de transformadores.",
      "Pruebas de aislamiento en cables."
    ],
    linkText: "Ver más",
    url: "/project-detail/1"
  },
  {
    id: 2,
    tag: "Seguridad Industrial",
    category: "Mantenimiento preventivo",
    title: "Contrato Marco de Asistencia Técnica Especializada",
    caption: "Oaxaca • Abril 2025",
    image: oaxtec,
    bullets: [
      "Troubleshooting de Convertidor",
      "Suministro de Repuestos",
      "Reacondicionamiento de Convertidor",
      "Mantenimiento de Nacelle"
    ],
    linkText: "Ver más",
    url: "project-detail/2"
  }
];


