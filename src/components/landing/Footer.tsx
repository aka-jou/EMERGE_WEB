import { Phone, Mail, MapPin, Clock, Facebook,Linkedin} from "lucide-react";
import SocialButton from "./shared/SocialButton";
import FooterLink from "./shared/FooterLink";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-gradient-to-b from-[#003300] via-[#001a00] to-[#050505] text-gray-300 py-16 font-sans">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-white tracking-wide">Grupo Emerge RM</h3>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              Líderes mexicanos en sistemas eléctricos renovables y eficiencia energética de vanguardia.
            </p>

            <div className="flex gap-3 pt-2">
              <SocialButton icon={Facebook} />
   
              <SocialButton icon={Linkedin} />

            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-6">Servicios</h4>
            <ul className="space-y-3 text-sm">
              <FooterLink>Sistemas Fotovoltaicos</FooterLink>
              <FooterLink>Energía Eólica</FooterLink>
              <FooterLink>Eficiencia Energética</FooterLink>
              <FooterLink>Mantenimiento Preventivo</FooterLink>
              <FooterLink>Consultoría</FooterLink>
              <FooterLink>Evaluación de Fallas Mecanicas</FooterLink>
              <FooterLink>Pruebas estaticas en generadores</FooterLink>
              <FooterLink>Videoscopia en multiplicadoras</FooterLink>
              <FooterLink>Suministro de refacciones</FooterLink>
              <FooterLink>Reparación de motores</FooterLink>
              <FooterLink>Inspección de palas</FooterLink>
              <FooterLink>Análisis de vibración</FooterLink>
              <FooterLink>Reacondicionamiento mecánico</FooterLink>
              <FooterLink>Fabricación de utillaje especial</FooterLink>
      
             
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-6">Empresa</h4>
            <ul className="space-y-3 text-sm">
              <FooterLink>Quiénes Somos</FooterLink>
              <FooterLink>Nuestra Misión</FooterLink>
              <FooterLink>Equipo Profesional</FooterLink>
              <FooterLink>Certificaciones</FooterLink>
              <FooterLink>Proyectos</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-6">Contacto</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3 hover:text-white transition-colors cursor-pointer">
                <Phone className="w-4 h-4 mt-1 text-green-500 shrink-0" />
                <span>+52 971 187 2666</span>
              </li>

              <li className="flex items-start gap-3 hover:text-white transition-colors cursor-pointer">
                <Mail className="w-4 h-4 mt-1 text-green-500 shrink-0" />
                <span className="break-all">antonio.ruiz@grupoemerge.com.mx</span>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-green-500 shrink-0" />
                <span>
                  C. Islas Chipre, Jardines de Lago, Mexicali
                  <br />
                  Baja California, Mexico C.P. 21330
                </span>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-green-500 shrink-0" />
                <span>
                  C. Carretero SN, Col. Martirez 31 de Julio,
                  <br />
                  Juchitán Oax, Mexico C.P. 70013
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-1 text-green-500 shrink-0" />
                <span>
                  Lunes - Viernes: 8:00 AM - 6:00 PM
                  <br />
                  Sábados: 9:00 AM - 2:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; 2026 Grupo Emerge. Todos los derechos reservados.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
