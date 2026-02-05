import ProjectHero from '../../components/caseDetail/ProjectHero';
import ProjectChallenge from '../../components/caseDetail/ProjectChallenge';
import ProjectSidebar from '../../components/caseDetail/ProjectSidebar';
import ServicesGrid from '../../components/caseDetail/ServiceGrid';
import ProjectBenefits from '../../components/caseDetail/ProjectBenefits';
import Navbar from '../../components/landing/NavBar';
import TopBar from '../../components/landing/TopBar';
import piedralarga from '../../assets/piedralarga.png'; // Cambia por la imagen correcta


export default function ProjectPiedraLarga() {
  console.log("🔥🔥🔥 ARCHIVO CARGADO - TEST 999 🔥🔥🔥");
  
  const projectData = {
    title: "Troubleshooting Piedra Larga I G8X Oaxaca, México",
    description: "Soporte especializado para aerogeneradores Gamesa G80 con diagnóstico, refacciones y mantenimiento planificado.",
    publishDate: "24 de abril de 2025",
    author: "Wilbert Rivera",
    image: piedralarga,
    
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
