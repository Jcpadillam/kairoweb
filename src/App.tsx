import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import StickyCTA from "./components/StickyCTA";
import { LanguageProvider } from './context/LanguageContext';
import { useTabInactivity } from './hooks/useTabInactivity';
import { useScrollToHash } from './hooks/useScrollToHash';

// Lazy loading for routes
const Home = lazy(() => import("./pages/Home"));
const WebDev = lazy(() => import("./pages/servicios/WebDev"));
const Ecommerce = lazy(() => import("./pages/servicios/Ecommerce"));
const AppsMobiles = lazy(() => import("./pages/servicios/AppsMobiles"));
const Soporte = lazy(() => import("./pages/servicios/Soporte"));
const Nosotros = lazy(() => import("./pages/Nosotros"));
const Contact = lazy(() => import("./pages/Contact"));
const Roadmap2026 = lazy(() => import("./pages/Roadmap2026"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Blog = lazy(() => import("./pages/Blog"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Cargador simple para el Suspense
const PageLoader = () => (
  <div className="min-h-screen bg-white flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
  </div>
);


export default function App() {
  useTabInactivity();
  useScrollToHash();

  return (
    <LanguageProvider>
      <div className='relative bg-white text-slate-900 overflow-hidden min-h-screen'>
        <Header />

        <main>
          <Suspense fallback={<PageLoader />}>
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
          </Suspense>
        </main>

        <Footer />
        <StickyCTA />
      </div>
    </LanguageProvider>
  );
}