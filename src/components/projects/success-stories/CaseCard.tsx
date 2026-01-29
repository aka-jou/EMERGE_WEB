import { Calendar, MapPin, Clock, Wind, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import type { CaseStudy } from "./types";

type Props = { data: CaseStudy };

export default function CaseCard({ data }: Props) {
  return (
    <article className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200 flex flex-col h-full group">
      {/* Header con etiquetas y fecha */}
      <div className="flex justify-between items-start p-6 pb-3">
        <div className="flex gap-2">
          <span className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded border border-blue-100">
            {data.type}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-gray-400 text-xs">
          <Calendar size={12} />
          <span>{data.date}</span>
        </div>
      </div>

      {/* Título Principal */}
      <div className="px-6 pb-4">
        <h3 className="text-lg font-semibold text-gray-900 leading-tight">
          {data.title}
        </h3>
      </div>

      {/* Imagen */}
      <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Contenido */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-6 mb-6 text-sm text-gray-500">
          <div className="flex items-center gap-1.5">
            <MapPin size={14} className="text-gray-400" />
            <span>{data.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={14} className="text-gray-400" />
            <span>{data.duration}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {data.tags.map((tag, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-gray-50 text-gray-600 text-xs border border-gray-100"
            >
              {tag === "SCADA" ? <Activity size={10} /> : <Wind size={10} />}
              {tag}
            </span>
          ))}
        </div>

        {/* Botón - se empuja al final con mt-auto */}
        {/* Botón - se empuja al final con mt-auto */}
        <Link
          to={`/project-detail/${data.id}`}
          className="mt-auto w-full bg-[#005900] hover:bg-[#004400] text-white font-semibold py-3 px-4 rounded-lg transition-colors text-center"
        >
          Ver caso Completo
        </Link>
      </div>
    </article>
  );
}
