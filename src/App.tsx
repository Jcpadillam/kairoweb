import { Routes, Route, Navigate } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import StickyCTA from "./components/StickyCTA";
import Home from "./pages/Home";
import WebDev from "./pages/servicios/WebDev";
import Ecommerce from "./pages/servicios/Ecommerce";
import AppsMobiles from "./pages/servicios/AppsMobiles";
import Soporte from "./pages/servicios/Soporte";
import { LanguageProvider } from './context/LanguageContext';
import { useTabInactivity } from './hooks/useTabInactivity';
import { useScrollToHash } from './hooks/useScrollToHash';

import Nosotros from "./pages/Nosotros";
import Contact from "./pages/Contact";
import Roadmap2026 from "./pages/Roadmap2026";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";


export default function App() {
  useTabInactivity();
  useScrollToHash();

  return (
    <LanguageProvider>
      <div className='relative bg-white text-slate-900 overflow-hidden min-h-screen'>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/servicios" element={<Navigate to="/servicios/web" replace />} />
            <Route path="/servicios/web" element={<WebDev />} />
            <Route path="/servicios/ecommerce" element={<Ecommerce />} />
            <Route path="/servicios/apps" element={<AppsMobiles />} />
            <Route path="/servicios/soporte" element={<Soporte />} />
            <Route path="/portafolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/roadmap" element={<Roadmap2026 />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
        <StickyCTA />
      </div>
    </LanguageProvider>
  );
}