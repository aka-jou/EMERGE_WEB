import ProjectHero from '../../components/caseDetail/ProjectHero';
import ProjectChallenge from '../../components/caseDetail/ProjectChallenge';
import ProjectSidebar from '../../components/caseDetail/ProjectSidebar';
import ServicesGrid from '../../components/caseDetail/ServiceGrid';
import ProjectBenefits from '../../components/caseDetail/ProjectBenefits';
import Navbar from '../../components/landing/NavBar';
import TopBar from '../../components/landing/TopBar';
import oaxacaim from '../../assets/oaxacaim.png'; // Cambia por la imagen correcta

export default function ProjectOaxaca() {
  const projectData = {
    title: "Contrato Marco de Asistencia Técnica Especializada Oaxaca, México",
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
