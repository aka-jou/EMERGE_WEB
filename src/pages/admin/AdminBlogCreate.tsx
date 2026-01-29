import React, { useState, type ChangeEvent, type FormEvent } from 'react';
import { Save, Plus, Trash2, Image as ImageIcon, UploadCloud } from 'lucide-react';
// --- Interfaces para definir la estructura de los datos ---

// Interfaz para una tarjeta de servicio individual
interface ServiceCardInput {
  id: number;
  title: string;
  description: string;
  // En un futuro, aquí podrías agregar un selector de íconos
}

// Interfaz principal del estado del formulario
interface BlogFormData {
  title: string;
  subtitle: string;
  publishDate: string;
  author: string;
  mainImage: File | null;
  location: string;
  technology: string;
  serviceType: string;
  scope: string;
  challengesList: string; // Se guardará como texto multilínea
  whyEmergeList: string;  // Se guardará como texto multilínea
  benefitsList: string;   // Se guardará como texto multilínea
  serviceCards: ServiceCardInput[];
}

const AdminBlogCreate = () => {
  // --- Estado Inicial ---
  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    subtitle: '',
    publishDate: new Date().toISOString().split('T')[0], // Fecha de hoy por defecto
    author: '',
    mainImage: null,
    location: '',
    technology: '',
    serviceType: '',
    scope: '',
    challengesList: '',
    whyEmergeList: '',
    benefitsList: '',
    serviceCards: [
      { id: 1, title: 'Troubleshooting', description: '' }, // Una tarjeta inicial por defecto
    ],
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // --- Manejadores de Eventos Generales ---

  // Maneja inputs de texto y textareas normales
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Maneja la subida de imagen
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({ ...prev, mainImage: file }));
      setImagePreview(URL.createObjectURL(file)); // Crea URL temporal para previsualización
    }
  };

  // --- Manejadores para las Tarjetas de Servicio Dinámicas ---

  // Actualizar una tarjeta específica
  const handleServiceCardChange = (id: number, field: 'title' | 'description', value: string) => {
    setFormData(prev => ({
      ...prev,
      serviceCards: prev.serviceCards.map(card => 
        card.id === id ? { ...card, [field]: value } : card
      )
    }));
  };

  // Agregar una nueva tarjeta vacía
  const addServiceCard = () => {
    const newId = formData.serviceCards.length > 0 ? Math.max(...formData.serviceCards.map(c => c.id)) + 1 : 1;
    setFormData(prev => ({
      ...prev,
      serviceCards: [...prev.serviceCards, { id: newId, title: '', description: '' }]
    }));
  };

  // Eliminar una tarjeta
  const removeServiceCard = (id: number) => {
    setFormData(prev => ({
      ...prev,
      serviceCards: prev.serviceCards.filter(card => card.id !== id)
    }));
  };


  // --- Envío del Formulario (Simulado) ---
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Aquí procesarías los datos antes de enviarlos al backend.
    // Por ejemplo, convertir las listas multilínea en arrays:
    const finalDataToSend = {
      ...formData,
      challengesArray: formData.challengesList.split('\n').filter(line => line.trim() !== ''),
      whyEmergeArray: formData.whyEmergeList.split('\n').filter(line => line.trim() !== ''),
      benefitsArray: formData.benefitsList.split('\n').filter(line => line.trim() !== ''),
    };

    console.log("Datos listos para enviar al backend:", finalDataToSend);
    alert("Blog guardado localmente (mira la consola para ver los datos JSON).");
    // Aquí iría tu llamada a la API (fetch/axios post)
  };


  // --- Componentes de UI Reutilizables para el Formulario ---
  const Label = ({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) => (
    <label htmlFor={htmlFor} className="block text-sm font-semibold text-gray-700 mb-1.5">
      {children}
    </label>
  );

  const InputClasses = "w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005900] focus:border-[#005900] transition-shadow text-gray-900 bg-white";
  const TextareaClasses = `${InputClasses} min-h-[100px] resize-y`;
  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl font-bold text-[#005900] pb-2 border-b border-gray-200 mb-6">{children}</h3>
  );


  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Header del Admin */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Crear Nuevo Blog de Mantenimiento</h1>
            <p className="text-gray-600 mt-1">Rellena la información para publicar un nuevo caso de éxito.</p>
          </div>
          <button
            type="submit"
            form="blogForm"
            className="inline-flex items-center px-6 py-3 bg-[#005900] border border-transparent rounded-md font-semibold text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 shadow-sm transition-colors"
          >
            <Save className="w-5 h-5 mr-2" />
            Publicar Blog
          </button>
        </div>

        <form id="blogForm" onSubmit={handleSubmit} className="space-y-8">
          
          {/* --- SECCIÓN 1: Información Principal --- */}
          <div className="bg-white shadow-sm rounded-2xl p-8 border border-gray-100">
            <SectionTitle>1. Información General</SectionTitle>
            
            <div className="grid grid-cols-1 gap-6 mb-6">
              <div>
                <Label htmlFor="title">Título Principal del Blog</Label>
                <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className={InputClasses} placeholder="Ej: Asistencia Técnica en Jamaica" required />
              </div>
              
              <div>
                <Label htmlFor="subtitle">Subtítulo / Resumen Corto</Label>
                <textarea id="subtitle" name="subtitle" value={formData.subtitle} onChange={handleChange} className={TextareaClasses} placeholder="Ej: Soporte especializado para aerogeneradores..." required rows={3} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="author">Autor</Label>
                <input type="text" id="author" name="author" value={formData.author} onChange={handleChange} className={InputClasses} placeholder="Ej: Carlos Vidal" required />
              </div>
              <div>
                <Label htmlFor="publishDate">Fecha de Publicación</Label>
                <input type="date" id="publishDate" name="publishDate" value={formData.publishDate} onChange={handleChange} className={InputClasses} required />
              </div>
            </div>
          </div>

           {/* --- SECCIÓN 2: Imagen Principal --- */}
           <div className="bg-white shadow-sm rounded-2xl p-8 border border-gray-100">
            <SectionTitle>2. Imagen Destacada</SectionTitle>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/2">
                <Label htmlFor="mainImage">Subir Imagen</Label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-[#005900] transition-colors cursor-pointer bg-gray-50 relative">
                  <div className="space-y-1 text-center">
                    <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-[#005900] hover:text-green-700 focus-within:outline-none">
                        <span>Subir un archivo</span>
                        <input id="file-upload" name="mainImage" type="file" className="sr-only" accept="image/*" onChange={handleImageChange} />
                      </label>
                      <p className="pl-1">o arrastrar y soltar</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF hasta 10MB</p>
                  </div>
                </div>
              </div>

              {/* Previsualización */}
              <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
                <span className="block text-sm font-semibold text-gray-700 mb-2 self-start">Previsualización</span>
                <div className="w-full h-64 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center overflow-hidden relative">
                  {imagePreview ? (
                    <img src={imagePreview} alt="Vista previa" className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-gray-400 flex flex-col items-center">
                      <ImageIcon className="w-10 h-10 mb-2" />
                      <span>Sin imagen seleccionada</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* --- SECCIÓN 3: Datos del Proyecto (Sidebar) --- */}
          <div className="bg-white shadow-sm rounded-2xl p-8 border border-gray-100">
            <SectionTitle>3. Datos del Proyecto (Barra Lateral)</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="location">Ubicación</Label>
                <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} className={InputClasses} placeholder="Ej: Jamaica" />
              </div>
              <div>
                <Label htmlFor="technology">Tecnología Atendida</Label>
                <input type="text" id="technology" name="technology" value={formData.technology} onChange={handleChange} className={InputClasses} placeholder="Ej: Gamesa G80 y Vestas V80" />
              </div>
              <div>
                <Label htmlFor="serviceType">Tipo de Servicio</Label>
                <input type="text" id="serviceType" name="serviceType" value={formData.serviceType} onChange={handleChange} className={InputClasses} placeholder="Ej: Asistencia técnica y mantenimiento" />
              </div>
              <div>
                <Label htmlFor="scope">Alcance del Proyecto</Label>
                <textarea id="scope" name="scope" value={formData.scope} onChange={handleChange} className={TextareaClasses} rows={3} placeholder="Descripción corta del alcance..." />
              </div>
            </div>
          </div>

           {/* --- SECCIÓN 4: Listas de Contenido (Desafíos, Por Qué Emerge, Beneficios) --- */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Columna Izquierda */}
            <div className="space-y-8">
                 <div className="bg-white shadow-sm rounded-2xl p-8 border border-gray-100 h-full">
                    <SectionTitle>Desafíos del Proyecto</SectionTitle>
                    <p className="text-xs text-gray-500 mb-2 -mt-4 italic">Escribe un desafío por línea.</p>
                    <textarea name="challengesList" value={formData.challengesList} onChange={handleChange} className={`${TextareaClasses} h-64 font-mono text-sm`} placeholder="- Fallas críticas en el convertidor...&#10;- Necesidad urgente de refacciones...&#10;- Sustitución y mantenimiento..." />
                </div>
            </div>
            
            {/* Columna Derecha */}
            <div className="space-y-8">
                <div className="bg-white shadow-sm rounded-2xl p-8 border border-gray-100">
                    <SectionTitle>Por qué Emerge fue el aliado</SectionTitle>
                    <p className="text-xs text-gray-500 mb-2 -mt-4 italic">Escribe una razón por línea.</p>
                    <textarea name="whyEmergeList" value={formData.whyEmergeList} onChange={handleChange} className={`${TextareaClasses} h-32 font-mono text-sm`} placeholder="- Experiencia comprobada...&#10;- Equipo multidisciplinario..." />
                </div>
                <div className="bg-white shadow-sm rounded-2xl p-8 border border-gray-100">
                    <SectionTitle>Impacto y Beneficios</SectionTitle>
                    <p className="text-xs text-gray-500 mb-2 -mt-4 italic">Escribe un beneficio por línea.</p>
                    <textarea name="benefitsList" value={formData.benefitsList} onChange={handleChange} className={`${TextareaClasses} h-32 font-mono text-sm`} placeholder="- Mayor disponibilidad operativa...&#10;- Diagnóstico preciso..." />
                </div>
            </div>
           </div>


          {/* --- SECCIÓN 5: Tarjetas de Servicios Realizados (Dinámico) --- */}
          <div className="bg-white shadow-sm rounded-2xl p-8 border border-gray-100">
            <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-2">
                 <h3 className="text-xl font-bold text-[#005900]">4. Servicios Realizados (Tarjetas)</h3>
                 <button type="button" onClick={addServiceCard} className="inline-flex items-center px-3 py-1.5 bg-green-50 text-[#005900] text-sm font-medium rounded-md hover:bg-green-100 transition-colors border border-green-200">
                    <Plus className="w-4 h-4 mr-1" /> Agregar Tarjeta
                 </button>
            </div>
            
            <div className="space-y-4">
              {formData.serviceCards.map((card, index) => (
                <div key={card.id} className="group relative bg-gray-50 p-6 rounded-xl border border-gray-200 flex flex-col md:flex-row gap-4 items-start transition-all hover:shadow-md">
                  
                  <div className="flex-grow space-y-4 w-full">
                     <div className="flex items-center gap-4">
                        <span className="bg-[#005900] text-white w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold shrink-0">
                            {index + 1}
                        </span>
                        <input 
                            type="text" 
                            value={card.title} 
                            onChange={(e) => handleServiceCardChange(card.id, 'title', e.target.value)}
                            className={`${InputClasses} font-bold`} 
                            placeholder="Título del Servicio (Ej: Troubleshooting)" 
                        />
                     </div>
                    <textarea 
                        value={card.description} 
                        onChange={(e) => handleServiceCardChange(card.id, 'description', e.target.value)}
                        className={TextareaClasses} 
                        rows={2} 
                        placeholder="Descripción breve del servicio realizado..." 
                    />
                  </div>

                  {/* Botón eliminar tarjeta */}
                  {formData.serviceCards.length > 1 && (
                    <button 
                        type="button" 
                        onClick={() => removeServiceCard(card.id)}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors md:self-center"
                        title="Eliminar esta tarjeta"
                    >
                        <Trash2 className="w-5 h-5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
             {formData.serviceCards.length === 0 && (
                <p className="text-center text-gray-500 py-4 italic">No hay tarjetas de servicio. Agrega una.</p>
             )}
          </div>

        </form>
      </div>
    </div>
  );
};

export default AdminBlogCreate;