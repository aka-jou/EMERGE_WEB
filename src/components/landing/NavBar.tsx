import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import type { NavLink } from "./types";
import LOGOEM from "../../assets/LOGOEM.png";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();


  const navLinks: NavLink[] = [
    { name: "Nosotros", href: "#nosotros" },
    { name: "Servicios", href: "#servicios" },
    { name: "Objetivos", href: "#objetivos" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Línea de tiempo", href: "#timeline" },
    { name: "Clientes", href: "#clientes" },
    { name: "Plan de negocio", href: "#plan" },
  ];


  // Función para manejar la navegación
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);


    const sectionId = href.replace("#", "");


    // Si NO estamos en home, navegar primero a home
    if (location.pathname !== "/") {
      navigate("/");
      // Esperar a que se monte la página home y hacer scroll
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      // Si ya estamos en home, solo hacer scroll
      scrollToSection(sectionId);
    }
  };


  // Función para hacer scroll suave a la sección
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64; // Actualizado a la nueva altura del navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;


      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };


  // Manejar navegación cuando viene de otra página con hash
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  }, [location]);


  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-2 md:py-3">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-[#005900] tracking-tight cursor-pointer">
              <img src={LOGOEM} alt="Logo EMERGE" className="h-12 md:h-16 w-auto" />
            </Link>
          </div>


          <div className="hidden lg:flex flex-1 justify-center items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative group text-[#404040] hover:text-[#005900] font-semibold text-sm xl:text-base transition-colors duration-300 cursor-pointer"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#005900] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>


          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="hidden md:flex items-center gap-2 bg-[#005900] hover:bg-[#004d00] text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm xl:text-base"
            >
              Iniciar
            </Link>


            <button
              className="lg:hidden p-2 text-[#404040] hover:text-[#005900] transition-colors"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label="Abrir menú"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>


        {isMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-2.5 text-[#404040] font-medium hover:bg-green-50 hover:text-[#005900] rounded-lg transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-2 px-4 pb-2">
                <Link
                  to="/login"
                  className="flex w-full justify-center items-center gap-2 bg-[#005900] text-white font-bold py-2.5 rounded-xl shadow-sm active:scale-95 transition-transform"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Iniciar
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
