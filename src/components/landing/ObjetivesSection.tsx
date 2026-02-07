import { BadgeDollarSign, Handshake, ShieldCheck, Users } from "lucide-react";
import { OBJECTIVES } from "../../data/landing/objectives";
import type { Objective } from "./types";
import LOGOEM from "../../assets/LOGOEM.png";

function ObjectiveCard({ item }: { item: Objective }) {
  return (
    <div className="group bg-[#f9fafb] border border-[#005900] rounded-xl p-5 hover:shadow-md transition-all duration-300 flex flex-col items-start gap-3">
      <div className="flex items-center gap-3 w-full">
        <h3 className="font-bold text-[#005900] text-lg">{item.title}</h3>
      </div>
      <p className="text-gray-500 text-sm leading-relaxed text-left">{item.description}</p>
    </div>
  );
}

function CircleDiagram() {
  return (
    <div className="relative w-full h-full min-h-[400px] md:min-h-[600px] flex items-center justify-center p-8">
      <div
        className="absolute inset-0 m-auto aspect-square w-[65%] max-w-[65%] border-2 border-dashed border-gray-300 rounded-full"
        style={{ animation: "spin 60s linear infinite" }}
      />

      <div className="relative z-10 w-36 h-36 md:w-56 md:h-56 bg-white rounded-full shadow-[0_0_20px_rgba(0,0,0,0.1)] flex items-center justify-center p-4 border-4 border-white">
        <div className="flex flex-col items-center justify-center text-center">
          <img src={LOGOEM} alt="Logo EMERGE" className="h-16 md:h-28 w-auto" />
        </div>
      </div>

      <div className="absolute top-[8%] left-[8%] w-16 h-16 md:w-24 md:h-24 bg-[#004d80] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#004d80]/30 transform hover:scale-110 transition-transform">
        <Users size={24} className="md:w-9 md:h-9" />
      </div>

      <div className="absolute top-[8%] right-[8%] w-16 h-16 md:w-24 md:h-24 bg-[#005900] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#005900]/30 transform hover:scale-110 transition-transform">
        <ShieldCheck size={24} className="md:w-9 md:h-9" />
      </div>

      <div className="absolute bottom-[8%] left-[8%] w-16 h-16 md:w-24 md:h-24 bg-[#005900] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#005900]/30 transform hover:scale-110 transition-transform">
        <BadgeDollarSign size={24} className="md:w-9 md:h-9" />
      </div>

      <div className="absolute bottom-[8%] right-[8%] w-16 h-16 md:w-24 md:h-24 bg-[#004d80] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#005900]/30 transform hover:scale-110 transition-transform">
        <Handshake size={24} className="md:w-9 md:h-9" />
      </div>

      <div className="absolute top-1/2 left-[13%] w-3 h-3 md:w-4 md:h-4 bg-white border-2 md:border-4 border-[#525252] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 right-[13%] w-3 h-3 md:w-4 md:h-4 bg-white border-2 md:border-4 border-[#525252] rounded-full translate-x-1/2 -translate-y-1/2" />
    </div>
  );
}

export default function ObjectivesSection() {
  return (
    <section id="objetivos" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-[#005900] font-bold text-4xl md:text-5xl mb-3">Objetivos</h2>
          <p className="text-gray-500 text-lg font-normal">Asistencia técnica Especializada en Renovables</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          <div className="space-y-6 order-2 lg:order-1">
            {OBJECTIVES.map((obj) => (
              <ObjectiveCard key={obj.id} item={obj} />
            ))}
          </div>

          <div className="order-1 lg:order-2 flex items-center justify-center">
            <CircleDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}
