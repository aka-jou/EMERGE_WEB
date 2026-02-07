import { motion } from "framer-motion";
import { Award, Cpu, Users, Globe, Target, Eye, Heart } from "lucide-react";
import mantte from "../../assets/mantte.jpeg";
import { Link } from "react-router-dom";



export default function AboutSection() {




  return (
    <section id="nosotros" className="py-16 md:py-24 bg-[#fcfcfc] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-20 max-w-[1200px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#005900]">¿Quiénes Somos?</h2>
          <div className="max-w-3xl mx-auto space-y-2">
            <p className="text-xl text-[#404040]">Nuestra principal línea de acción implícito en nuestro nombre:</p>
            <p className="text-xl text-[#404040] font-medium">
              Especialistas Mexicanos en Energía Renovables y Generadores Eléctricos
            </p>
          </div>
        </motion.div>



        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative pl-6 pr-6 py-4"
          >
            <div className="overflow-hidden rounded-xl shadow-lg relative z-10 h-[400px] group">
              <img
                src={mantte}
                alt="Mantenimiento Eólico"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay con texto */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Texto centrado sobre la imagen */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-white text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] tracking-wide whitespace-nowrap"
                >
                  Gestión inteligente
                </motion.h3>
              </div>
            </div>



            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              className="absolute top-2 right-0 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-4 rounded-xl z-20 w-40"
            >
              <div className="text-[#005900] text-3xl font-bold">18+</div>
              <div className="text-[#525252] text-xs font-medium">Clientes Satisfechos</div>
            </motion.div>



            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
              className="absolute bottom-2 left-0 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-4 rounded-xl z-20 w-40"
            >
              <div className="text-[#005900] text-3xl font-bold">98%</div>
              <div className="text-[#525252] text-xs font-medium">Índice de Éxito</div>
            </motion.div>
          </motion.div>



          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Card
              icon={<Users className="w-5 h-5 text-[#005900]" />}
              title="Nosotros"
              text="Somos una empresa 100% mexicana comprometida en brindar soluciones tecnológicas para la sustentabilidad."
              delay={0.2}
            />
            <Card
              icon={<Target className="w-5 h-5 text-[#005900]" />}
              title="Misión"
              text="Reducir las pérdidas de nuestros clientes aplicando recursos tecnológicos con enfoque creativo."
              delay={0.3}
            />
            <Card
              icon={<Eye className="w-5 h-5 text-[#005900]" />}
              title="Visión"
              text="Ser pioneros en generar cambios para el crecimiento viable de la energía limpia a todas las escalas."
              delay={0.4}
            />
            <Card
              icon={<Heart className="w-5 h-5 text-[#005900]" />}
              title="Valores"
              text="Profesionalismo, compromiso, calidad, servicio."
              delay={0.5}
            />
          </div>
        </div>



        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-xl shadow-sm border border-gray-100 py-6 px-4 mb-12"
        >
          <div className="flex flex-col md:flex-row md:flex-wrap justify-between gap-6 md:gap-4 text-center md:text-left">
  <MiniBadge icon={<Award className="w-8 h-8 md:w-5 md:h-5 text-[#005900]" />} text="SGI" />
  <MiniBadge icon={<Cpu className="w-8 h-8 md:w-5 md:h-5 text-[#005900]" />} text="Tecnología de Vanguardia" />
  <MiniBadge icon={<Users className="w-8 h-8 md:w-5 md:h-5 text-[#005900]" />} text="Equipo Multidisciplinario" />
  <MiniBadge icon={<Globe className="w-8 h-8 md:w-5 md:h-5 text-[#005900]" />} text="Cobertura Internacional" />
</div>

        </motion.div>



        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Link
            to="/team"
            className="inline-block bg-[#005900] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#004d00] transition-all hover:scale-105 shadow-lg shadow-green-900/20"
          >
            Conoce a nuestro equipo
          </Link>
        </motion.div>
      </div>
    </section>
  );
}



function MiniBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 mx-auto md:mx-0">
      {icon}
      <span className="text-sm font-medium text-[#404040]">{text}</span>
    </div>
  );
}



function Card({
  icon,
  title,
  text,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-[#f9f9f9] border border-[#005900]/30 rounded-xl p-6 hover:shadow-md transition-all hover:-translate-y-1"
    >
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <h3 className="font-bold text-[#005900]">{title}</h3>
      </div>
      <p className="text-sm text-[#525252] leading-relaxed">{text}</p>
    </motion.div>
  );
}
