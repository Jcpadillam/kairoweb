import { Routes, Route, Navigate } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import SEO from "./components/SEO";
import Home from "./pages/Home";
import WebDev from "./pages/servicios/WebDev";
import Ecommerce from "./pages/servicios/Ecommerce";
import AppsMobiles from "./pages/servicios/AppsMobiles";
import Soporte from "./pages/servicios/Soporte";

// Placeholder Components for new pages
const Portfolio = () => (
  <div className="pt-32 min-h-screen text-center">
    <SEO
      title="Portafolio de proyectos | KairoWeb"
      description="Explora los proyectos y casos de éxito donde KairoWeb ha impulsado negocios con software a medida."
      keywords="portafolio kairoweb, casos de exito, proyectos de software"
      ogImage="/assets/hero-banner.png"
      noIndex
    />
    <h1>Portafolio</h1>
    <p>Próximamente...</p>
  </div>
);

const Blog = () => (
  <div className="pt-32 min-h-screen text-center">
    <SEO
      title="Blog de tecnología y negocios | KairoWeb"
      description="Consejos sobre transformación digital, desarrollo web y crecimiento de negocios en línea."
      keywords="blog tecnologia, transformacion digital, desarrollo web, estrategias digitales"
      ogImage="/assets/hero-banner.png"
      noIndex
    />
    <h1>Blog</h1>
    <p>Próximamente...</p>
  </div>
);

const Contact = () => (
  <div className="pt-32 min-h-screen text-center">
    <SEO
      title="Contacto | KairoWeb"
      description="Conversemos sobre tu próximo proyecto digital. Agenda una llamada con el equipo de KairoWeb."
      keywords="contacto kairoweb, agendar llamada, proyecto digital"
      ogImage="/assets/hero-banner.png"
    />
    <h1>Contacto</h1>
    <p>Próximamente...</p>
  </div>
);

export default function App() {
  return (
    <div className='relative bg-white text-slate-900 overflow-hidden min-h-screen'>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Navigate to="/servicios/web" replace />} />
          <Route path="/servicios/web" element={<WebDev />} />
          <Route path="/servicios/ecommerce" element={<Ecommerce />} />
          <Route path="/servicios/apps" element={<AppsMobiles />} />
          <Route path="/servicios/soporte" element={<Soporte />} />
          <Route path="/portafolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}