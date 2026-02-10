import ProjectSidebar from '../../components/caseDetail/ProjectSidebar';
import ServicesGrid from '../../components/caseDetail/ServiceGrid';
import ProjectBenefits from '../../components/caseDetail/ProjectBenefits';
import Navbar from '../../components/landing/NavBar';
import TopBar from '../../components/landing/TopBar';
import export1 from '../../assets/export1.png';
import export2 from '../../assets/export2.png';
import export3 from '../../assets/export3.png';

export default function ProjectTorrez() {
  const projectData = {
    title: "Asistencia Técnica a Torres Meteorológicas",
    description: "Soporte especializado de Calidad.",
    publishDate: "24 de abril de 2025",
    author: "Wilbert Rivera",
    
    sidebar: {
      location: "Oaxaca",
      technology: "E&S",
      serviceType: "Asistencia técnica y mantenimiento",
      scope: "Soporte especializado de Calidad",
      whyUsPoints: [
        "Experiencia comprobada",
        "Equipo multidisciplinario con especialistas eléctricos, mecánicos y de campo",
        "Capacidad de operar fuera de México manteniendo estándares de seguridad",
        "Enfoque EHS en todas las intervenciones técnicas"
      ]
    },
    
    services: [
      {
        title: "Consultoría",
        description: "Asesoría técnica especializada para optimizar el rendimiento de las torres meteorológicas",
        icon: "tool"
      },
      {
        title: "Torres Meteorológicas E&S",
        description: "Mantenimiento especializado de torres meteorológicas con tecnología E&S",
        icon: "wind"
      },
      {
        title: "Seminarios de Equipos MET",
        description: "Capacitación técnica sobre equipos meteorológicos y mejores prácticas de mantenimiento",
        icon: "package"
      },
      {
        title: "Calidad",
        description: "Control de calidad especializado en todos los procesos de mantenimiento y operación",
        icon: "search"
      }
    ],
    
    benefits: [
      "Mayor disponibilidad operativa con reducción significativa de paros no planificados",
      "Diagnóstico preciso y oportuno de fallas mediante tecnología avanzada",
      "Reducción de tiempos muertos gracias a refacciones entregadas y montadas oportunamente",
      "Extensión de la vida útil y componentes mediante mantenimiento preventivo",
      "Optimización del rendimiento energético y retorno de inversión"
    ]
  };

  return (
    <div className="bg-white min-h-screen">
      <TopBar />
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Hero Section con 3 imágenes */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{projectData.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
            <span>Publicado el {projectData.publishDate}</span>
            <span>{projectData.author}</span>
          </div>
          <p className="text-lg text-gray-700 mb-6">{projectData.description}</p>
          
          {/* Grid de 3 imágenes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md">
              <img
                src={export1}
                alt={`${projectData.title} - imagen 1`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md">
              <img
                src={export2}
                alt={`${projectData.title} - imagen 2`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md">
              <img
                src={export3}
                alt={`${projectData.title} - imagen 3`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2">
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
