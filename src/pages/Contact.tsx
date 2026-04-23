import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import FinalCTA from '../components/FinalCTA';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen">
            <SEO
                title="Contacto | KairoWeb"
                description="Conversemos sobre tu próximo proyecto digital. Agenda una llamada con el equipo de KairoWeb."
                keywords="contacto kairoweb, agendar llamada, proyecto digital, desarrollo web, consultoria"
                ogImage="/assets/hero-banner.png"
            />

            <PageHero
                badge={t.header.menu.contact}
                title="Hablemos de tu Proyecto"
                description="Estamos listos para escuchar tus ideas y convertirlas en realidad digital. Agenda una asesoría gratuita."
                // bgImage="/assets/images/contact-hero.jpg" // Optional: Specific image for contact
                primaryCta={{
                    text: "Ir al formulario",
                    link: "#agenda"
                }}
            />

            <FinalCTA />

        </div>
    );
}
