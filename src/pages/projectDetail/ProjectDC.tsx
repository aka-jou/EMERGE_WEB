import ProjectHero from '../../components/caseDetail/ProjectHero';
import ProjectChallenge from '../../components/caseDetail/ProjectChallenge';
import ProjectSidebar from '../../components/caseDetail/ProjectSidebar';
import ServicesGrid from '../../components/caseDetail/ServiceGrid';
import ProjectBenefits from '../../components/caseDetail/ProjectBenefits';
import Navbar from '../../components/landing/NavBar';
import TopBar from '../../components/landing/TopBar';
import cuba from '../../assets/cuba.png'; // Cambia por la imagen correcta

export default function ProjectCuba() {
  const projectData = {
    title: "Asistencia Técnica Especializada G52 Olguín, Cuba",
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
      "Sustitución y mantenimiento de componentes críticos mecánicos, electrónicos, gearbox, quineta, palas, sector de control, dampers, slip, etcétera que influyen en el conjunto nacelle/rotor y conjunto de acimut, alimentador, slip anillos resbaladores y podemos maximizar"
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
