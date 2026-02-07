// ✅ 2 niveles arriba
import nego from "../../assets/nego.png";
import nego2 from "../../assets/nego2.png";
import nego3 from "../../assets/nego3.png";
import nego4 from "../../assets/nego4.png";

export default function BusinessPlanSection() {
  return (
    <section id="plan" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#005900] mb-4">
            Plan de Negocio
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Estrategia integral para el crecimiento sostenible
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Columna Izquierda - 2 gráficas */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <img
                src={nego4}
                alt="Análisis de pérdidas mensuales 2012-2025"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <img
                src={nego}
                alt="Gráfica de barras comparativa"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Columna Central - Tabla y texto */}
          <div className="lg:col-span-6 flex flex-col items-center">
            {/* Contenedor con scroll horizontal para móvil */}
            <div className="w-full overflow-x-auto mb-8">
              <div className="min-w-full inline-block overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white">
                <table className="w-full text-sm md:text-base min-w-[600px]">
                  <thead>
                    <tr className="bg-[#005900] text-white">
                      <th className="p-3 md:p-4 text-left font-semibold whitespace-nowrap">
                        Concepto
                      </th>
                      <th className="p-3 md:p-4 text-center font-bold bg-[#0a7a0a] whitespace-nowrap">
                        Lanzamiento
                      </th>
                      <th className="p-3 md:p-4 text-center font-bold bg-[#005900] whitespace-nowrap">
                        Crecimiento Anual
                      </th>
                      <th className="p-3 md:p-4 text-center font-bold bg-[#0a7a0a] whitespace-nowrap">
                        Forecast 5 años
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-gray-700">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-3 md:p-4 font-bold text-[#005900] whitespace-nowrap">
                        Consultoría
                      </td>
                      <td className="p-3 md:p-4 text-center font-medium">
                        15%
                      </td>
                      <td className="p-3 md:p-4 text-center font-medium">
                        18%
                      </td>
                      <td className="p-3 md:p-4 text-center font-medium">
                        13%
                      </td>
                    </tr>
                    <tr className="bg-green-50/30 hover:bg-green-50 transition-colors">
                      <td className="p-3 md:p-4 font-bold text-[#005900] whitespace-nowrap">
                        Servicios
                      </td>
                      <td className="p-3 md:p-4 text-center font-bold text-green-700">
                        52%
                      </td>
                      <td className="p-3 md:p-4 text-center font-medium">
                        37%
                      </td>
                      <td className="p-3 md:p-4 text-center font-bold text-green-700">
                        57%
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-3 md:p-4 font-bold text-[#005900] whitespace-nowrap">
                        Repuestos
                      </td>
                      <td className="p-3 md:p-4 text-center font-medium">
                        33%
                      </td>
                      <td className="p-3 md:p-4 text-center font-medium">
                        25%
                      </td>
                      <td className="p-3 md:p-4 text-center font-medium">
                        30%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-center font-medium text-[#005900] leading-relaxed max-w-2xl">
              "La introducción al 1% del mercado actual explorado nos ha
              permitido un crecimiento sostenible del negocio."
            </p>
          </div>

          {/* Columna Derecha - 2 gráficas */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <img
                src={nego2}
                alt="Potencia acumulada - Curva de crecimiento"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <img
                src={nego3}
                alt="Distribución estadística"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 pt-8 border-t border-gray-100">
          <div className="flex gap-4">
            <div className="w-1 bg-[#005900] h-full rounded-full flex-shrink-0" />
            <div>
              <h4 className="font-bold text-[#005900] mb-3 text-2xl"></h4>
              <p className="text-xl md:text-2xl leading-relaxed max-w-2xl text-gray-600">
                En función de los intereses de cliente adecuamos la información
                para soporte en la toma de decisiones desde un{" "}
                <span className="text-[#005900] font-semibold">
                  sentido global
                </span>
                .
              </p>
            </div>
          </div>

          <div className="flex gap-4 flex-row-reverse">
            <div className="w-1 bg-[#005900] h-full rounded-full flex-shrink-0" />
            <div className="text-right">
              <h4 className="font-bold text-[#005900] mb-3 text-2xl"></h4>
              <p className="text-xl md:text-2xl leading-relaxed max-w-2xl text-gray-600 ml-auto">
                Analizamos desde una{" "}
                <span className="text-[#005900] font-semibold">
                  perspectiva puntual
                </span>{" "}
                y ofrecemos soluciones micro con efecto directo en los{" "}
                <span className="text-[#005900] font-semibold">
                  resultados macro
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
