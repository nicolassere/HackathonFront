import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en' | 'pt';

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

        // Countdown
        'countdown.remaining': 'Tiempo restante',
        'countdown.for': 'para',
        'countdown.started': '¡Ya comenzó!',
        'countdown.registration': 'el cierre de inscripciones',
        'countdown.course': 'el inicio del curso preparatorio',
        'countdown.hackathon': 'el Quantum Climate Hackathon',
        'events.registration': 'Inscripciones',
        'events.course': 'Curso',
        'events.hackathon': 'Hackathon',
           // Countdown Timer
        
      
        "countdown.days": "días",
        "countdown.hours": "hrs",
        "countdown.minutes": "min",
        "countdown.seconds": "seg",
        


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

        // Quantum Year Section
        'quantumYear.title': '2025 - Año Internacional de la Ciencia y Tecnología Cuántica',
        'quantumYear.subtitle': 'Quantum Hackathon LATAM 2025',
        'quantumYear.description':
        'es una iniciativa de la Universidad de Montevideo, organizada en colaboración con el Open Quantum Institute (CERN), como parte de las actividades para el Año Internacional de la Ciencia y Tecnología Cuántica, declarado por UNESCO para 2025.',
        'quantumYear.photoTitle': '🇺🇾 Hermosos paisajes de Uruguay',
        'quantumYear.photoDescription': 'Descubre los lugares más emblemáticos de nuestro país anfitrión',
        'quantumYear.loading': 'Cargando fotos...',
        'quantumYear.imageUnavailable': 'Imagen no disponible',

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
        'footer.langSwitch': 'English Version',

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
         

            'timeline.registration.title': 'Inscripciones',
            'timeline.registration.description': 'Cierre de inscripciones',
            'timeline.registration.details': 'Las inscripciones para el Quantum Climate Hackathon cerrarán el 15 de julio a las 23:59. Asegúrate de completar tu registro antes de esta fecha para participar en el evento.',

            'timeline.course.title': 'Curso Preparatorio',
            'timeline.course.description': 'Inicio del curso preparatorio',
            'timeline.course.details': 'El curso preparatorio comenzará el 4 de agosto a las 9:00 AM. Durante 4 semanas, los participantes recibirán capacitación en computación cuántica y sus aplicaciones en el cambio climático.',

            'timeline.hackathon.title': 'Hackathon',
            'timeline.hackathon.description': 'Quantum Climate Hackathon',
            'timeline.hackathon.details': 'El evento principal comenzará el 1 de octubre a las 9:00 AM. Durante 48 horas, los equipos trabajarán en soluciones innovadoras que combinen computación cuántica con problemas del cambio climático.',
            
    },
    en: {
        // Header
        'nav.home': 'Home',
        'nav.event': 'Event',
        'nav.requirements': 'Requirements',
        'nav.registration': 'Registration',
        'nav.partners': 'Partners',

        // Countdown
        'countdown.remaining': 'Time remaining',
        'countdown.for': 'until',
        'countdown.started': 'Started!',
        'countdown.registration': 'registration closes',
        'countdown.course': 'the preparation course begins',
        'countdown.hackathon': 'the Quantum Climate Hackathon',
        'events.registration': 'Registration',
        'events.course': 'Course',
        'events.hackathon': 'Hackathon',
        
        "countdown.days": "days",
        "countdown.hours": "hrs",
        "countdown.minutes": "min",
        "countdown.seconds": "sec",
        "extra.registration": "Don't miss out, complete your registration",
        "extra.course": "Get ready with the preparatory course!",
        "extra.hackathon": "The main event is coming. See you soon!",
    
        // Quantum Year Section
        'quantumYear.title': '2025 - International Year of Quantum Science and Technology',
        'quantumYear.subtitle': 'Quantum Hackathon LATAM 2025',
        'quantumYear.description':
        'is an initiative by Universidad de Montevideo, organized in collaboration with the Open Quantum Institute (CERN), as part of the activities for the International Year of Quantum Science and Technology, declared by UNESCO for 2025.',
        'quantumYear.photoTitle': '🇺🇾 Beautiful landscapes of Uruguay',
        'quantumYear.photoDescription': 'Discover the most iconic places in our host country',
        'quantumYear.loading': 'Loading photos...',
        'quantumYear.imageUnavailable': 'Image not available',

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
        'footer.location': 'Universidad de Montevideo',
        'footer.quicklinks': 'Quick Links',
        'footer.eventinfo': 'Event Information',
        'footer.requirements': 'Requirements',
        'footer.registration': 'Registration',
        'footer.course': 'Preparation Course',
        'footer.resources': 'Resources',
        'footer.rights': '© 2025 Universidad de Montevideo. All rights reserved.',
        'footer.partners': 'Partners',
        'footer.contactFollow': 'Contact & Follow Us',
        'footer.followUs': 'Follow Us',
        'footer.langSwitch': 'Versión en Español',

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

        // Countdown Timer
        

        'timeline.registration.title': 'Registration',
        'timeline.registration.description': 'Registration deadline',
        'timeline.registration.details': 'Registration for the Quantum Climate Hackathon will close on July 15th at 11:59 PM. Make sure to complete your registration before this date to participate in the event.',

        'timeline.course.title': 'Preparatory Course',
        'timeline.course.description': 'Preparatory course start',
        'timeline.course.details': 'The preparatory course will begin on August 4th at 9:00 AM. For 4 weeks, participants will receive training in quantum computing and its applications in climate change.',

        'timeline.hackathon.title': 'Hackathon',
        'timeline.hackathon.description': 'Quantum Climate Hackathon',
        'timeline.hackathon.details': 'The main event will begin on October 1st at 9:00 AM. For 48 hours, teams will work on innovative solutions that combine quantum computing with climate change problems.',
    },
    pt: {
       // Header
        'nav.home': 'Início',
        'nav.event': 'Evento',
        'nav.requirements': 'Requisitos',
        'nav.registration': 'Inscrição',
        'nav.partners': 'Colaboradores',

        // Quantum Year Section
        'quantumYear.title': '2025 - Ano Internacional da Ciência e Tecnologia Quântica',
        'quantumYear.subtitle': 'Quantum Hackathon LATAM 2025',
        'quantumYear.description':
        'é uma iniciativa da Universidad de Montevideo, organizada em colaboração com o Open Quantum Institute (CERN), como parte das atividades do Ano Internacional da Ciência e Tecnologia Quântica, declarado pela UNESCO para 2025.',
        'quantumYear.photoTitle': '🇺🇾 Belas paisagens do Uruguai',
        'quantumYear.photoDescription': 'Descubra os lugares mais emblemáticos do nosso país anfitrião',
        'quantumYear.loading': 'Carregando fotos...',
        'quantumYear.imageUnavailable': 'Imagem indisponível',

        // Countdown
        'countdown.remaining': 'Tempo restante',
        'countdown.for': 'para',
        'countdown.started': 'Já começou!',
        'countdown.registration': 'o encerramento das inscrições',
        'countdown.course': 'o início do curso preparatório',
        'countdown.hackathon': 'o Quantum Climate Hackathon',
        'events.registration': 'Inscrições',
        'events.course': 'Curso',
        'events.hackathon': 'Hackathon',
        "countdown.days": "dias",
        "countdown.hours": "h",
        "countdown.minutes": "min",
        "countdown.seconds": "seg",
        "extra.registration": "Não fique de fora, finalize sua inscrição",
        "extra.course": "Prepare-se com tudo no curso prévio!",
        "extra.hackathon": "O evento principal está chegando. Nos vemos em breve!",

        // EventInfo
        'event.title.part1': 'Computação Quântica para',
        'event.title.part2': 'Ação Climática',
        'event.subtitle': 'Participe do maior hackathon de computação quântica da América Latina, onde a tecnologia de ponta encontra a ação climática. Colabore com especialistas para desenvolver soluções quânticas inovadoras.',

        // Features
        'event.feature1.title': 'Impacto Climático',
        'event.feature1.desc': 'Desenvolva soluções de computação quântica para enfrentar desafios climáticos reais e promover a sustentabilidade ambiental.',
        'event.feature2.title': '72 Horas',
        'event.feature2.desc': 'Três dias intensos de colaboração, inovação e desenvolvimento de algoritmos quânticos revolucionários.',
        'event.feature3.title': 'Reconhecimento Global',
        'event.feature3.desc': 'Compita por prêmios e reconhecimento no maior hackathon quântico da América Latina.',
        'event.feature4.title': 'Trilha de Aprendizado',
        'event.feature4.desc': 'Acesso a cursos de computação quântica e mentoria de especialistas da indústria durante o evento.',

        // Timeline
        'event.timeline.title': 'Cronograma do Evento',
        'event.day1.date': '1º de Outubro',
        'event.day1.title': 'Abertura & Formação',
        'event.day1.desc': 'Cerimônia de abertura, formação de equipes e apresentação dos desafios',
        'event.day2.date': '2 de Outubro',
        'event.day2.title': 'Desenvolvimento Intensivo',
        'event.day2.desc': 'Desenvolvimento intensivo, sessões de mentoria e revisões de progresso',
        'event.day3.date': '3 de Outubro',
        'event.day3.title': 'Apresentações & Premiação',
        'event.day3.desc': 'Apresentações finais, avaliação dos jurados e cerimônia de premiação',

        // Requirements
        'req.tab.hackers': 'Para hackers',
        'req.tab.mentors': 'Para mentores',
        'req.hackers.title': 'Hackers',
        'req.mentors.title': 'Mentores',
        'req.hackers.desc': 'Os hackers são o coração do evento. Seja estudante ou profissional, se você é apaixonado por computação quântica e sustentabilidade, este é o seu lugar!',
        'req.mentors.desc': 'Os mentores orientam as equipes com sua experiência em computação quântica, ajudando-as a superar desafios técnicos.',
        'req.hackers.requirements.title': 'Requisitos para hackers',
        'req.mentors.requirements.title': 'Requisitos para mentores',
        'req.register.hacker': 'Inscreva-se como hacker',
        'req.register.mentor': 'Inscreva-se como mentor',

        // Requirements - Hackers
        'req.hackers.description': 'Os hackers propõem, projetam e desenvolvem soluções inovadoras alinhadas com os ODS 2030. Aplicam tecnologias quânticas e clássicas de forma criativa para enfrentar desafios reais na América Latina com espírito colaborativo.',
        'req.hackers.specific.universityEnrollment.title': 'Matrícula universitária',
        'req.hackers.specific.universityEnrollment.description': 'Atualmente matriculado em um curso universitário de tecnologia, ciência, engenharia ou desenvolvimento sustentável.',
        'req.hackers.specific.academicProgress.title': 'Progresso acadêmico',
        'req.hackers.specific.academicProgress.description': 'Pelo menos 50% do curso concluído no momento da inscrição.',
        'req.hackers.specific.programmingKnowledge.title': 'Conhecimentos de programação',
        'req.hackers.specific.programmingKnowledge.description': 'Conhecimentos básicos de Python (ou ter concluído um curso introdutório da QWorld, caso contrário).',
        'req.hackers.mandatory.title': 'Certificação obrigatória',
        'req.hackers.mandatory.subtitle': 'Curso de computação quântica da QWorld (Virtual, 4 a 13 de agosto de 2025)',

        // Added new keys for requirements
        'req.qualifications': 'Qualificações',
        'req.overview': 'Quer participe como hacker ou mentor, aqui está o que você precisa saber para aproveitar ao máximo esta experiência de hackathon de computação quântica.',
        'req.bothRoles': 'Ambos os papéis',

        'req.hackers.mandatory.requirements.0': 'Concluir todas as atividades do curso',
        'req.hackers.mandatory.requirements.1': 'Obter pelo menos 50% em cada avaliação',
        'req.hackers.mandatory.requirements.2': 'Alcançar nota final superior a 70%',

        'req.mentors.mandatory.requirements.0': 'Concluir todas as atividades do curso',
        'req.mentors.mandatory.requirements.1': 'Obter pelo menos 50% em cada avaliação',
        'req.mentors.mandatory.requirements.2': 'Alcançar nota final superior a 70%',

        // Requirements - Mentors
        'req.mentors.description': 'Os mentores guiam e lideram o processo de desenvolvimento de projetos, oferecendo orientação técnica e apoio no uso de tecnologias quânticas, inteligência artificial e outras ferramentas práticas para soluções alinhadas aos ODS 2030.',
        'req.mentors.specific.quantumExpertise.title': 'Experiência em computação quântica',
        'req.mentors.specific.quantumExpertise.description': 'Conhecimento sólido em princípios, algoritmos e aplicações da computação quântica.',
        'req.mentors.specific.platformExperience.title': 'Experiência em plataformas',
        'req.mentors.specific.platformExperience.description': 'Experiência com plataformas quânticas na nuvem (IBM Quantum, AWS Braket, etc.).',
        'req.mentors.specific.academicBackground.title': 'Formação acadêmica',
        'req.mentors.specific.academicBackground.description': 'Estudos de pós-graduação em áreas relacionadas ou experiência profissional relevante.',
        'req.mentors.mandatory.title': 'Certificação obrigatória',
        'req.mentors.mandatory.subtitle': 'Curso de computação quântica da QWorld (Virtual, 4 a 13 de agosto de 2025)',

        // Partners
        'partners.title': 'Nossos colaboradores',
        'partners.subtitle': 'Este hackathon é possível graças à colaboração de organizações líderes em computação quântica, pesquisa climática e educação tecnológica.',
        'partners.strategic': 'Patrocinadores',
        'partners.academic': 'Apoiam',

        // Footer
        'footer.title': 'Hackathon LATAM 2025',
        'footer.description': 'O hackathon de computação quântica focado em soluções climáticas para a América Latina.',
        'footer.date': '1 a 3 de outubro de 2025',
        'footer.location': 'Universidad de Montevideo',
        'footer.quicklinks': 'Links rápidos',
        'footer.eventinfo': 'Informações do evento',
        'footer.requirements': 'Requisitos',
        'footer.registration': 'Inscrição',
        'footer.course': 'Curso preparatório',
        'footer.resources': 'Recursos',
        'footer.rights': '© 2025 Universidad de Montevideo. Todos os direitos reservados.',
        'footer.partners': 'Colaboradores',
        'footer.contactFollow': 'Contato e siga-nos',
        'footer.followUs': 'Siga-nos',
        'footer.langSwitch': 'Versão em Português',

        // HackathonInfo
        'hackathon.title.part1': 'Um hackathon presencial,',
        'hackathon.title.part2': 'colaborativo e desafiador',
        'hackathon.description1': 'O hackathon será realizado presencialmente em Montevidéu, Uruguai, de',
        'hackathon.dates': '1 a 3 de outubro',
        'hackathon.description2': 'de 2025.',
        'hackathon.mandatory': 'A participação é obrigatória durante os três dias. As equipes serão compostas por 8 hackers e 2 mentores, organizados pelo comitê a partir do grupo de pessoas selecionadas e anunciadas com antecedência para facilitar a coordenação prévia.',
        'hackathon.language': 'O evento será realizado principalmente em espanhol, embora algumas atividades sejam em inglês ou português, e o',
        'hackathon.pitch': 'pitch final será apresentado em inglês',
        'hackathon.details': 'Detalhes do Evento',
        'hackathon.detail.dates': '1 a 3 de Outubro de 2025',
        'hackathon.detail.location': 'Montevidéu, Uruguai',
        'hackathon.detail.teams': '8 hackers + 2 mentores por equipe',
        'hackathon.benefit1': 'Hospedagem incluída para participantes',
        'hackathon.benefit2': 'Refeições parcialmente cobertas',
        'hackathon.benefit3': 'Apoio financeiro para transporte*',
        'hackathon.benefit3.note': '*sujeito à disponibilidade de fundos',
        'hackathon.register': 'Inscreva-se agora!',

        // Countdown Timer
        'timeline.registration.title': 'Inscrições',
        'timeline.registration.description': 'Encerramento das inscrições',
        'timeline.registration.details': 'As inscrições para o Quantum Climate Hackathon encerram no dia 15 de julho às 23:59. Certifique-se de concluir sua inscrição antes desse prazo para participar do evento.',

        'timeline.course.title': 'Curso Preparatório',
        'timeline.course.description': 'Início do curso preparatório',
        'timeline.course.details': 'O curso preparatório começa no dia 4 de agosto às 9:00 AM. Durante 4 semanas, os participantes receberão treinamento em computação quântica e suas aplicações nas mudanças climáticas.',

        'timeline.hackathon.title': 'Hackathon',
        'timeline.hackathon.description': 'Quantum Climate Hackathon',
        'timeline.hackathon.details': 'O evento principal começa em 1º de outubro às 9:00 AM. Durante 48 horas, as equipes trabalharão em soluções inovadoras que combinem computação quântica com problemas das mudanças climáticas.',

    }      
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('es');

    const t = (key: string): string => {
        const translation = translations[language][key as keyof typeof translations['es']];
        if (!translation) {
            console.warn(`Translation missing for key: ${key}`);
            return key;
        }
        return translation;
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