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
        'req.hackers.requirements.title': 'Requisitos para hackers',
        'req.mentors.requirements.title': 'Requisitos para mentores',
        'req.register.hacker': 'Regístrate como hacker',
        'req.register.mentor': 'Regístrate como mentor',

        // Requirements - Hackers
        'req.hackers.description': 'Los hackers proponen, diseñan y desarrollan soluciones innovadoras alineadas con los ODS 2030. Aplican tecnologías cuánticas y clásicas de manera creativa para abordar desafíos reales en Latinoamérica con espíritu colaborativo.',
        'req.hackers.specific.universityEnrollment.title': 'Matrícula universitaria',
        'req.hackers.specific.universityEnrollment.description': 'Actualmente matriculado en una carrera universitaria de tecnología, ciencia, ingeniería o desarrollo sostenible.',
        'req.hackers.specific.academicProgress.title': 'Progreso académico',
        'req.hackers.specific.academicProgress.description': 'Al menos 50% de la carrera completada al momento de la inscripción.',
        'req.hackers.specific.programmingKnowledge.title': 'Conocimientos de programación',
        'req.hackers.specific.programmingKnowledge.description': 'Conocimientos básicos de Python (o haber completado un curso introductorio de QWorld si no).',
        'req.hackers.mandatory.title': 'Certificación obligatoria',
        'req.hackers.mandatory.subtitle': 'Curso de computación cuántica de QWorld (Virtual, 4-13 de agosto de 2025)',

        // Added new keys for requirements
        'req.qualifications': 'Calificaciones',
        'req.overview': 'Ya sea que participes como hacker o mentor, esto es lo que necesitas saber para aprovechar al máximo esta experiencia de hackathon de computación cuántica.',
        'req.bothRoles': 'Ambos roles',

        'req.hackers.mandatory.requirements.0': 'Completar todas las actividades del curso',
        'req.hackers.mandatory.requirements.1': 'Obtener al menos 50% en cada evaluación',
        'req.hackers.mandatory.requirements.2': 'Alcanzar una calificación final por encima del 70%',

        'req.mentors.mandatory.requirements.0': 'Completar todas las actividades del curso',
        'req.mentors.mandatory.requirements.1': 'Obtener al menos 50% en cada evaluación',
        'req.mentors.mandatory.requirements.2': 'Alcanzar una calificación final por encima del 70%',

        // Requirements - Mentors
        'req.mentors.description': 'Los mentores guían y lideran el proceso de desarrollo de proyectos, proporcionando dirección técnica y apoyo en el uso de tecnologías cuánticas, inteligencia artificial y otras herramientas prácticas para soluciones alineadas con los ODS 2030.',
        'req.mentors.specific.quantumExpertise.title': 'Experiencia en computación cuántica',
        'req.mentors.specific.quantumExpertise.description': 'Conocimiento sólido en principios, algoritmos y aplicaciones de la computación cuántica.',
        'req.mentors.specific.platformExperience.title': 'Experiencia en plataformas',
        'req.mentors.specific.platformExperience.description': 'Experiencia con plataformas cuánticas en la nube (IBM Quantum, AWS Braket, etc.).',
        'req.mentors.specific.academicBackground.title': 'Formación académica',
        'req.mentors.specific.academicBackground.description': 'Estudios de posgrado en campos relacionados o experiencia profesional relevante.',
        'req.mentors.mandatory.title': 'Certificación obligatoria',
        'req.mentors.mandatory.subtitle': 'Curso de computación cuántica de QWorld (Virtual, 4-13 de agosto de 2025)',

        // Partners
        'partners.title': 'Nuestros colaboradores',
        'partners.subtitle': 'Este hackathon es posible gracias a la colaboración de organizaciones líderes en computación cuántica, investigación climática y educación tecnológica.',
        'partners.strategic': 'Auspiciantes',
        'partners.academic': 'Apoyan',

        // Footer
        'footer.title': 'Hackathon LATAM 2025',
        'footer.description': 'El hackathon de computación cuántica centrado en soluciones climáticas para Latinoamérica.',
        'footer.date': '1-3 de octubre de 2025',
        'footer.location': 'Universidad de Montevideo',
        'footer.quicklinks': 'Enlaces rápidos',
        'footer.eventinfo': 'Información del evento',
        'footer.requirements': 'Requisitos',
        'footer.registration': 'Registro',
        'footer.course': 'Curso de preparación',
        'footer.resources': 'Recursos',
        'footer.rights': '© 2025 Universidad de Montevideo. Todos los derechos reservados.',
        'footer.partners': 'Colaboradores',
        'footer.contactFollow': 'Contacto y síguenos',
        'footer.followUs': 'Síguenos',
        'footer.langSwitch': 'Versión en Español',

        // HackathonInfo
        'hackathon.title.part1': 'Una hackathon presencial,',
        'hackathon.title.part2': 'colaborativa y desafiante',
        'hackathon.description1': 'La hackathon se realizará de forma presencial en Montevideo, Uruguay, del',
        'hackathon.dates': '1 al 3 de octubre',
        'hackathon.description2': 'de 2025.',
        'hackathon.mandatory': 'La participación es obligatoria durante los tres días. Los equipos estarán integrados por 8 hackers y 2 mentores, organizados por el comité dentro del grupo de personas seleccionadas y anunciados con anticipación para facilitar la coordinación previa.',
        'hackathon.language': 'El evento será principalmente en español, aunque algunas actividades serán en inglés o portugués, y el',
        'hackathon.pitch': 'pitch final se presentará en inglés',
        'hackathon.details': 'Detalles del Evento',
        'hackathon.detail.dates': '1-3 de Octubre, 2025',
        'hackathon.detail.location': 'Montevideo, Uruguay',
        'hackathon.detail.teams': '8 hackers + 2 mentores por equipo',
        'hackathon.benefit1': 'Hospedaje incluido para participantes',
        'hackathon.benefit2': 'Comidas cubiertas parcialmente',
        'hackathon.benefit3': 'Apoyo económico para transporte*',
        'hackathon.benefit3.note': '*sujeto a la disponibilidad de fondos',
        'hackathon.register': '¡Inscríbete Ahora!',

         // Countdown Timer
        'countdown.remaining': 'Faltan',
        'countdown.for': 'para',
        'countdown.started': '¡Ya comenzó!',
        'countdown.days': 'd',
        'countdown.hours': 'h',
        'countdown.minutes': 'm',
        'countdown.seconds': 's',
        'countdown.registration': 'el cierre de inscripciones',
        'countdown.course': 'el inicio del curso preparatorio',
        'countdown.hackathon': 'el Quantum Climate Hackathon',
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

        // Requirements - Hackers
        'req.hackers.description': 'Hackers propose, design, and develop innovative solutions aligned with the 2030 SDGs. They apply quantum and classical technologies in creative and practical ways to address real challenges in Latin America with a collaborative spirit.',
        'req.hackers.specific.universityEnrollment.title': 'University Enrollment',
        'req.hackers.specific.universityEnrollment.description': 'Currently enrolled in a university degree in technology, science, engineering, or sustainable development.',
        'req.hackers.specific.academicProgress.title': 'Academic Progress',
        'req.hackers.specific.academicProgress.description': 'At least 50% of the degree completed by the time of application.',
        'req.hackers.specific.programmingKnowledge.title': 'Programming Knowledge',
        'req.hackers.specific.programmingKnowledge.description': 'Basic knowledge of Python (or completion of an introductory QWorld course if not).',
        'req.hackers.mandatory.title': 'Mandatory Certification',
        'req.hackers.mandatory.subtitle': 'QWorld Quantum Computing Course (Virtual, August 4-13, 2025)',

        // Added new keys for requirements
        'req.qualifications': 'Qualifications',
        'req.overview': "Whether you're joining as a hacker or mentor, here's what you need to know to make the most of this quantum computing hackathon experience.",
        'req.bothRoles': 'Both Roles',

        'req.hackers.mandatory.requirements.0': 'Complete all course activities',
        'req.hackers.mandatory.requirements.1': 'Score at least 50% on each assessment',
        'req.hackers.mandatory.requirements.2': 'Achieve a final grade above 70%',

        'req.mentors.mandatory.requirements.0': 'Complete all course activities',
        'req.mentors.mandatory.requirements.1': 'Score at least 50% on each assessment',
        'req.mentors.mandatory.requirements.2': 'Achieve a final grade above 70%',

        // Requirements - Mentors
        'req.mentors.description': 'Mentors guide and lead the project development process. Their role is essential in providing technical direction and supporting the use of quantum technologies, artificial intelligence and other practical tools to create solutions aligned with the 2030 SDGs.',
        'req.mentors.specific.quantumExpertise.title': 'Quantum Computing Expertise',
        'req.mentors.specific.quantumExpertise.description': 'Solid knowledge in quantum computing principles, algorithms, and applications.',
        'req.mentors.specific.platformExperience.title': 'Platform Experience',
        'req.mentors.specific.platformExperience.description': 'Experience using cloud-based quantum computing platforms (IBM Quantum, AWS Braket, etc.).',
        'req.mentors.specific.academicBackground.title': 'Academic Background',
        'req.mentors.specific.academicBackground.description': 'Currently pursuing postgraduate studies in related fields or possessing relevant professional experience.',
        'req.mentors.mandatory.title': 'Mandatory Certification',
        'req.mentors.mandatory.subtitle': 'QWorld Quantum Computing Course (Virtual, August 4-13, 2025)',

        // Partners
        'partners.title': 'Our Collaborators',
        'partners.subtitle': 'This hackathon is made possible through collaboration with leading organizations in quantum computing, climate research, and technology education.',
        'partners.strategic': 'Sponsors',
        'partners.academic': 'Supported by',

        // Footer
        'footer.title': 'Hackathon LATAM 2025',
        'footer.description': 'The premier quantum computing hackathon focused on climate solutions in Latin America.',
        'footer.date': 'October 1-3, 2025',
        'footer.location': 'University of Montevideo',
        'footer.quicklinks': 'Quick Links',
        'footer.eventinfo': 'Event Information',
        'footer.requirements': 'Requirements',
        'footer.registration': 'Registration',
        'footer.course': 'Preparation Course',
        'footer.resources': 'Resources',
        'footer.rights': '© 2025 University of Montevideo. All rights reserved.',
        'footer.partners': 'Partners',
        'footer.contactFollow': 'Contact & Follow Us',
        'footer.followUs': 'Follow Us',
        'footer.langSwitch': 'English Version',

        // HackathonInfo
        'hackathon.title.part1': 'An in-person,',
        'hackathon.title.part2': 'collaborative and challenging hackathon',
        'hackathon.description1': 'The hackathon will take place in person in Montevideo, Uruguay, from',
        'hackathon.dates': 'October 1-3',
        'hackathon.description2': ', 2025.',
        'hackathon.mandatory': 'Participation is mandatory for all three days. Teams will consist of 8 hackers and 2 mentors, organized by the committee from the selected group and announced in advance to facilitate prior coordination.',
        'hackathon.language': 'The event will be mainly in Spanish, although some activities will be in English or Portuguese, and the',
        'hackathon.pitch': 'final pitch will be presented in English',
        'hackathon.details': 'Event Details',
        'hackathon.detail.dates': 'October 1-3, 2025',
        'hackathon.detail.location': 'Montevideo, Uruguay',
        'hackathon.detail.teams': '8 hackers + 2 mentors per team',
        'hackathon.benefit1': 'Accommodation included for participants',
        'hackathon.benefit2': 'Meals partially covered',
        'hackathon.benefit3': 'Financial support for transportation*',
        'hackathon.benefit3.note': '*subject to funding availability',
        'hackathon.register': 'Register Now!',
         'countdown.remaining': 'Only',
        'countdown.for': 'left for',
        'countdown.started': 'Already started!',
        'countdown.days': 'd',
        'countdown.hours': 'h',
        'countdown.minutes': 'm',
        'countdown.seconds': 's',
        'countdown.registration': 'registration deadline',
        'countdown.course': 'the preparatory course start',
        'countdown.hackathon': 'the Quantum Climate Hackathon',
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