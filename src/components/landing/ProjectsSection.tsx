import { Sun } from "lucide-react";
import { Link } from "react-router-dom";  // 👈 AGREGA ESTE IMPORT
import { PROJECTS } from "../../data/landing/projects";
import type { ProjectItem } from "./types";

function ProjectCard({ data, isReversed }: { data: ProjectItem; isReversed: boolean }) {
  return (
    <div 
      className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 transition-all duration-300 hover:shadow-2xl max-w-6xl mx-auto"
    >
      <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} h-full`}>
        
        {/* --- LADO IMAGEN --- */}
        <div className="lg:w-1/2 relative overflow-hidden h-64 lg:h-auto group min-h-[350px]">
          {/* 👇 CAMBIA <a href> POR <Link to> */}
          <Link to={data.url || '#'} className="block w-full h-full cursor-pointer">
            <div className="absolute inset-0 bg-[#005900]/10 group-hover:bg-[#005900]/0 transition-colors duration-500 z-10"></div>
            
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            
            <div className={`absolute top-4 ${isReversed ? 'right-4' : 'left-4'} z-20 pointer-events-none`}>
              <span className="bg-white/90 backdrop-blur-md text-[#005900] text-xs font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1">
                <Sun className="w-3 h-3" />
                {data.tag}
              </span>
            </div>
          </Link>
        </div>

        {/* --- LADO CONTENIDO --- */}
        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
            <span className="inline-block px-3 py-1 bg-[#005900]/10 text-[#005900] text-sm font-semibold rounded-lg w-fit border border-[#005900]/20">
              {data.category}
            </span>
            
            <p className="text-slate-500 text-sm font-medium pl-1">
              {data.caption}
            </p>
          </div>

          {/* 👇 CAMBIA <a href> POR <Link to> */}
          <h3 className="text-4xl md:text-5xl font-bold text-[#005900] mb-6 leading-tight">
            <Link to={data.url || '#'} className="hover:text-[#005900] transition-colors">
              {data.title}
            </Link>
          </h3>

          <ul className="space-y-4 mb-8">
            {data.bullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-3 group/item">
                <div className="mt-1 min-w-[20px]">
                  <Sun className="w-5 h-5 text-[#005900] fill-[#005900] transition-transform group-hover/item:rotate-90 duration-500" />
                </div>
                <span className="text-slate-600 text-base leading-relaxed group-hover/item:text-slate-900 transition-colors">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>

          {/* 👇 CAMBIA <a href> POR <Link to> */}
          <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-end">
            <Link 
              to={data.url || '#'} 
              className="group flex items-center gap-2 text-[#005900] border-b-2 border-transparent hover:border-[#005900] transition-all font-bold pb-0.5"
            >
              {data.linkText}
              <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-20">
        
        <div className="text-center mb-20">
          <h2 className="text-[#005900] font-bold text-4xl md:text-5xl mb-3">
            Proyectos <span className="text-[#005900]">Realizados</span>
          </h2>

          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Casos de éxito con resultados medibles y comprobados.
          </p>
        </div>

        <div className="space-y-16">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} data={project} isReversed={index % 2 !== 0} />
          ))}
        </div>

        {/* 👇 CAMBIA <a href> POR <Link to> */}
        <div className="flex justify-center mt-16">
          <Link 
            to="/projects" 
            className="group bg-[#005900] hover:bg-[#004400] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 text-lg"
          >
            Ver todos los proyectos
            <span className="transform transition-transform duration-300 group-hover:translate-x-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
