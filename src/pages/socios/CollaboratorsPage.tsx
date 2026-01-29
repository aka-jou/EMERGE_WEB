import React, { useState } from 'react';
import { Search, MapPin, Phone, Mail, Globe } from 'lucide-react';
import TopBar from '../../components/landing/TopBar';
import Navbar from '../../components/landing/NavBar';
import Footer from '../../components/landing/Footer';

interface Partner {
  country: string;
  type: string;
  name: string;
  address?: string;
  city?: string;
  services?: string;
  phone: string;
  email: string;
  website: string;
}

// Data
const partnersData = {
  europa: [
    {
      country: 'España',
      type: 'Socorrista',
      name: 'Solar Energy SRL World',
      address: 'Sorrenuto, España',
      services: 'Mainteining, Consulting & Services',
      phone: '+34 943 31 1041',
      email: 'info@solarenergysrlworld.es',
      website: 'www.solarenergysrlworld.es'
    },
    {
      country: 'España',
      type: 'Prospective',
      name: 'Solenergía, Edificio Vol. 7',
      address: '28600 Boadilla Manets, Madrid',
      city: 'Madrid, Al Atocchsa',
      phone: '+34 669 48 19621',
      email: 'aguirroxp@cp.es',
      website: 'www.cipe.es'
    },
    {
      country: 'Chile',
      type: 'Energytrust',
      name: 'Olny USA',
      services: 'Soluciones de Energia Renovables y Tecnologia',
      phone: '+53 3 21 01 8013',
      email: 'accounts@energytrust.com',
      website: 'www.energytrust.com'
    }
  ],
  latinoamerica: [
    {
      country: 'México',
      type: 'INEEL',
      name: 'Sistema #102 Parque',
      address: 'Ind. Bernardino',
      city: '12340 Alvaro',
      services: 'Instituto Nacional de Electricidad y Energías',
      phone: '(777) 36 22 411',
      email: 'www.insp.globalgap.es',
      website: 'www.ineel.mx'
    },
    {
      country: 'México',
      type: 'Cialec',
      name: 'Av. Camino Real N25',
      address: '76130 Querétaro',
      city: 'Ciencia y Tecnología',
      phone: '(442) 211 2550',
      email: 'direccion@cialec.mx',
      website: 'www.cialec.mx'
    },
    {
      country: 'México',
      type: 'Villarreal',
      name: 'Camerino Mendoza',
      address: '91510 Joaquín, Las Viboras',
      city: 'Grupo Villarreal',
      phone: '+52 27 17 17 620',
      email: 'villarreal@grupovillarreal.com.mx',
      website: 'www.grupovillarreal.com.mx'
    },
    {
      country: 'Chile',
      type: 'Grupo Matheo',
      name: 'Av. General José Camacho',
      address: '20160 Jahne, Chile',
      city: 'Grupo Matemático',
      phone: '+52 377 17 45 100',
      email: 'contacto@gp100.mx',
      website: 'www.se.blogmatgrup.com.mx'
    },
    {
      country: 'Chile',
      type: 'Talleres Eden Ezer',
      name: 'C. 7 de Noviembre, Frac. Las Huertas',
      address: '34322 Jair de Zaragoza',
      city: 'Talleres Eden Ezer',
      phone: '+52 371 71 20 845',
      email: 'talleresedenezer@planetmax.com.mx',
      website: 'www.talleresedenezer.com.mx'
    }
  ]
};

// Components
const PartnerCard: React.FC<{ partner: Partner }> = ({ partner }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow relative">
      <div className="absolute top-4 right-4">
        <MapPin className="w-5 h-5 text-green-600" fill="currentColor" />
      </div>

      <div className="mb-3">
        <span className="text-sm text-gray-500">{partner.country}</span>
        <h3 className="text-lg font-bold text-gray-900 mt-1">{partner.type}</h3>
      </div>

      <div className="mb-4 space-y-1">
        <div className="flex items-start gap-2">
          <MapPin className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
          <div className="text-sm text-gray-600">
            <p>{partner.name}</p>
            <p>{partner.address}</p>
            {partner.city && <p>{partner.city}</p>}
          </div>
        </div>
        {partner.services && (
          <p className="text-sm text-gray-600 ml-6">{partner.services}</p>
        )}
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2 text-gray-600">
          <Phone className="w-4 h-4 text-gray-400" />
          <span>{partner.phone}</span>
        </div>
        
        <div className="flex items-center gap-2 text-gray-600">
          <Mail className="w-4 h-4 text-gray-400" />
          <a
            href={`mailto:${partner.email}`}
            className="text-blue-600 hover:underline truncate"
          >
            {partner.email}
          </a>
        </div>
        
        <div className="flex items-center gap-2 text-gray-600">
          <Globe className="w-4 h-4 text-gray-400" />
          <a
            href={`https://${partner.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline truncate"
          >
            {partner.website}
          </a>
        </div>
      </div>
    </div>
  );
};

const RegionSection: React.FC<{
  title: string;
  subtitle: string;
  partners: Partner[];
  className?: string;
}> = ({ title, subtitle, partners, className = '' }) => {
  return (
    <div className={className}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">{title}</h2>
        <p className="text-gray-600">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((partner, index) => (
          <PartnerCard key={index} partner={partner} />
        ))}
      </div>
    </div>
  );
};

// Main Page Component
const ColaboradoresPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Global');
  const [searchTerm, setSearchTerm] = useState('');

  const tabs = ['Global', 'Europa', 'Latinoamérica']; // ✅ Solo 3 tabs

  // Función de filtrado
  const filterPartners = (partners: Partner[]) => {
    if (!searchTerm || searchTerm.trim() === '') {
      return partners;
    }

    const term = searchTerm.toLowerCase().trim();
    
    return partners.filter(partner => {
      try {
        return (
          partner.country?.toLowerCase().includes(term) ||
          partner.type?.toLowerCase().includes(term) ||
          partner.name?.toLowerCase().includes(term) ||
          partner.address?.toLowerCase().includes(term) ||
          (partner.city && partner.city.toLowerCase().includes(term)) ||
          (partner.services && partner.services.toLowerCase().includes(term)) ||
          partner.email?.toLowerCase().includes(term) ||
          partner.website?.toLowerCase().includes(term)
        );
      } catch (error) {
        console.error('Error filtering partner:', error);
        return false;
      }
    });
  };

  // Obtener datos filtrados
  const europaFiltered = filterPartners(partnersData.europa);
  const latinoamericaFiltered = filterPartners(partnersData.latinoamerica);

  // Determinar qué mostrar según el tab
  let showEuropa = false;
  let showLatinoamerica = false;

  if (activeTab === 'Global') {
    showEuropa = true;
    showLatinoamerica = true;
  } else if (activeTab === 'Europa') {
    showEuropa = true;
  } else if (activeTab === 'Latinoamérica') {
    showLatinoamerica = true;
  }

  const totalResults = 
    (showEuropa ? europaFiltered.length : 0) + 
    (showLatinoamerica ? latinoamericaFiltered.length : 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar/>
      <Navbar/>
      
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Colaboradores Nacionales e Internacionales
          </h1>
          <p className="text-gray-600">
            Red global de partners con experiencia e implementación en toda clase de niveles
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar por país, proveedor o contacto..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                >
                  Limpiar
                </button>
              )}
            </div>

            <div className="flex gap-6 border-b">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 px-1 border-b-2 transition-colors ${
                    activeTab === tab
                      ? 'border-blue-600 text-blue-600 font-medium'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {searchTerm && (
              <div className="mt-4 text-sm text-gray-600">
                {totalResults} {totalResults === 1 ? 'resultado encontrado' : 'resultados encontrados'}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showEuropa && europaFiltered.length > 0 && (
          <RegionSection
            title="Europa"
            subtitle="Partners certificados en el mercado europeo"
            partners={europaFiltered}
          />
        )}
        
        {showLatinoamerica && latinoamericaFiltered.length > 0 && (
          <RegionSection
            title="Latinoamérica"
            subtitle="Red de socios en América Latina"
            partners={latinoamericaFiltered}
            className={showEuropa && europaFiltered.length > 0 ? "mt-12" : ""}
          />
        )}

        {/* Sin resultados */}
        {searchTerm && totalResults === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No se encontraron resultados</h3>
            <p className="text-gray-500 mb-6">Intenta con otros términos de búsqueda</p>
            <button
              onClick={() => setSearchTerm('')}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Limpiar búsqueda
            </button>
          </div>
        )}
      </div>
      
      <Footer/>
    </div>
  );
};

export default ColaboradoresPage;
