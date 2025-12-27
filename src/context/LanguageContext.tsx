import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from '../i18n/translations';

type Language = 'ES' | 'EN' | 'PT';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: typeof translations['ES'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    // Inicializar estado desde localStorage si existe, sino detectar del navegador
    const [language, setLanguageState] = useState<Language>(() => {
        // 1. Revisar localStorage
        const savedLang = localStorage.getItem('kairo_lang');
        if (savedLang && ['ES', 'EN', 'PT'].includes(savedLang)) {
            return savedLang as Language;
        }

        // 2. Detectar idioma del navegador
        const browserLang = navigator.language.split('-')[0].toUpperCase();
        if (browserLang === 'EN') return 'EN';
        if (browserLang === 'PT') return 'PT';

        // 3. Default a Español (para ES y cualquier otro no soportado)
        return 'ES';
    });

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('kairo_lang', lang);
    };

    const value = {
        language,
        setLanguage,
        t: translations[language],
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
