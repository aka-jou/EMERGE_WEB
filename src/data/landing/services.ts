import { BookOpenText, Wrench, Zap, Package } from "lucide-react";
import type { Service } from "../../components/landing/types";
import cale from "../../assets/cale.png";
import consu from "../../assets/consu.png";
import servi from "../../assets/servi.png";
import atmt from "../../assets/atmt.jpg";

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Consultoría",
    subtitle: "Gestión especializada y optimización de procesos",
    icon: BookOpenText,
    image:
      consu,
    items: [
      "Gestión de Servicios O&M a ISPs",
      "Programas de mejora del rendimiento",
      "Proyectos de protección de la integridad de aerogeneradores",
      "Gestión de proyectos de reacondicionamiento",
    ],
  },
  {
    id: 2,
    title: "Servicios",
    subtitle: "Mantenimiento y diagnóstico especializado",
    icon: Wrench,
    image:
      servi,
    items: [
      "Videoscopia en multiplicadoras",
      "Pruebas estáticas en generadores",
      "Diagnóstico de fallas eléctricas",
      "Evaluación de fallas mecánicas",
      "Análisis de vibraciones",
      "Inspección de palas",
      "Mantenimiento preventivo",
    ],
  },
  {
    id: 3,
    title: "AT/MT",
    subtitle: "Subestaciones y líneas de transmisión",
    icon: Zap,
    image:
      atmt,
    items: [
      "Pruebas eléctricas a equipos primarios",
      "Líneas de transmisión en alta, media y baja tensión",
      "Celdas de media tensión",
      "Mantenimiento preventivo en subestaciones eléctricas",
      "Reparación de celdas de media tensión",
      "Localización de fallas en redes",
      "Comunicaciones y control",
    ],
  },
  {
    id: 4,
    title: "Repuesto y taller",
    subtitle: "Suministro y reparación de componentes",
    icon: Package,
    image:
      cale,
    items: [
      "Gestión de almacenes",
      "Suministro de repuestos",
      "Reparación de motores",
      "Reacondicionamiento mecánico",
      "Fabricación de herramientas especiales",
    ],
  },
];
