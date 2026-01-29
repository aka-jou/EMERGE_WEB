import { motion } from "framer-motion";
import { SERVICES } from "../../data/landing/services";

export default function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <section id="servicios" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={titleVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#005900] mb-4">Servicios Integrales</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluciones completas en energías renovables y eficiencia energética
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
            
                className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="relative h-56 group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 flex flex-col items-center justify-center p-4">
                    <div className="flex flex-col items-center transform transition-transform duration-300 group-hover:-translate-y-1">
                      <div className="bg-white/10 p-3 rounded-full backdrop-blur-sm mb-3 border border-white/20">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white tracking-wide">{service.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <h4 className="text-sm font-bold text-black uppercase tracking-wide mb-6 border-b border-gray-100 pb-4">
                    {service.subtitle}
                  </h4>
                  <ul className="space-y-2.5">
                    {service.items.map((item, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600 leading-relaxed">
                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-[#005900] rounded-full flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
