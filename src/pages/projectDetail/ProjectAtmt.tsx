import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Images } from 'lucide-react';
import ProjectHero from '../../components/caseDetail/ProjectHero';
import ProjectChallenge from '../../components/caseDetail/ProjectChallenge';
import ProjectSidebar from '../../components/caseDetail/ProjectSidebar';
import ServicesGrid from '../../components/caseDetail/ServiceGrid';
import ProjectBenefits from '../../components/caseDetail/ProjectBenefits';
import Navbar from '../../components/landing/NavBar';
import TopBar from '../../components/landing/TopBar';
import oaxaca from '../../assets/oaxacaim.png';
import ex1 from '../../assets/ex1.jpeg';
import ex2 from '../../assets/ex2.jpeg';
import ex3 from '../../assets/ex3.jpeg';  
import ex4 from '../../assets/ex4.jpeg';
import ex5 from '../../assets/ex5.jpeg';
import ex6 from '../../assets/ex6.jpeg';
import ex7 from '../../assets/ex7.jpeg';
import ex8 from '../../assets/ex8.jpeg';
import ex9 from '../../assets/ex9.jpeg';
import ex10 from '../../assets/ex10.jpeg';
import ex11 from '../../assets/ex11.jpeg';
import ex12 from '../../assets/ex12.jpeg';
import ex13 from '../../assets/ex13.jpeg';
import ex14 from '../../assets/ex14.jpeg';
import ex15 from '../../assets/ex15.jpeg';
import ex16 from '../../assets/ex16.jpeg';
import ex17 from '../../assets/ex17.jpeg';


// Imágenes de prueba desde Picsum
const placeholderImages = [
  ex1,
  ex2,
  ex3,
  ex4,
  ex5,
  ex6,
  ex7,
  ex8,
  ex9,
  ex10,
  ex11,
  ex12,
  ex13,
  ex14,
  ex15,
  ex16,
  ex17
];

export default function ProjectAtmt() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectData = {
    title: "Servicios Especializado en AT y MT Oaxaca, México",
    description: "Soporte especializado en AT y MT con diagnóstico, refacciones y mantenimiento planificado.",
    publishDate: "24 de abril de 2025",
    author: "Wilbert Rivera",
    image: oaxaca,
    
    gallery: [
      oaxaca,
      ...placeholderImages
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

  useEffect(() => {
    if (!isGalleryOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'Escape') setIsGalleryOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isGalleryOpen, currentImageIndex]);

  useEffect(() => {
    if (isGalleryOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isGalleryOpen]);

  const openGallery = (index = 0) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  return (
    <div className="bg-white min-h-screen">
      <TopBar />
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Botón Ver todas las fotos */}
        

        {/* Hero Section */}
        <div className="mb-8">
          <ProjectHero
            title={projectData.title}
            description={projectData.description}
            publishDate={projectData.publishDate}
            author={projectData.author}
            image={projectData.image}
          />
        </div>
        <div className="flex justify-end mb-4">
          <button
            onClick={() => openGallery(0)}
            className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 font-medium rounded-lg shadow-sm transition-all duration-200 hover:shadow-md"
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
            <div>
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

      {/* Modal de Galería - Responsive Desktop y Mobile */}
      {isGalleryOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsGalleryOpen(false);
          }}
        >
          {/* Contenedor del modal */}
          <div className="relative bg-gray-100 rounded-lg shadow-2xl w-full max-w-5xl overflow-hidden">
            
            {/* Botón cerrar */}
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-3 right-3 p-1.5 text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-50 rounded-md transition-colors z-20 shadow-sm"
              aria-label="Cerrar galería"
            >
              <X size={20} />
            </button>

            {/* Layout Desktop: Grid 3 columnas | Mobile: Stack vertical */}
            <div className="md:grid md:grid-cols-3 md:gap-3 p-4 flex flex-col">
              
              {/* Imagen principal */}
              <div className="md:col-span-2 bg-white rounded-lg relative flex items-center justify-center aspect-[4/3]">
                
                {/* Botón anterior */}
                <button
                  onClick={prevImage}
                  className="absolute left-3 p-1.5 text-gray-700 hover:text-gray-900 transition-colors z-10"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft size={24} />
                </button>

                {/* Imagen */}
                <img
                  key={currentImageIndex}
                  src={projectData.gallery[currentImageIndex]}
                  alt={`Foto ${currentImageIndex + 1} del proyecto`}
                  className="max-w-full max-h-full object-contain p-4"
                />

                {/* Botón siguiente */}
                <button
                  onClick={nextImage}
                  className="absolute right-3 p-1.5 text-gray-700 hover:text-gray-900 transition-colors z-10"
                  aria-label="Imagen siguiente"
                >
                  <ChevronRight size={24} />
                </button>

               
              </div>

              {/* Miniaturas Desktop: Columna vertical | Mobile: Fila horizontal */}
              <div className="md:col-span-1 mt-3 md:mt-0">
                {/* Desktop: Columna vertical scrolleable */}
                <div className="hidden md:block space-y-3 overflow-y-auto max-h-[500px] pr-1">
                  {projectData.gallery.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-full aspect-[4/3] rounded-lg overflow-hidden transition-all ${
                        index === currentImageIndex
                          ? 'ring-2 ring-blue-500'
                          : 'opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Miniatura ${index + 1}`}
                        className="w-full h-full object-cover bg-white"
                      />
                    </button>
                  ))}
                </div>

                {/* Mobile: Fila horizontal scrolleable (solo 3 visibles) */}
                <div className="md:hidden flex gap-3 overflow-x-auto pb-2">
                  {projectData.gallery.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden transition-all ${
                        index === currentImageIndex
                          ? 'ring-2 ring-blue-500'
                          : 'opacity-60'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Miniatura ${index + 1}`}
                        className="w-full h-full object-cover bg-white"
                      />
                    </button>
                  ))}
                </div>

                {/* Indicadores de puntos en mobile */}
                <div className="md:hidden flex justify-center gap-1.5 mt-2">
                  {projectData.gallery.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? 'bg-blue-500 w-4'
                          : 'bg-gray-400'
                      }`}
                      aria-label={`Ir a imagen ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      )}
    </div>
  );
}
