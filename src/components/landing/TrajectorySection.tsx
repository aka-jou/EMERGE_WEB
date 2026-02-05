import { TIMELINE, STATS } from "../../data/landing/timeline";
import type { TrajectoryItem } from "./types";


function CardContent({ item, align }: { item: TrajectoryItem; align: "left" | "right" }) {
  return (
    <div
      className={`
        w-full max-w-md
        relative p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2
        ${item.color} ${item.shadow} ${item.borderColor ? `border-2 ${item.borderColor}` : ""}
        group-hover:shadow-2xl
      `}
    >
      <div className="flex flex-col gap-3 mb-4">
        <div className="flex items-center justify-between">
          
          <span className={`md:hidden text-2xl font-bold ${item.textColor}`}>{item.year}</span>
        </div>
        <h3 className={`text-2xl md:text-3xl font-bold ${item.textColor}`}>{item.title}</h3>
      </div>


      <p className={`text-base leading-relaxed ${item.textColor === "text-white" ? "text-green-50" : "text-gray-600"}`}>
        {item.description}
      </p>


      <div
        className={`
          hidden md:block absolute top-1/2 -mt-2 w-4 h-4 rotate-45
          ${item.color} ${item.borderColor ? `border-l-2 border-b-2 ${item.borderColor}` : ""}
          ${align === "right" ? "-right-2" : "-left-2"}
        `}
      />
    </div>
  );
}


export default function TrajectorySection() {
  return (
    <section id="timeline" className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[5%] right-0 w-[600px] h-[600px] bg-green-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[5%] left-0 w-[500px] h-[500px] bg-gray-200/40 rounded-full blur-[100px]" />
      </div>


      <div className="container mx-auto px-4 md:px-8 lg:px-20 relative z-10">
        <div className="text-center mb-28">
          <h2 className="text-4xl md:text-5xl font-bold text-[#005900] mb-6">Nuestra Trayectoria</h2>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg">Nuestro Fundador en 2013 Inicia en sector eólico como Coordinador O&M de 234 MW 3 parques eólicos aumentando año con año hasta alcanzar 1.5 GW para la principal ISP de México en 12 parques simultáneos en 5 años.

Del 2018 al 2023 transporta su experiencia a la representación técnica-comercial de 3 ISP emergentes en eólica y solar cumpliendo sus Hitos y agregando 1.8 GW+ como mantenedor multibrand.</p>
        </div>


        <div className="relative max-w-6xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 md:w-1.5 bg-gradient-to-t from-gray-300 via-green-400 to-[#005900] rounded-full transform md:-translate-x-1/2 h-full z-0" />


          <div className="flex flex-col gap-12 md:gap-0">
            {TIMELINE.map((item, index) => {
              const isEven = index % 2 === 0;
              const Icon = item.icon;


              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center w-full md:mb-32 last:mb-0 group">
                  <div className="w-full md:w-1/2 flex justify-start md:justify-end pl-12 md:pl-0 md:pr-16 relative z-10">
                    {isEven ? (
                      <CardContent item={item} align="right" />
                    ) : (
                      <div className="hidden md:block pr-8">
                        <span className="text-7xl font-black text-gray-200 tracking-tighter opacity-50 select-none group-hover:scale-110 group-hover:text-[#005900] group-hover:opacity-100 transition-all duration-500">
                          {item.year}
                        </span>
                      </div>
                    )}
                  </div>


                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-20">
                    <div
                      className="
                        flex items-center justify-center
                        w-12 h-12 md:w-16 md:h-16 rounded-full
                        border-4 border-white shadow-lg
                        bg-[#005900] text-white
                        transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12
                      "
                    >
                      <Icon className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                  </div>


                  <div className="w-full md:w-1/2 flex justify-start pl-12 md:pl-16 relative z-10 mt-6 md:mt-0">
                    {!isEven ? (
                      <CardContent item={item} align="left" />
                    ) : (
                      <div className="hidden md:block pl-8">
                        <span className="text-7xl font-black text-gray-200 tracking-tighter opacity-50 select-none group-hover:scale-110 group-hover:text-[#005900] group-hover:opacity-100 transition-all duration-500">
                          {item.year}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>


        <div className="mt-32 max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {STATS.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="flex flex-col items-center justify-center pt-6 md:pt-0 text-center px-4">
                    <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center text-[#005900] mb-4">
                      <Icon className="w-7 h-7" />
                    </div>
                    <p className="text-3xl font-bold text-[#1D1D1D] mb-1">{stat.value}</p>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
