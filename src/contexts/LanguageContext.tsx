import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    es: {
        // Header
        'nav.home': 'Inicio',
        'nav.event': 'Evento',
        'nav.requirements': 'Requisitos',
        'nav.registration': 'Registro',
        'nav.partners': 'Colaboradores',

        // EventInfo
        'event.title.part1': 'Computación Cuántica para',
        'event.title.part2': 'Acción Climática',
        'event.subtitle': 'Únete al hackathon de computación cuántica más grande de Latinoamérica, donde la tecnología de vanguardia se encuentra con la acción climática. Colabora con expertos para desarrollar soluciones cuánticas innovadoras.',

        // Features
        'event.feature1.title': 'Impacto Climático',
        'event.feature1.desc': 'Desarrolla soluciones de computación cuántica para abordar desafíos climáticos reales y sustentabilidad ambiental.',
        'event.feature2.title': '72 Horas',
        'event.feature2.desc': 'Tres días intensivos de colaboración, innovación y desarrollo de algoritmos cuánticos revolucionarios.',
        'event.feature3.title': 'Reconocimiento Global',
        'event.feature3.desc': 'Compite por premios y reconocimiento en el hackathon cuántico más grande de Latinoamérica.',
        'event.feature4.title': 'Track de Aprendizaje',
        'event.feature4.desc': 'Acceso a cursos de computación cuántica y mentoría de expertos de la industria durante el evento.',

        // Timeline
        'event.timeline.title': 'Cronograma del Evento',
        'event.day1.date': '1 Octubre',
        'event.day1.title': 'Apertura & Formación',
        'event.day1.desc': 'Ceremonia de apertura, formación de equipos y presentación de desafíos',
        'event.day2.date': '2 Octubre',
        'event.day2.title': 'Desarrollo Intensivo',
        'event.day2.desc': 'Desarrollo intensivo, sesiones de mentoría y revisiones de progreso',
        'event.day3.date': '3 Octubre',
        'event.day3.title': 'Presentaciones & Premios',
        'event.day3.desc': 'Presentaciones finales, evaluación por jurados y ceremonia de premiación',

        // Requirements
        'req.tab.hackers': 'Para hackers',
        'req.tab.mentors': 'Para mentores',
        'req.hackers.title': 'Hackers',
        'req.mentors.title': 'Mentors',
        'req.hackers.desc': 'Los hackers son el corazón del evento. Ya seas estudiante o profesional, si te apasiona la computación cuántica y la sostenibilidad, ¡este es tu lugar!',
        'req.mentors.desc': 'Los mentores guían a los equipos con su experiencia en computación cuántica, ayudándolos a superar desafíos técnicos.',
        'req.hackers.requirements.title': 'Requirements for Hackers',
        'req.mentors.requirements.title': 'Requirements for Mentors',
        'req.register.hacker': 'Regístrate como hacker',
        'req.register.mentor': 'Regístrate como mentor',

        // Partners
        'partners.title': 'Nuestros colaboradores',
        'partners.subtitle': 'Este hackathon es posible gracias a la colaboración de organizaciones líderes en computación cuántica, investigación climática y educación tecnológica.',
        'partners.strategic': 'Auspiciantes',
        'partners.academic': 'Apoyan',

        // Footer
        'footer.title': 'Hackathon LATAM 2025',
        'footer.description': 'The premier quantum computing hackathon focused on climate solutions in Latin America.',
        'footer.date': 'October 1-3, 2025',
        'footer.location': 'Universidad de Montevideo',
        'footer.quicklinks': 'Enlaces rápidos',
        'footer.eventinfo': 'Información del evento',
        'footer.requirements': 'Requisitos',
        'footer.registration': 'Registro',
        'footer.course': 'Curso de preparación',
        'footer.resources': 'Recursos',
        'footer.rights': '© {year} Hackathon LATAM. Todos los derechos reservados.'
    },
    en: {
        // Header
        'nav.home': 'Home',
        'nav.event': 'Event',
        'nav.requirements': 'Requirements',
        'nav.registration': 'Registration',
        'nav.partners': 'Partners',

        // EventInfo
        'event.title.part1': 'Quantum Computing for',
        'event.title.part2': 'Climate Action',
        'event.subtitle': 'Join the largest quantum computing hackathon in Latin America, where cutting-edge technology meets climate action. Collaborate with experts to develop innovative quantum solutions.',

        // Features
        'event.feature1.title': 'Climate Impact',
        'event.feature1.desc': 'Develop quantum computing solutions to address real climate challenges and environmental sustainability.',
        'event.feature2.title': '72 Hours',
        'event.feature2.desc': 'Three intensive days of collaboration, innovation and development of revolutionary quantum algorithms.',
        'event.feature3.title': 'Global Recognition',
        'event.feature3.desc': 'Compete for prizes and recognition in the largest quantum hackathon in Latin America.',
        'event.feature4.title': 'Learning Track',
        'event.feature4.desc': 'Access to quantum computing courses and mentorship from industry experts during the event.',

        // Timeline
        'event.timeline.title': 'Event Timeline',
        'event.day1.date': 'October 1',
        'event.day1.title': 'Opening & Team Formation',
        'event.day1.desc': 'Opening ceremony, team formation, and challenge presentation',
        'event.day2.date': 'October 2',
        'event.day2.title': 'Intensive Development',
        'event.day2.desc': 'Intensive development, mentoring sessions, and progress reviews',
        'event.day3.date': 'October 3',
        'event.day3.title': 'Presentations & Awards',
        'event.day3.desc': 'Final presentations, jury evaluation, and awards ceremony',

        // Requirements
        'req.tab.hackers': 'For Hackers',
        'req.tab.mentors': 'For Mentors',
        'req.hackers.title': 'Hackers',
        'req.mentors.title': 'Mentors',
        'req.hackers.desc': 'Hackers are the heart of the event. Whether you\'re a student or professional, if you\'re passionate about quantum computing and sustainability, this is your place!',
        'req.mentors.desc': 'Mentors guide teams with their quantum computing expertise, helping them overcome technical challenges.',
        'req.hackers.requirements.title': 'Requirements for Hackers',
        'req.mentors.requirements.title': 'Requirements for Mentors',
        'req.register.hacker': 'Register as Hacker',
        'req.register.mentor': 'Register as Mentor',

        // Partners
        'partners.title': 'Our Collaborators',
        'partners.subtitle': 'This hackathon is made possible through collaboration with leading organizations in quantum computing, climate research, and technology education.',
        'partners.strategic': 'Sponsors',
        'partners.academic': 'Supported by',

        // Footer
        'footer.title': 'Hackathon LATAM 2025',
        'footer.description': 'The premier quantum computing hackathon focused on climate solutions in Latin America.',
        'footer.date': 'October 1-3, 2025',
        'footer.location': 'Universidad de Montevideo',
        'footer.quicklinks': 'Quick Links',
        'footer.eventinfo': 'Event Information',
        'footer.requirements': 'Requirements',
        'footer.registration': 'Registration',
        'footer.course': 'Preparation Course',
        'footer.resources': 'Resources',
        'footer.rights': '© {year} Hackathon LATAM. All rights reserved.'
    }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('es');

    const t = (key: string): string => {
        return translations[language][key as keyof typeof translations['es']] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};