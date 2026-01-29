import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Lock, User, Wind, AlertCircle, CheckCircle2 } from 'lucide-react';
import mantte from "../../assets/mantte.jpeg";
import emblackk from "../../assets/emblackk.png";

// Imagen de fondo de alta calidad (Parque Eólico)
const BG_IMAGE = mantte;

const AdminLogin = () => {
  const navigate = useNavigate();
  
  // Estado del formulario
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  
  // Estados de interfaz
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Manejar cambios en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Limpiar error cuando el usuario empieza a escribir de nuevo
    if (error) setError('');
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // SIMULACIÓN DE BACKEND (Delay de 1.5 segundos para efecto realista)
    setTimeout(() => {
      // AQUÍ VALIDAMOS LAS CREDENCIALES
      // En producción, esto sería una llamada a tu API real
      if (formData.username === 'admin' && formData.password === 'admin123') {
        setSuccess(true);
        // Redirección después de mostrar el éxito brevemente
        setTimeout(() => {
          navigate('/blog'); 
        }, 800);
      } else {
        setError('Credenciales incorrectas. Verifica tu usuario y contraseña.');
        setIsLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex bg-white font-sans text-gray-900">
      
      {/* --------------------------------------------------------- */}
      {/* SECCIÓN IZQUIERDA: VISUAL & BRANDING (Visible en Desktop) */}
      {/* --------------------------------------------------------- */}
      <div className="hidden lg:flex lg:w-[55%] relative bg-[#003300] overflow-hidden">
        
        {/* Imagen de Fondo con Efecto Parallax suave */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] hover:scale-110"
          style={{ backgroundImage: `url(${BG_IMAGE})` }}
        ></div>
        
        {/* Capa Verde (Overlay) para asegurar legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#005900]/90 via-[#003300]/80 to-black/60 mix-blend-multiply"></div>
        
        {/* Contenido sobre la imagen */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between p-16 text-white">
          
          {/* Logo Brand (Simulado) */}
          <div className="flex items-center gap-3">
             {/* Si tienes tu logo en imagen: <img src={LogoImg} className="w-40" /> */}
            
         
             <Link to="/" className="">
                <img src={emblackk} alt="Logo EMERGE" className="h-40 w-auto"/>
             </Link>
          </div>

          {/* Texto Inspiracional */}
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight">
              Gestión inteligente <br />
            
            </h1>
            <p className="text-lg text-gray-200 max-w-lg leading-relaxed border-l-4 border-green-500 pl-6 bg-black/20 py-4 pr-4 rounded-r-lg backdrop-blur-sm">
              Accede al panel de control para gestionar blogs de mantenimiento, 
              casos de éxito y métricas de rendimiento operativo.
            </p>
          </div>

          {/* Footer Izquierdo */}
          <div className="text-sm text-gray-400">
            © 2026 Grupo Emerge.
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------- */}
      {/* SECCIÓN DERECHA: FORMULARIO DE ACCESO (Funcional)         */}
      {/* --------------------------------------------------------- */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center items-center p-8 bg-gray-50/50">
        
        <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
          
          {/* Header del Formulario */}
          <div className="mb-10 text-center lg:text-left">
             <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-[#005900] mb-4 lg:hidden">
                <Wind className="w-6 h-6" />
             </div>
             <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Bienvenido</h2>
             <p className="text-gray-500 mt-2">Por favor, ingresa tus credenciales de administrador.</p>
          </div>

          {/* Mensaje de Error */}
          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-100 flex items-center gap-3 text-red-700 animate-in slide-in-from-top-2">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-medium">{error}</span>
            </div>
          )}

          {/* Mensaje de Éxito */}
          {success && (
            <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-100 flex items-center gap-3 text-green-800 animate-in slide-in-from-top-2">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-medium">Acceso concedido. Redirigiendo...</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Input Usuario */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 ml-1">Usuario / Email</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#005900] transition-colors">
                  <User className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#005900]/20 focus:border-[#005900] focus:bg-white transition-all duration-200"
                  placeholder="ej. admin@emerge.com"
                  required
                />
              </div>
            </div>

            {/* Input Contraseña */}
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-semibold text-gray-700">Contraseña</label>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#005900] transition-colors">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full pl-11 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#005900]/20 focus:border-[#005900] focus:bg-white transition-all duration-200"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              
              <div className="flex justify-end pt-1">
                <a href="#" className="text-xs font-medium text-[#005900] hover:text-green-700 hover:underline">
                    ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>

            {/* Botón de Submit */}
            <button
              type="submit"
              disabled={isLoading || success}
              className={`
                group relative w-full flex justify-center py-4 px-4 border border-transparent 
                font-bold rounded-xl text-white shadow-lg transition-all duration-300
                ${isLoading || success ? 'bg-green-800 cursor-not-allowed' : 'bg-[#005900] hover:bg-[#004d00] hover:shadow-green-900/20 hover:-translate-y-0.5'}
              `}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Verificando...
                </span>
              ) : success ? (
                <span className="flex items-center gap-2">
                   ¡Bienvenido!
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Ingresar al panel
                  
                </span>
              )}
            </button>
          </form>
        </div>

        {/* Footer Móvil/Tablet */}
        <p className="mt-8 text-center text-xs text-gray-400 lg:hidden">
          © 2026 Grupo Emerge Mexico.
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;