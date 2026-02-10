import { Award, Factory, Zap, Users } from "lucide-react";
import type { ClientCardProps } from "./types";
import client1 from "../../assets/client1.png";
import client2 from "../../assets/client2.png";
import client3 from "../../assets/client3.png";
import ineel from "../../assets/ineel.png";
import { Link } from "react-router-dom";
import energ from "../../assets/energ.png";


function ClientCard({ title, count, description, image, highlight = false }: ClientCardProps) {
  return (
    <div
      className={`
        group relative flex flex-col h-full bg-white rounded-2xl overflow-hidden border transition-all duration-300
        ${highlight ? "border-green-500 shadow-xl scale-105 z-10" : "border-gray-100 shadow-lg hover:shadow-xl"}
      `}
    >
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-[#1D1D1D] group-hover:text-[#005900] transition-colors">{title}</h3>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{description}</p>

        <div className="pt-4 border-t border-gray-100 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-semibold text-[#005900] bg-green-50 px-3 py-1 rounded-full">{count}</span>
        </div>
      </div>
    </div>
  );
}

export default function ClientsSection() {
  return (
    <section id="clientes" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#005900] mb-6">Clientes Potenciales</h2>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg">
            Aliados estratégicos que confían en nuestro soporte técnico y operativo para impulsar la eficiencia energética.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <ClientCard
            icon={Factory}
            title="Propietarios de Plantas Eólicas"
            count="4 clientes en 2024"
            description="Nuestro firme conocimiento de la tecnología instalada y el medio ambiente en los parques eólicos de México nos permite ser un socio confiable para la operación segura de sus activos."
            image={energ}
          />

          <ClientCard
            icon={Zap}
            title="Proveedores de Servicios O&M"
            count="13 clientes en 2024"
            description="Somos el mejor aliado brindando asistencia técnica para la solución de fallas asociadas al estado de los componentes principales de aerogeneradores en cualquier ubicación."
            image={client2}
            highlight
          />

          <ClientCard
            icon={Users}
            title="Usuarios de Alta Demanda"
            count="1 cliente en 2024"
            description="Te asesoramos sobre cómo implementar las mejores soluciones existentes en el mercado para convertirte en promotor del cambio climático generando tu propia energía renovable."
            image={client3}
          />
        </div>

        <div className="relative bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl border border-gray-100 overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-50 rounded-full blur-[100px] -z-0 translate-x-1/2 -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-6 h-6 text-yellow-600" />
                <span className="text-sm font-bold tracking-widest text-[#005900] uppercase">Honor y Distinción</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-[#1D1D1D] leading-tight">
                El INEEL y Grupo EMERGE RM: <br />
                <span className="text-[#005900]">Celebrando 50 Años de Historia</span>
              </h3>

              <div className="prose text-gray-600 leading-relaxed">
                <p>
                  Nos complace enormemente compartir con nuestra comunidad el orgullo y la distinción que significó la participación y representación de nuestra dirección por parte del{" "}
                  <strong>Ing. Antonio Ruiz Matus</strong>, Director General de Grupo EMERGE RM.
                </p>
                <p>
                  Durante la conmemoración del <strong>50 Aniversario del Instituto Nacional de Electricidad y Energías Limpias (INEEL)</strong>, reafirmamos nuestro compromiso con la innovación,
                  la excelencia y la colaboración estratégica a nivel nacional.
                </p>
              </div>

              <div className="relative p-6 bg-green-50 border-l-4 border-[#005900] rounded-r-xl">
                <p className="italic text-[#005900] font-medium relative z-10 pl-2">
                  "Un símbolo de Éxito y Colaboración, no solo fue un acto protocolario, sino un testimonio tangible del valor que nuestra organización confiere a las alianzas clave y al liderazgo
                  en el ámbito energético."
                </p>
              </div>
            </div>

            <div className="relative h-full min-h-[400px] hidden md:block">
              <div className="absolute top-0 right-0 w-3/4 h-64 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 z-10 border-4 border-white">
                <img
                  src={client1}
                  alt="Evento INEEL Grupo"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute bottom-0 left-4 w-3/5 h-60 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 z-20 border-4 border-white">
                <img
                  src={ineel}
                  alt="Reconocimiento"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute bottom-10 right-10 p-4 bg-white rounded-xl shadow-lg z-30 ">
                <p className="text-[#005900] font-bold text-center leading-tight text-sm">
                  50 Aniversario <br /> INEEL
                </p>
              </div>
            </div>

            <div className="md:hidden rounded-2xl overflow-hidden shadow-lg h-64">
              <img
                src={client1}
                alt="Evento INEEL"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link to="/colaboradores" className="bg-[#005900] hover:bg-green-800 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-green-900/30 transition-all duration-300 transform hover:-translate-y-1">
            Colaboraciones estratégicas
          </Link>
        </div>
      </div>
    </section>
  );
}
