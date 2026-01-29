import { Award, Settings, Users, Globe } from "lucide-react";

export default function FeaturesBar() {
  return (
    <div className="relative -mt-8 z-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-20">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-4">
              <Award className="w-4 h-4 text-[#005900] flex-shrink-0" />
              <span className="text-[#404040]">Certificación ISO 9001:2015</span>
            </div>
            <div className="flex items-center gap-4">
              <Settings className="w-4 h-4 text-[#005900] flex-shrink-0" />
              <span className="text-[#404040]">Tecnología de Vanguardia</span>
            </div>
            <div className="flex items-center gap-4">
              <Users className="w-4 h-4 text-[#005900] flex-shrink-0" />
              <span className="text-[#404040]">Equipo Multidisciplinario</span>
            </div>
            <div className="flex items-center gap-4">
              <Globe className="w-4 h-4 text-[#005900] flex-shrink-0" />
              <span className="text-[#404040]">Cobertura Internacional</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
