import jama from '../assets/jama.png';
import oaxacaim from '../assets/oaxacaim.png';
import bajacalifa from '../assets/bajacalifa.png';
import cuba from '../assets/cuba.png';

export interface ProjectDetail {
  title: string;
  description: string;
  publishDate: string;
  author: string;
  image: any;
  sidebar: {
    location: string;
    technology: string;
    serviceType: string;
    scope: string;
    whyUsPoints: string[];
  };
  challenges: string[];
  services: {
    title: string;
    description: string;
    icon: string;
  }[];
  benefits: string[];
}

export const PROJECTS_DETAILS: Record<string, ProjectDetail> = {
  "1": {
    title: "Asistencia Técnica Especializada G8X Newport",
    description: "Soporte especializado para aerogeneradores Gamesa G8X con diagnóstico, refacciones y mantenimiento planificado.",
    publishDate: "24 de abril de 2025",
    author: "Carlos Vidal",
    image: jama,
    sidebar: {
      location: "Jamaica",
      technology: "Aerogeneradores Gamesa G8X",
      serviceType: "Asistencia técnica y mantenimiento eólico",
      scope: "Troubleshooting, suministro de refacciones, sustitución de palas, tareas planificadas",
      whyUsPoints: [
        "Experiencia comprobada en aerogeneradores Gamesa y Vestas",
        "Equipo multidisciplinario con especialistas eléctricos, mecánicos y de campo",
        "Capacidad de operar fuera de México manteniendo estándares de seguridad",
        "Enfoque EHS en todas las intervenciones técnicas"
      ]
    },
    challenges: [
      "Fallas críticas en el convertidor del aerogenerador que afectaban la operación continua",
      "Necesidad urgente de refacciones eléctricas y electrónicas especializadas en ubicación remota",
      "Sustitución y mantenimiento de componentes críticos como palas, damper de nacelle y guarda polvos"
    ],
    services: [
      {
        title: "Troubleshooting de Convertidor",
        description: "Diagnóstico avanzado y reparación de fallas en sistemas de conversión de energía eólica",
        icon: "search"
      },
      {
        title: "Suministro de Repuestos",
        description: "Provisión de componentes eléctricos y electrónicos especializados para aerogeneradores DFM.",
        icon: "package"
      },
      {
        title: "Sustitución de Palas V80",
        description: "Apoyo técnico especializado en reemplazo de palas de aerogeneradores V80.",
        icon: "tool"
      },
      {
        title: "Mantenimiento de Nacelle",
        description: "Tareas planificadas en nacelle y componentes de pala para optimizar rendimiento",
        icon: "wind"
      }
    ],
    benefits: [
      "Mayor disponibilidad operativa de los aerogeneradores con reducción significativa de paros no planificados",
      "Diagnóstico preciso y oportuno de fallas en el convertidor mediante tecnología avanzada",
      "Reducción de tiempos muertos gracias a refacciones entregadas y montadas oportunamente",
      "Extensión de la vida útil de palas y componentes de nacelle mediante mantenimiento preventivo",
      "Optimización del rendimiento energético y retorno de inversión del parque eólico"
    ]
  },
  
  "2": {
    title: "Contrato Marco de Asistencia Técnica Especializada",
    description: "Soporte especializado para aerogeneradores Gamesa G52 con diagnóstico, refacciones y mantenimiento planificado.",
    publishDate: "06 de abril de 2025",
    author: "Carlos Vidal",
    image: oaxacaim,
    sidebar: {
      location: "Oaxaca Istmo",
      technology: "Aerogeneradores Gamesa G5X",
      serviceType: "Asistencia técnica y mantenimiento eólico",
      scope: "Troubleshooting, suministro de refacciones, sustitución correctivas planificadas",
      whyUsPoints: [
        "Experiencia comprobada en aerogeneradores Gamesa y Vestas",
        "Equipo multidisciplinario con especialistas eléctricos, mecánicos y de campo",
        "Capacidad de operar fuera de México manteniendo estándares de seguridad",
        "Enfoque EHS en todas las intervenciones técnicas"
      ]
    },
    challenges: [
      "Fallas críticas en el convertidor del aerogenerador que afectaban la operación continua",
      "Necesidad urgente de refacciones eléctricas y electrónicas especializadas en ubicación remota",
      "Sustitución y mantenimiento de componentes críticos mecánicos, electrónicos, dampers, sector control, etcétera que influyen en el entorno del conjunto rotor"
    ],
    services: [
      {
        title: "Troubleshooting de Convertidor",
        description: "Diagnóstico avanzado y reparación de fallas en sistemas de conversión de energía eólica",
        icon: "search"
      },
      {
        title: "Suministro de Repuestos",
        description: "Provisión de componentes eléctricos y electrónicos especializados para aerogeneradores",
        icon: "package"
      },
      {
        title: "Servicio de Reacondicionamiento de Convertidor",
        description: "2025: Servicio técnico especializado en campo 'Reacondicionamiento de convertidor de potencias CAL'",
        icon: "tool"
      },
      {
        title: "Mantenimiento de Nacelle",
        description: "Tareas planificadas de nacelle y componentes de pala para optimizar rendimiento",
        icon: "wind"
      }
    ],
    benefits: [
      "Mayor disponibilidad operativa de los aerogeneradores con reducción significativa de paros no planificados",
      "Diagnóstico preciso y oportuno de fallas en el convertidor mediante tecnología avanzada",
      "Reducción de tiempos muertos gracias a refacciones entregadas y montadas oportunamente",
      "Extensión de la vida útil de palas y componentes de nacelle mediante mantenimiento preventivo",
      "Optimización del rendimiento energético y retorno de inversión del parque eólico"
    ]
  },
  
  "3": {
    title: "Asset Management G8X",
    description: "Soporte especializado para aerogeneradores Gamesa G8X y V80 con diagnóstico, refacciones y mantenimiento planificado.",
    publishDate: "22 de abril de 2025",
    author: "Carlos Vidal",
    image: bajacalifa,
    sidebar: {
      location: "Baja California",
      technology: "Aerogeneradores Gamesa G8X",
      serviceType: "Asistencia técnica y mantenimiento eólico",
      scope: "Troubleshooting, suministro de refacciones, sustitución de palas, tareas planificadas",
      whyUsPoints: [
        "Experiencia comprobada en aerogeneradores Gamesa y Vestas",
        "Equipo multidisciplinario con especialistas eléctricos, mecánicos y de campo",
        "Capacidad de operar fuera de México manteniendo estándares de seguridad",
        "Enfoque EHS en todas las intervenciones técnicas"
      ]
    },
    challenges: [
      "Fallas críticas en el convertidor del aerogenerador que afectaban la operación continua",
      "Necesidad urgente de refacciones eléctricas y electrónicas especializadas en ubicación remota",
      "Sustitución y mantenimiento preventivo y correctivo de convertidores"
    ],
    services: [
      {
        title: "Asistencia en la Gestión de Recursos",
        description: "Diciembre 2024-2025. Asesoramiento en disponibilidad, mantenimiento preventivo y correctivos",
        icon: "search"
      },
      {
        title: "Mantenimiento de Palas",
        description: "Septiembre 2024. Trabajos especializados de palas de aerogeneradores de 2 MW",
        icon: "tool"
      },
      {
        title: "Suministro de Repuestos",
        description: "Agosto 2024-2025. Suministro de refacciones eléctricas y electrónicas especializadas",
        icon: "package"
      },
      {
        title: "Reparación de Motores",
        description: "Septiembre 2024. Servicios de reparación de motores de frecuencia",
        icon: "wind"
      }
    ],
    benefits: [
      "Mayor disponibilidad operativa de los aerogeneradores con reducción significativa de paros no planificados",
      "Diagnóstico preciso y oportuno de fallas en el convertidor mediante tecnología avanzada",
      "Reducción de tiempos muertos gracias a refacciones entregadas y montadas oportunamente",
      "Extensión de la vida útil de palas y componentes de nacelle mediante mantenimiento preventivo",
      "Optimización del rendimiento energético y retorno de inversión del parque eólico"
    ]
  },
  
  "4": {
    title: "Asistencia Técnica Especializada G52",
    description: "Soporte especializado para aerogeneradores Gamesa G52 con diagnóstico, refacciones y mantenimiento planificado.",
    publishDate: "03 de abril de 2025",
    author: "Wilson Blanco",
    image: cuba,
    sidebar: {
      location: "Olguín, Cuba",
      technology: "Aerogeneradores Gamesa G52",
      serviceType: "Asistencia técnica especializada",
      scope: "Troubleshooting, suministro de refacciones, sustitución de materiales de palas, correctivas planificadas, eléctrico y mecánico",
      whyUsPoints: [
        "Experiencia comprobada en aerogeneradores Gamesa y Vestas",
        "Equipo multidisciplinario con especialistas eléctricos, mecánicos y de campo",
        "Capacidad de operar fuera de México manteniendo estándares de seguridad",
        "Enfoque EHS en todas las intervenciones técnicas"
      ]
    },
    challenges: [
      "Fallas críticas en el convertidor del aerogenerador que afectaban la operación continua",
      "Necesidad urgente de refacciones eléctricas y electrónicas especializadas en ubicación remota",
      "Sustitución y mantenimiento de componentes críticos mecánicos, electrónicos, gearbox, quineta, palas, sector de control, dampers, slip, etcétera"
    ],
    services: [
      {
        title: "Troubleshooting de Convertidor",
        description: "Diagnóstico avanzado y reparación de fallas en sistemas de conversión de energía eólica",
        icon: "search"
      },
      {
        title: "Suministro de Repuestos",
        description: "Provisión de componentes eléctricos y electrónicos especializados",
        icon: "package"
      },
      {
        title: "Sustitución de Materiales de Palas",
        description: "Mayo 2024. Apoyo técnico especializado en reemplazo de materiales de palas G5X",
        icon: "tool"
      },
      {
        title: "Mantenimiento de Nacelle",
        description: "Tareas planificadas de nacelle y componentes de pala para optimizar rendimiento",
        icon: "wind"
      }
    ],
    benefits: [
      "Mayor disponibilidad operativa de los aerogeneradores con reducción significativa de paros no planificados",
      "Diagnóstico preciso y oportuno de fallas en el convertidor mediante tecnología avanzada",
      "Reducción de tiempos muertos gracias a refacciones entregadas y montadas oportunamente",
      "Extensión de la vida útil de palas y componentes de nacelle mediante mantenimiento preventivo",
      "Optimización del rendimiento energético y retorno de inversión del parque eólico"
    ]
  }
};
