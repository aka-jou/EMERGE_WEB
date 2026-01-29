import { useMemo, useState } from "react";
import { Search, Filter, ChevronDown, Check } from "lucide-react";

import DepartmentSection from "./DepartmentSection";
import { DEPARTMENTS_DATA } from "../../data/team/team.data";

export default function TeamDirectory() {

  const [searchTerm, setSearchTerm] = useState("");

  // ✅ NUEVO: filtro real por área (dropdown)
  const [isAreaOpen, setIsAreaOpen] = useState(false);
  const [areaFilter, setAreaFilter] = useState<string>("Todas");

  const AREA_OPTIONS = useMemo(() => {
    const areas = DEPARTMENTS_DATA.map((d) => d.title);
    return ["Todas", ...areas];
  }, []);


  const filteredDepartments = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return DEPARTMENTS_DATA;

    return DEPARTMENTS_DATA.map((dep) => {
      const members = dep.members.filter((m) => {
        const haystack = `${m.name} ${m.role} ${m.email} ${m.location}`.toLowerCase();
        return haystack.includes(q);
      });
      return { ...dep, members };
    }).filter((dep) => dep.members.length > 0);
  }, [searchTerm]);

  // ✅ NUEVO: aplica filtro por área encima de la búsqueda
  const departmentsToRender = useMemo(() => {
    if (areaFilter === "Todas") return filteredDepartments;
    return filteredDepartments.filter((dep) => dep.title === areaFilter);
  }, [filteredDepartments, areaFilter]);

  return (
    <div className="bg-white relative w-full h-full min-h-screen rounded-lg flex flex-col border border-gray-200 shadow-sm overflow-hidden">
      {/* Header Sticky */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-20">
        {/* ✅ SOLO PADDING: más lateral */}
        <div className="px-6 sm:px-8 lg:px-12 py-6">
          <h1 className="font-bold text-[#005900] text-3xl mb-2">Nuestro Equipo</h1>
          <p className="text-gray-600">
            Conoce a nuestro equipo completo y encuentra a tus compañeros y proyectos.
          </p>
        </div>

        {/* Search + Filter */}
        {/* ✅ SOLO PADDING: más lateral */}
        <div className="px-6 sm:px-8 lg:px-12 pb-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
            <div className="flex-1 relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Search size={18} />
              </div>

              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por nombre o rol..."
                className="w-full h-10 pl-10 pr-4 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#005900] focus:border-transparent transition-all"
              />
            </div>

            {/* ✅ Filtro funcional por área */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsAreaOpen((v) => !v)}
                className="flex items-center justify-center gap-2 h-10 px-4 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 text-gray-700 text-sm font-medium transition-colors w-full md:w-auto"
              >
                <Filter size={16} />
                <span className="max-w-[220px] truncate">
                  {areaFilter === "Todas" ? "Filtrar por área" : areaFilter}
                </span>
                <ChevronDown size={16} className={isAreaOpen ? "rotate-180 transition-transform" : "transition-transform"} />
              </button>

              {isAreaOpen && (
                <div className="absolute right-0 mt-2 w-full md:w-[320px] bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-30">
                  <div className="max-h-64 overflow-y-auto">
                    {AREA_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => {
                          setAreaFilter(opt);
                          setIsAreaOpen(false);
                        }}
                        className="w-full flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        <span className="truncate">{opt}</span>
                        {areaFilter === opt && <Check className="w-4 h-4 text-[#005900]" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

   
       
      </header>

   
      <main className="flex-1 overflow-y-auto px-6 sm:px-8 lg:px-12 py-8 scroll-smooth">
        {departmentsToRender.map((department, index) => (
          <DepartmentSection key={index} department={department} />
        ))}
        <div className="h-10" />
      </main>
    </div>
  );
}
