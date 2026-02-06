import { useEffect, useState } from "react";
import { Search, Eye, MapPin, Award } from "lucide-react";
import portada from "../../assets/portada.png";
import portadaE from "../../assets/portadaE.png";
import arco from "../../assets/arco.png";
import { Link } from "react-router-dom";
import herooo from "../../assets/herooo.jpg";

export default function Hero() {
  const slides = [
    portada,
    portadaE,
    herooo,
    arco,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="inicio" className="relative min-h-[500px] md:min-h-[671px] overflow-hidden group">
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className={`w-full h-full object-cover mix-blend-overlay transition-transform duration-[10000ms] ease-linear ${
                index === currentSlide ? "scale-110" : "scale-100"
              }`}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(23,23,23,0.85)] via-[rgba(23,23,23,0.75)] to-[rgba(23,23,23,0.65)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-20 py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            LA MEJOR SOLUCIÓN EN ENERGÍA
          </h1>
          <p className="text-xl md:text-2xl lg:text-[25px] text-[#e5e5e5] leading-relaxed mb-8">
            Asistencia técnica especializada
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            

            <Link to="/store" className="flex items-center justify-center gap-3 bg-[rgba(0,89,0,0.5)] border border-[rgba(229,231,235,0.2)] text-white px-8 py-4 rounded-lg hover:bg-[rgba(0,89,0,0.7)] transition-colors">
            <Search className="w-4 h-4" />
              <span>Cotiza</span>
            </Link>

            <Link
              to="/projects"
              className="flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#005900] transition-colors"
            >
              <Eye className="w-4 h-4" />
              Ver proyectos
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-3 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] px-4 py-2.5 rounded-lg">
              <MapPin className="w-3.5 h-3.5 text-[#a3a3a3]" />
              <span className="text-sm text-white">5+ Años Experiencia</span>
            </div>
            <div className="flex items-center gap-3 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] px-4 py-2.5 rounded-lg">
              <Award className="w-3.5 h-3.5 text-[#a3a3a3]" />
              <span className="text-sm text-white">Sistema de gestión integrado (SGI) </span>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex flex-col gap-3 absolute right-20 top-52">
          <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded-lg p-4 text-center w-32">
            <p className="text-lg text-[#a3a3a3] mb-1">+ 3.3 GW</p>
            <p className="text-sm text-white">De Servicio</p>
          </div>
          <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded-lg p-4 text-center w-32">
            <p className="text-2xl text-[#a3a3a3] mb-1">98%</p>
            <p className="text-sm text-white">Eficiencia</p>
          </div>
          <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded-lg p-4 text-center w-32">
            <p className="text-lg text-[#a3a3a3] mb-1">+ 1500</p>
            <p className="text-sm text-white">AEG's</p>
          </div>
        </div>

        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
