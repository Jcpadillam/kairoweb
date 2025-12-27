import { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Button from './Button';
import { useLanguage } from '../context/LanguageContext';

const languages = [
  { code: 'ES', label: 'Español', flag: '🇪-🇸' },
  { code: 'EN', label: 'English', flag: '🇺-🇸' },
  { code: 'PT', label: 'Português', flag: '🇧-🇷' }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const { language: currentLang, setLanguage: setCurrentLang, t } = useLanguage();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: t.header.menu.home, path: '/' },
    {
      name: t.header.menu.services,
      path: '/servicios',
      dropdown: [
        { name: t.header.menu.sub.web, path: '/servicios/web' },
        { name: t.header.menu.sub.ecommerce, path: '/servicios/ecommerce' },
        { name: t.header.menu.sub.apps, path: '/servicios/apps' },
        { name: t.header.menu.sub.support, path: '/servicios/soporte' },
      ]
    },
    { name: t.header.menu.portfolio, path: '/portafolio' },
    { name: t.header.menu.blog, path: '/blog' },
    { name: t.header.menu.contact, path: '/contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setIsLangMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${isScrolled
        ? 'py-3 bg-white/80 backdrop-blur-2xl border-b border-black/5 shadow-[0_8px_32px_rgba(0,0,0,0.05)]'
        : 'py-6 bg-transparent'
        }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center space-x-3 group"
          >
            <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-gradient-to-tr from-[#2F80ED] to-[#38BDF8] p-[1px]">
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-center justify-center w-full h-full bg-[#0B1220] rounded-[11px]">
                <span className="text-white font-black text-xl tracking-tighter">K</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-[#38BDF8] transition-colors duration-300">Kairo</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-medium">{t.header.digitalAgency}</span>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex items-center p-1 bg-black/5 backdrop-blur-md rounded-full border border-black/5 ring-1 ring-black/5">
            <div className="relative flex items-center space-x-1">
              {menuItems.map((item) => (
                <div
                  key={item.path}
                  onMouseEnter={() => {
                    setHoveredItem(item.name);
                    if (item.dropdown) setActiveDropdown(item.name);
                  }}
                  onMouseLeave={() => {
                    setHoveredItem(null);
                    if (item.dropdown) setActiveDropdown(null);
                  }}
                  className="relative"
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => `
                      relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full flex items-center gap-1
                      ${isActive || hoveredItem === item.name ? 'text-[#2F80ED]' : 'text-slate-600 hover:text-slate-900'}
                    `}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {item.dropdown && (
                      <motion.svg
                        animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                        className="w-3 h-3 opacity-60"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    )}
                    {hoveredItem === item.name && (
                      <motion.div
                        layoutId="header-nav-indicator"
                        className="absolute inset-0 bg-white border border-black/5 rounded-full shadow-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </NavLink>

                  {/* Dropdown Menu Desktop */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white border border-black/5 rounded-2xl p-2 shadow-xl"
                      >
                        <div className="grid gap-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className="px-4 py-3 rounded-xl hover:bg-black/5 transition-colors group flex items-center justify-between"
                            >
                              <span className="text-sm text-slate-600 group-hover:text-[#2F80ED]">{subItem.name}</span>
                              <span className="text-[#38BDF8] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Group Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Switcher Desktop */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-black/5 transition-colors text-sm font-bold text-slate-600"
              >
                <span>{currentLang}</span>
                <svg className={`w-3 h-3 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full right-0 mt-2 w-32 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden p-1"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setCurrentLang(lang.code as any);
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${currentLang === lang.code ? 'bg-blue-50 text-[#2F80ED]' : 'hover:bg-slate-50 text-slate-600'}`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="h-4 w-[1px] bg-black/10" />

            <Button
              href="https://wa.me/573001234567"
              variant="primary"
              size="sm"
              className="shadow-[0_0_20px_rgba(47,128,237,0.3)] hover:shadow-[0_0_25px_rgba(47,128,237,0.5)] transition-shadow"
            >
              {t.header.start}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-50 p-2 text-slate-900 bg-black/5 hover:bg-black/10 rounded-xl border border-black/5 transition-colors"
            aria-label="Menú"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1.5">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-current block origin-center rounded-full"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                className="w-5 h-0.5 bg-current block rounded-full"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-current block origin-center rounded-full"
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ clipPath: 'inset(0% 0% 100% 0%)', opacity: 0 }}
              animate={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
              exit={{ clipPath: 'inset(0% 0% 100% 0%)', opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden mt-4 overflow-hidden will-change-[clip-path,opacity]"
            >
              <div className="bg-white border border-black/5 rounded-3xl p-4 space-y-2 mb-4 shadow-xl">
                {menuItems.map((item, idx) => (
                  <motion.div
                    key={item.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + idx * 0.05, duration: 0.4 }}
                  >
                    <button
                      onClick={() => item.dropdown ? setActiveDropdown(activeDropdown === item.name ? null : item.name) : null}
                      className="w-full"
                    >
                      <NavLink
                        to={item.path}
                        onClick={(e) => {
                          if (item.dropdown) e.preventDefault();
                        }}
                        className={({ isActive }) => `
                          w-full text-left px-5 py-4 rounded-2xl transition-all group flex items-center justify-between
                          ${isActive ? 'text-[#2F80ED] bg-black/5' : 'text-slate-600 hover:text-slate-900 hover:bg-black/5'}
                        `}
                      >
                        <span className="text-lg font-medium tracking-tight">{item.name}</span>
                        {item.dropdown ? (
                          <motion.svg
                            animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                            className="w-5 h-5 opacity-60"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </motion.svg>
                        ) : (
                          <span className="text-[#38BDF8] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        )}
                      </NavLink>
                    </button>

                    {/* Mobile Dropdown */}
                    <AnimatePresence>
                      {item.dropdown && activeDropdown === item.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, scaleY: 0.95 }}
                          animate={{ height: 'auto', opacity: 1, scaleY: 1 }}
                          exit={{ height: 0, opacity: 0, scaleY: 0.95 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="pl-6 space-y-1 origin-top will-change-[height,opacity,transform]"
                        >
                          {item.dropdown.map((subItem) => (
                            <NavLink
                              key={subItem.path}
                              to={subItem.path}
                              className={({ isActive }) => `
                                block px-5 py-3 rounded-xl transition-all
                                ${isActive ? 'text-[#38BDF8]' : 'text-slate-400 hover:text-slate-900'}
                              `}
                            >
                              {subItem.name}
                            </NavLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}

                {/* Mobile Language Switcher */}
                <div className="px-5 py-4 border-t border-slate-100 mt-2">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">{t.header.language}</p>
                  <div className="flex gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setCurrentLang(lang.code)}
                        className={`flex-1 py-2 rounded-xl text-sm font-bold transition-all ${currentLang === lang.code ? 'bg-[#2F80ED] text-white shadow-lg shadow-blue-500/20' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
                      >
                        {lang.code}
                      </button>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="pt-4 px-2"
                >
                  <Button
                    href="https://wa.me/573001234567"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center shadow-[0_0_20px_rgba(47,128,237,0.2)]"
                  >
                    {t.header.whatsapp}
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default memo(Header);
