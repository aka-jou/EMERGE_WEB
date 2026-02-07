import { Phone, Mail, MapPin} from "lucide-react";


export default function TopBar() {
  return (
    <div className="bg-[#005900] text-white py-2">
      <div className="container mx-auto px-4 md:px-8 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 text-sm">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5" />
              <span>+52 971 187 2666</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5" />
              <span>antonio.ruiz@grupoemerge.com.mx</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>Mexicali Baja California</span>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
