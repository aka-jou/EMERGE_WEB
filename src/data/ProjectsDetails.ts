import jama from '../assets/jama.png';
import oaxacaim from '../assets/oaxacaim.png';
import bajacalifa from '../assets/bajacalifa.png';
import cuba from '../assets/cuba.png';
import chiapas from '../assets/chiapas.png';
import merida from '../assets/merida.png';
import oaxxx from '../assets/oaxxx.png';
import republica from '../assets/republica.png';
import oaxx from '../assets/oaxx.png';

export interface ProjectDetail {
  title: string;
  description: string;
  publishDate: string;
  author: string;
  image: any;
  images?: string[]; 
  gallery?: string[];
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
    author: "Wilbert Rivera",
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
    author: "Wilbert Rivera",
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
        description: "2025: Servicio técnico especializado en campo 'Reacondicionamiento de convertidor de potencias DAC",
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
    title: "Asset Management G8X, Baja California, México",
    description: "Soporte especializado para aerogeneradores Gamesa G8X con diagnóstico, refacciones y mantenimiento planificado.",
    publishDate: "22 de abril de 2025",
    author: "Wilbert Rivera",
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
        description: "Septiembre 2024. Servicios de reparación de motores",
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
    author: "Wilbert Rivera",
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
  },
  "5": {
    title: "Asistencia Técnica Especializada en Tecnología G9X Chiapas, México",
    description: "Soporte especializado para aerogeneradores Gamesa G9X con diagnóstico, refacciones y mantenimiento planificado.",
    publishDate: "3 de abril de 2025",
    author: "Wilbert Rivera",
    image: chiapas,
    sidebar: {
      location: "Arriaga, Chiapas",
      technology: "Aerogeneradores Gamesa G9X",
      serviceType: "Asistencia técnica y mantenimiento eólico",
      scope: "Troubleshooting, suministro de refacciones, trabajos de palas, tareas planificadas",
      whyUsPoints: [
        "Experiencia comprobada en líneas de aerogeneradores Gamesa y Vestas",
        "Equipo multidisciplinario con especialistas eléctricos, mecánicos y de campo",
        "Capacidad de operar fuera de México manteniendo estándares de seguridad",
        "Enfoque EHS en todas las intervenciones técnicas"
      ]
    },
    challenges: [
      "Fallas críticas en el convertidor del aerogenerador que afectaban la operación continua",
      "Necesidad urgente de refacciones eléctricas y electrónicas especializadas en ubicación remota",
      "Sustitución y mantenimiento de componentes de palas del aerogenerador, canasta de nacelle y puerta"
    ],
    services: [
      {
        title: "Diagnóstico de Generadores",
        description: "Marzo-2025. Servicios eléctricos y diagnósticos del generador de turbina eólica (TA01)",
        icon: "search"
      },
      {
        title: "Asistencia técnica Troubleshooting",
        description: "Febrero-2025. Asistencia técnica especializada de aerogenerador de 2 MW",
        icon: "tool"
      },
      {
        title: "Suministro de Repuesto",
        description: "Septiembre-2024. Suministro de refacciones eléctricas y electrónicas de aerogeneradores",
        icon: "package"
      },
      {
        title: "Pruebas Eléctricas a Aerogenerador",
        description: "Agosto-2024. Servicio de mantenimiento del aerogenerador de 2 MW",
        icon: "wind"
      },
      {
        title: "Reacondicionamiento de Convertidor",
        description: "Marzo-2024. Servicio técnico especializado en campo. Reacondicionamiento del convertidor de potencia de aerogenerador ETC",
        icon: "tool"
      },
      {
        title: "Mantenimiento de Palas",
        description: "Marzo-2025. Apoyo con mano de obra en el mantenimiento preventivo",
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

  "6": {
    title: "Servicio Tecnico, Especializado Env2.5 MW Merida, Yucatan",
    description: "Soporte especializado para aerogeneradores Envision 2.5 MW con diagnóstico, refacciones y mantenimiento planificado.",
    publishDate: "24 de abril de 2025",
    author: "Wilbert Rivera",
    image: merida,
    sidebar: {
      location: "Dzilam de Bravo Yucatan",
      technology: "Aerogeneradores Envision 2.5 MW",
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
        description: "Provisión de componentes eléctricos y electrónicos especializados para aerogeneradores",
        icon: "package"
      },
      {
        title: "Sustitución de Palas V80",
        description: "Apoyo técnico especializado en reemplazo de palas de aerogeneradores Vestas V80",
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

  "7": {
    title: "Troubleshooting Piedra Larga I G8X Oaxaca, México",
    description: "Soporte especializado para aerogeneradores Gamesa G80 con diagnóstico, refacciones y mantenimiento planificado.",
    publishDate: "24 de abril de 2025",
    author: "Wilbert Rivera",
    image: oaxx,
    sidebar: {
      location: "Oaxaca, Istmo",
      technology: "Aerogeneradores Gamesa G8X",
      serviceType: "Asistencia técnica y mantenimiento eólico",
      scope: "Troubleshooting, suministro de refacciones y tareas y tareas planificadas",
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
      "Sustitución y mantenimiento de componentes de palas, damper de nacelle y puerta polbos"
    ],
    services: [
      {
        title: "Troubleshooting PLI",
        description: "Octubre-2024. Asistencia Técnica Especializada para solución de averías en aerogeneradores marca Gamesa modelo G80",
        icon: "search"
      },
      {
        title: "Reparación de Motores",
        description: "Noviembre-2024. Servicio de reparación de motores en taller",
        icon: "tool"
      },
      {
        title: "Reacondicionamiento de Convertidor",
        description: "Diciembre-2024. Reacondicionamiento de Convertidor de Potencia de aerogeneradores DTC.",
        icon: "package"
      },
      {
        title: "Troubleshooting PLI y PLII",
        description: "Enero-2025. Servicio de Asistencia técnica especializada para solución de averías en aerogeneradores marca Gamesa G80.",
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

  "8": {
    title: "Soporte Especializado de Calidad República Dominicana",
    description: "Soporte especializado de Calidad.",
    publishDate: "24 de abril de 2025",
    author: "Wilbert Rivera",
    image: republica,
    sidebar: {
      location: "República Dominicana",
      technology: "Aerogeneradores 2.5MW",
      serviceType: "Asistencia técnica y mantenimiento eólico",
      scope: "Soporte especializado de Calidad",
      whyUsPoints: [
        "Experiencia comprobada en aerogeneradores Gamesa y Vestas",
        "Equipo multidisciplinario con especialistas eléctricos, mecánicos y de campo",
        "Capacidad de operar fuera de México manteniendo estándares de seguridad",
        "Enfoque EHS en todas las intervenciones técnicas"
      ]
    },
    challenges: [
      "Necesidad de asegurar la calidad operativa de aerogeneradores de 2.5MW en condiciones climáticas exigentes",
      "Mantener estándares internacionales de calidad en servicios especializados",
      "Garantizar la disponibilidad continua del parque eólico mediante inspecciones preventivas"
    ],
    services: [
      {
        title: "Mantenimiento Preventivo",
        description: "Servicios programados de mantenimiento preventivo para garantizar la operación óptima de los aerogeneradores",
        icon: "tool"
      },
      {
        title: "Videoscopía en Multiplicadora",
        description: "Inspección interna mediante videoscopía de la multiplicadora para detectar desgaste y fallas potenciales",
        icon: "search"
      },
      {
        title: "Inspección de Equipos de Seguridad",
        description: "Revisión exhaustiva de sistemas de seguridad para cumplir con normativas internacionales",
        icon: "package"
      },
      {
        title: "Calidad",
        description: "Control de calidad especializado en todos los procesos de mantenimiento y operación",
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

  "9": {
    title: "Servicios Especializado en AT y MT Oaxaca, México",
    description: "Soporte especializado en AT y MT con diagnóstico, refacciones y mantenimiento planificado.",
    publishDate: "24 de abril de 2025",
    author: "Wilbert Rivera",
    image: oaxxx,
    sidebar: {
      location: "Juchitán de Zaragoza, Oaxaca",
      technology: "Ormazabal, Iberica, ABB, Schneider",
      serviceType: "Servicio Especializado de AT y MT",
      scope: "Servicios Especializados en AT, MT y Baja Tensión",
      whyUsPoints: [
        "Experiencia comprobada en líneas de transmisión de AT y MT",
        "Equipo multidisciplinario con especialistas eléctricos y de campo",
        "Capacidad de operar fuera de México manteniendo estándares de seguridad",
        "Enfoque EHS en todas las intervenciones técnicas"
      ]
    },
    challenges: [
      "Necesidad de mantenimiento especializado en equipos de alta y media tensión",
      "Garantizar la continuidad del servicio eléctrico en una zona industrial crítica",
      "Localización precisa de fallas en redes subterráneas para minimizar tiempos de reparación"
    ],
    services: [
      {
        title: "Pruebas Eléctricas a Equipos Primarios",
        description: "Resistencia de Aislamiento. Relación de Transformación. Resistencia Óhmica. Termografía. Corriente de excitación. Inspección y Ajuste de Tableros e Interruptores. Prueba de relación y saturación a TC´s.",
        icon: "search"
      },
      {
        title: "Línea de transmisión en AT y MT",
        description: "Mantenimiento y Llegada. Rectificación de Empalmes. Análisis Termográfico. Inspección y sistemas de Tierras. Mejoras en el sistema de Iluminación. Resguardo y Sustitución en Torres y Apoyos. Inspección y sustitución de hilo de guarda. Liberación de Servidumbre. Licitaciones y Levantamiento de proyectos de posteria en media y baja tensión.",
        icon: "tool"
      },
      {
        title: "Celda de Media Tensión",
        description: "Limpieza General y Lubricación de mecanismos. Verificación del rod de ajuste de las terminales. Inspección, reparación y reubicación del mecanismo de interruptores. Cambio y operación de pararrayos y apartarrayos. Mantenimiento de las terminales. Suministro e instalación de Terminales Termoretractil o en caliente.",
        icon: "package"
      },
      {
        title: "Mantenimiento Preventivo en SET",
        description: "Limpieza de Equipos Primarios. Ajuste de Cuchillas e Interruptores Metal-Clad. Calibración de relevadores en tableros. Operación y Ajuste en Celdas Compactas. Inspección en Transformadores. Transformadores de Corriente y de Potencia. Localización de Conexiones. Apartarrayos. Interruptores de Potencia. Interruptores de Aceite en Potencia. Cuerda de Baterías. Banco de Condensadores. Subestaciones de Emergencia. Sistemas de tierra y apartarrayos.",
        icon: "wind"
      },
      {
        title: "Reparación de Celdas de Media Tensión",
        description: "Reparación de celdas de media tensión de 3ra generación inmediata. Refabricación. Reparación y desbloqueo de mecanismo de operación en celdas de 1ra y 2da generación. Reparación y sustitución de tensión encapsulada en gas SF6 o en aire. Mejora de Reconectados Cuchillas MT. Reposición de interruptores en celdas de Media tensión. Instalación de SF6 (lavariante de aceite). Sustitución de Fugas y reparación de cubas de celdas de MT.",
        icon: "tool"
      },
      {
        title: "Localización de Fallas en Redes Subterráneas de MT",
        description: "Detección de fallas en circuitos Eléctricos de Media Tensión (hasta 35 KV). Identificación de Cables de AT y MT. Excavación en Punto de Localización de fallas. Instalación de empalmes, terminales de Empalmes termoplásticas o en frío. Corte y empalmes de cables. Localización de fallas (Muy-Low-frecuency). Evaluación de la degradación Tensión de Descarga de armadura disruptiva. Delta o Línea de Media tensión.",
        icon: "wind"
      },
    ],
    benefits: [
      "Mayor disponibilidad operativa del sistema eléctrico con reducción significativa de paros no planificados",
      "Diagnóstico preciso y oportuno de fallas en el sistema mediante tecnología avanzada",
      "Reducción de tiempos muertos gracias a refacciones entregadas y montadas oportunamente",
      "Extensión de la vida útil de palas y componentes de nacelle mediante mantenimiento preventivo",
      "Optimización del rendimiento energético y retorno de inversión del sistema eléctrico"
    ],
  }
};

