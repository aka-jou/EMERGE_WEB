import { useState } from "react";
import { Search, X } from "lucide-react";

import jama from "../../../assets/jama.png";

import oaxacaim from "../../../assets/oaxacaim.png";
import bajacalifa from "../../../assets/bajacalifa.png";
import cuba from "../../../assets/cuba.png";
import chiapas from "../../../assets/chiapas.png";
import merida from "../../../assets/merida.png";
import oaxxx from "../../../assets/oaxxx.png";
import republica from "../../../assets/republica.png";
import oaxx from "../../../assets/oaxx.png";
import CaseCard from "./CaseCard";


export const CASES = [
  {
    id: "1", 
    title: "Asistencia Técnica Especializada G8X Newport, Jamaica",
    type: "Preventivo",
    date: "15 Ene 2025",
    location: "Jamaica",
    duration: "3 meses",
    tags: ["Profesionalismo", "Calidad", "Servicio"],
    image: jama,
  },
  {
    id: "2", 
    title: "Contrato Marco de Asistencia Técnica Especializada, Oaxaca",
    type: "Preventivo",
    date: "15 Ene 2025", 
    location: "Oaxaca",
    duration: "3 meses",
    tags: ["Profesionalismo", "Calidad", "Servicio"],
    image: oaxacaim,
  },
  {
    id: "3", 
    title: "Asset Management G8X, Baja California, México ",
    type: "Preventivo",
    date: "15 Ene 2025",
    location: "Tecate Rumorosa",
    duration: "2 años",
    tags: ["Profesionalismo", "Calidad", "Servicio"],
    image: bajacalifa,
  },
  {
    id: "4",
    title: "Asistencia Técnica Especializada G52",
    type: "Preventivo/Correctivo",
    date: "15 Ene 2025",
    location: "Cuba",
    duration: "2 meses",
    tags: ["Profesionalismo", "Calidad", "Servicio"],
    image: cuba,
  },
  // --- LOS 5 NUEVOS CASOS AGREGADOS ---
  {
    id: "5",
    title: "Asistencia Técnica Especializada G8X Chiapas, México",
    type: "Calidad",
    date: "15 Ene 2025",
    location: "Arriaga",
    duration: "3 meses",
    tags: ["Profesionalismo", "Calidad", "Servicio"],
    image: chiapas,
  },
  {
    id: "6",
    title: "Servicio Técnico Especializado Mérida, México",
    type: "Apoyo a mantenimiento",
    date: "15 Ene 2025",
    location: "Mérida, Yucatán",
    duration: "1 mes",
    tags: ["Profesionalismo", "Calidad", "Servicio"],
    image: merida,
  },
  {
    id: "7",
    title: "Troubleshooting G8X Oaxaca, México",
    type: "Troubleshooting",
    date: "15 Ene 2025",
    location: "Unión Hidalgo, Oaxaca",
    duration: "10 meses",
    tags: ["Profesionalismo", "Calidad", "Servicio"],
    image: oaxx,
  },
  {
    id: "8",
    title: "Soporte Especializado de Calidad República Dominicana",
    type: "Calidad",
    date: "15 Ene 2025",
    location: "República Dominicana",
    duration: "2 años",
    tags: ["Profesionalismo", "Calidad", "Servicio"],
    image: republica,
  },
  {
    id: "9",
    title: "Servicios Especializado de AT y MT Oaxaca, México",
    type: "Pruebas a equipos",
    date: "15 Ene 2025",
    location: "Ingenio Santo Domingo, Oaxaca",
    duration: "1 mes",
    tags: ["Profesionalismo", "Calidad", "Servicio"],
    image: oaxxx,
  },
];

export default function SuccessStoriesSection() {
  const [searchTerm, setSearchTerm] = useState("");

  // Función de filtrado
  const filterCases = () => {
    if (!searchTerm || searchTerm.trim() === '') {
      return CASES;
    }

    const term = searchTerm.toLowerCase().trim();
    
    return CASES.filter(caseItem => {
      try {
        return (
          caseItem.location?.toLowerCase().includes(term) ||
          caseItem.title?.toLowerCase().includes(term) ||
          caseItem.type?.toLowerCase().includes(term) ||
          caseItem.tags?.some(tag => tag.toLowerCase().includes(term))
        );
      } catch (error) {
        console.error('Error filtering case:', error);
        return false;
      }
    });
  };

  const filteredCases = filterCases();
  const totalCases = CASES.length;
  const filteredCount = filteredCases.length;

  return (
    <section className="bg-[#fafafa] w-full py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-[#005900] font-bold text-3xl md:text-4xl mb-4">
            Mantenimientos y Casos de Éxito
          </h2>
          <p className="text-[#525252] text-lg md:text-xl leading-relaxed">
            Descubre cómo optimizamos la disponibilidad de parques eólicos en México y LATAM
            con soluciones técnicas comprobadas y resultados medibles.
          </p>
        </div>

        {/* Barra de búsqueda */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar por ubicación, proyecto o tipo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-12 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#005900] focus:border-transparent transition-all shadow-sm"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Limpiar búsqueda"
              >
                <X size={20} />
              </button>
            )}
          </div>
        </div>

        {/* Contador de resultados */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <p className="text-[#525252] text-sm font-medium">
            {searchTerm ? (
              <>
                Mostrando <span className="font-bold text-[#005900]">{filteredCount}</span> de {totalCases} casos
              </>
            ) : (
              `Mostrando ${totalCases} casos`
            )}
          </p>

          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#005900] transition-colors font-medium"
            >
              <X size={16} />
              Limpiar filtros
            </button>
          )}
        </div>

        {/* Grid de casos */}
        {filteredCases.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {filteredCases.map((item) => (
              <CaseCard key={item.id} data={item} />
            ))}
          </div>
        ) : (
          // Estado vacío
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No se encontraron casos
            </h3>
            <p className="text-gray-500 mb-6">
              No hay proyectos que coincidan con "{searchTerm}"
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="px-6 py-3 bg-[#005900] hover:bg-green-700 text-white font-semibold rounded-lg transition-colors shadow-md"
            >
              Ver todos los casos
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
