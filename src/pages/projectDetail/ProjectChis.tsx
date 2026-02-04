import ProjectHero from '../../components/caseDetail/ProjectHero';
import ProjectChallenge from '../../components/caseDetail/ProjectChallenge';
import ProjectSidebar from '../../components/caseDetail/ProjectSidebar';
import ServicesGrid from '../../components/caseDetail/ServiceGrid';
import ProjectBenefits from '../../components/caseDetail/ProjectBenefits';
import Navbar from '../../components/landing/NavBar';
import TopBar from '../../components/landing/TopBar';
import chiapas from '../../assets/chiapas.png'; // Cambia por la imagen correcta


export default function ProjectChiapas() {
  const projectData = {
    title: "Asistencia Técnica Especializada en Tecnología G9X Chiapas, México",
    description: "Soporte especializado para aerogeneradores Gamesa G9X con diagnóstico, refacciones y mantenimiento planificado.",
    publishDate: "3 de abril de 2025",
    author: "Wilbert Ibarra",
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
