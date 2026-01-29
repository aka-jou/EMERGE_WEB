interface ProjectSidebarProps {
  location: string;
  technology: string;
  serviceType: string;
  scope: string;
  whyUsPoints: string[];
}

export default function ProjectSidebar({
  location,
  technology,
  serviceType,
  scope,
  whyUsPoints
}: ProjectSidebarProps) {
  return (
    <div className="space-y-6">
      {/* Datos del Proyecto */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Datos del Proyecto
        </h3>
        
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500 mb-1">Ubicación</p>
            <p className="font-semibold text-gray-800">{location}</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-500 mb-1">Tecnología Atendida</p>
            <p className="font-semibold text-gray-800">{technology}</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-500 mb-1">Tipo de Servicio</p>
            <p className="font-semibold text-gray-800">{serviceType}</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-500 mb-1">Alcance</p>
            <p className="font-semibold text-gray-800">{scope}</p>
          </div>
        </div>
      </div>

      {/* Por qué Emerge */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          Por qué Emerge fue el aliado adecuado
        </h3>
        
        <ul className="space-y-3">
          {whyUsPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-2">
              <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-sm text-gray-700">{point}</span>
            </li>
          ))}
        </ul>
      </div>

 
    </div>
  );
}
