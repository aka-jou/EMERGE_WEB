import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Images } from 'lucide-react';
import ProjectHero from '../../components/caseDetail/ProjectHero';
import ProjectChallenge from '../../components/caseDetail/ProjectChallenge';
import ProjectSidebar from '../../components/caseDetail/ProjectSidebar';
import ServicesGrid from '../../components/caseDetail/ServiceGrid';
import ProjectBenefits from '../../components/caseDetail/ProjectBenefits';
import Navbar from '../../components/landing/NavBar';
import TopBar from '../../components/landing/TopBar';
import oaxaca from '../../assets/oaxacaim.png';

// Importa más imágenes del proyecto (agrega las que tengas)
import oaxaca2 from '../../assets/oaxaca2.png';
import oaxaca3 from '../../assets/oaxaca3.png';
import oaxaca4 from '../../assets/oaxaca4.png';

export default function ProjectOaxaca() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectData = {
    title: "Servicios Especializado en AT y MT Oaxaca, México",
    description: "Soporte especializado en AT y MT con diagnóstico, refacciones y mantenimiento planificado.",
    publishDate: "24 de abril de 2025",
    author: "Wilbert Ibarra",
    image: oaxaca,
    
    // 👇 Array de todas las fotos del proyecto
    gallery: [
      oaxaca,
      oaxaca2,
      oaxaca3,
      oaxaca4,
      // Agrega más imágenes aquí
    ],
    
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
      }
    ],
    
    benefits: [
      "Mayor disponibilidad operativa del sistema eléctrico con reducción significativa de paros no planificados",
      "Diagnóstico preciso y oportuno de fallas en el sistema mediante tecnología avanzada",
      "Reducción de tiempos muertos gracias a refacciones entregadas y montadas oportunamente",
      "Extensión de la vida útil de palas y componentes de nacelle mediante mantenimiento preventivo",
      "Optimización del rendimiento energético y retorno de inversión del sistema eléctrico"
    ]
  };

  // Funciones para la galería
  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === projectData.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? projectData.gallery.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-white min-h-screen">
      <TopBar />
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Hero Section con botón de galería */}
        <div className="relative">
          <ProjectHero
            title={projectData.title}
            description={projectData.description}
            publishDate={projectData.publishDate}
            author={projectData.author}
            image={projectData.image}
          />
          
          {/* Botón "Ver todas las fotos" */}
          <button
            onClick={() => setIsGalleryOpen(true)}
            className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-white/90 hover:bg-white backdrop-blur-sm text-gray-800 font-medium rounded-lg shadow-lg transition-all hover:shadow-xl"
          >
            <Images size={20} />
            Ver todas las fotos ({projectData.gallery.length})
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <ProjectChallenge challenges={projectData.challenges} />
            <ServicesGrid services={projectData.services} />
            <ProjectBenefits benefits={projectData.benefits} />
          </div>

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

      {/* Modal de Galería */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          {/* Botón cerrar */}
          <button
            onClick={() => setIsGalleryOpen(false)}
            className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors z-10"
          >
            <X size={32} />
          </button>

          {/* Contador */}
          <div className="absolute top-4 left-4 text-white text-lg font-medium z-10">
            {currentImageIndex + 1} / {projectData.gallery.length}
          </div>

          {/* Botón anterior */}
          <button
            onClick={prevImage}
            className="absolute left-4 p-3 text-white hover:bg-white/10 rounded-full transition-colors z-10"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Imagen actual */}
          <div className="max-w-7xl max-h-[90vh] mx-auto px-20">
            <img
              src={projectData.gallery[currentImageIndex]}
              alt={`Foto ${currentImageIndex + 1} del proyecto`}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Botón siguiente */}
          <button
            onClick={nextImage}
            className="absolute right-4 p-3 text-white hover:bg-white/10 rounded-full transition-colors z-10"
          >
            <ChevronRight size={40} />
          </button>

          {/* Thumbnails (miniaturas) */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 overflow-x-auto max-w-4xl px-4">
            {projectData.gallery.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentImageIndex
                    ? 'border-white scale-110'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={img}
                  alt={`Miniatura ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
