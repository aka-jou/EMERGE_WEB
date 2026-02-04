import ProjectHero from '../../components/caseDetail/ProjectHero';
import ProjectChallenge from '../../components/caseDetail/ProjectChallenge';
import ProjectSidebar from '../../components/caseDetail/ProjectSidebar';
import ServicesGrid from '../../components/caseDetail/ServiceGrid';
import ProjectBenefits from '../../components/caseDetail/ProjectBenefits';
import Navbar from '../../components/landing/NavBar';
import TopBar from '../../components/landing/TopBar';
import republicadominicana from '../../assets/republicadominicana.png'; // Cambia por la imagen correcta


export default function ProjectRepublicaDominicana() {
  const projectData = {
    title: "Soporte Especializado de Calidad República Dominicana",
    description: "Soporte especializado de Calidad.",
    publishDate: "24 de abril de 2025",
    author: "Wilbert Ibarra",
    image: republicadominicana,
    
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
