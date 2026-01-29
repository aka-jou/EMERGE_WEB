import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing/LandingPage';
import Projects from './pages/projects/Projects';
import TeamEmerge from './pages/team/TeamPage';
import AdminBlogCreate from './pages/admin/AdminBlogCreate';
import AdminLogin from './pages/login/AdminLogin';
import ProjectDetailPage from './pages/projectDetail/ProjectDetailPage';
import ColaboradoresPage from './pages/socios/CollaboratorsPage';
import ScrollToTop from './components/ScrollToTop'; 

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop /> 
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/team" element={<TeamEmerge />} />
            <Route path="/blog" element={<AdminBlogCreate />} />
            <Route path="/login" element={<AdminLogin />} />
            
            {/* Ruta dinámica - funciona para TODOS los proyectos */}
            <Route path="/project-detail/:id" element={<ProjectDetailPage />} /> {/* ✅ :id dinámico */}
            
            <Route path="/colaboradores" element={<ColaboradoresPage />} />

            <Route path="*" element={<div className="p-10 text-center">404 - Página no encontrada</div>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
