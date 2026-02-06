import { BookOpenText, Wrench, Zap, Package } from "lucide-react";
import type { Service } from "../../components/landing/types";
import cale from "../../assets/cale.png";
import consu from "../../assets/consu.png";
import atmtt from "../../assets/atmtt.png";
import preve1 from "../../assets/preve1.png";

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
      preve1,
    items: [
      "Videoscopia en multiplicadoras",
      "Pruebas estáticas en generadores",
      "Diagnóstico de fallas eléctricas (Troubleshooting)",
      "Evaluación de fallas mecánicas",
      "Análisis de vibraciones",
      "Inspección de palas",
      "Operación y mantenimiento eólico",
    ],
  },
  {
    id: 3,
    title: "AT/MT",
    subtitle: "Subestaciones y líneas de transmisión",
    icon: Zap,
    image:
      atmtt,
    items: [
      "Pruebas eléctricas a equipos primarios",
      "Líneas de transmisión en alta, media y baja tensión",
      "Calibración de cuchillas de AT/MT",
      "Mantenimiento preventivo en subestaciones eléctricas",
      "Reparación de celdas de media tensión",
      "Localización de fallas en redes",
      "Mantenimiento a equipos de comunicación y control",
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
