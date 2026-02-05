import ProjectHero from '../../components/caseDetail/ProjectHero';
import ProjectChallenge from '../../components/caseDetail/ProjectChallenge';
import ProjectSidebar from '../../components/caseDetail/ProjectSidebar';
import ServicesGrid from '../../components/caseDetail/ServiceGrid';
import ProjectBenefits from '../../components/caseDetail/ProjectBenefits';
import Navbar from '../../components/landing/NavBar';
import TopBar from '../../components/landing/TopBar';
import bajacalifa from '../../assets/bajacalifa.png'; // Cambia por la imagen correcta

export default function ProjectBajaCalifa() {
  const projectData = {
    title: "Asset Management G8X Baja California, México",
    description: "Soporte especializado para aerogeneradores Gamesa G8X con diagnóstico, refacciones y mantenimiento planificado.",
    publishDate: "22 de abril de 2025",
    author: "Wilbert Rivera",
    image: bajacalifa,
    
    sidebar: {
      location: "Baja California",
      technology: "Aerogeneradores Gamesa G80 ",
      serviceType: "Asistencia técnica y mantenimiento eólico",
      scope: "Troubleshooting, suministro de refacciones, sustitución de palas, tareas planificadas",
      whyUsPoints: [
        "Experiencia comprobada en aerogeneradores Gamesa",
        "Equipo multidisciplinario con especialistas eléctricos, mecánicos y de campo",
        "Capacidad de operar fuera de México manteniendo estándares de seguridad",
        "Enfoque EHS en todas las intervenciones técnicas"
      ]
    },
    
    challenges: [
      "Fallas críticas en el convertidor del aerogenerador que afectaban la operación continua",
      "Necesidad urgente de refacciones eléctricas y electrónicas especializadas en ubicación remota",
      "Mantenimiento preventivo y correctivo de convertidores dtc"
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
      },
      {
        title: "Reacondicionamiento de Convertidor",
        description: "Mayo 2024-2025. Servicio Técnico especializado en campo. Reacondicionamiento de convertidor de potencia de aerogenerador ETC",
        icon: "tool"
      },
      {
        title: "Reacondicionamiento de Generador Canvey",
        description: "Marzo 2024. Servicio de diagnóstico y reparación del generador",
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
  };

  return (
    <div className="bg-white min-h-screen">
      <TopBar />
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Hero Section */}
        <ProjectHero
          title={projectData.title}
          description={projectData.description}
          publishDate={projectData.publishDate}
          author={projectData.author}
          image={projectData.image}
        />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2">
            <ProjectChallenge challenges={projectData.challenges} />
            <ServicesGrid services={projectData.services} />
            <ProjectBenefits benefits={projectData.benefits} />
          </div>

          {/* Sidebar - 1 column */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-8">
              <ProjectSidebar
                location={projectData.sidebar.location}
                technology={projectData.sidebar.technology}
                serviceType={projectData.sidebar.serviceType}
                scope={projectData.sidebar.scope}
                whyUsPoints={projectData.sidebar.whyUsPoints}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
