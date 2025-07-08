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
            'timeline.title': 'Cronograma del Hackathon',
        'timeline.subtitle': 'Explora cada fase del Quantum Climate Hackathon',
        'timeline.importantDates': 'Fechas Importantes',
        'timeline.hoverInstruction': 'Pasa el cursor sobre la imagen para explorar cada fase',
        'timeline.hoverDescription': 'Descubre requisitos, actividades y fechas importantes',
        'timeline.duration': 'Duración',
        'timeline.dateDetails': 'Detalles de la Fecha',
        'timeline.timeRemaining': 'Tiempo Restante',

        // Fase de Inscripción
        'timeline.registration.name': 'Inscripción',
        'timeline.registration.dateRange': '1 - 15 Julio 2025',
        'timeline.registration.duration': '15 días',
        'timeline.registration.participants': 'Abierto a todos',
        'timeline.registration.primaryInfo.title': 'Requisitos',
        'timeline.registration.primaryInfo.items.0': 'Completar formulario de inscripción online',
        'timeline.registration.primaryInfo.items.1': 'Requisitos adicionales para mentores',
        'timeline.registration.primaryInfo.items.2': 'CV actualizado en formato PDF',
        'timeline.registration.primaryInfo.items.3': 'Conocimientos básicos de programación',
        'timeline.registration.secondaryInfo.title': 'Proceso',
        'timeline.registration.secondaryInfo.items.0': 'Registro en la plataforma oficial del evento',
        'timeline.registration.secondaryInfo.items.1': 'Verificación automática de documentos',
        'timeline.registration.secondaryInfo.items.2': 'Confirmación por correo en un plazo de 48 horas',
        'timeline.registration.secondaryInfo.items.3': 'Acceso al canal de comunicación oficial',

        // Fase de Preselección
        'timeline.preselection.name': 'Preselección',
        'timeline.preselection.description': 'Evaluación inicial de candidatos',
        'timeline.preselection.dateRange': '16 - 27 Julio 2025',
        'timeline.preselection.duration': '12 días',
        'timeline.preselection.participants': 'Candidatos registrados',
        'timeline.preselection.primaryInfo.title': 'Evaluación',
        'timeline.preselection.primaryInfo.items.0': 'Revisión de aplicaciones por comité técnico',
        'timeline.preselection.primaryInfo.items.1': 'Evaluación de perfil y experiencia',
        'timeline.preselection.primaryInfo.items.2': 'Entrevistas virtuales (casos seleccionados)',
        'timeline.preselection.primaryInfo.items.3': 'Análisis de compatibilidad con los objetivos',
        'timeline.preselection.secondaryInfo.title': 'Resultados',
        'timeline.preselection.secondaryInfo.items.0': 'Notificación de resultados por correo electrónico',
        'timeline.preselection.secondaryInfo.items.1': 'Lista oficial de preseleccionados',
        'timeline.preselection.secondaryInfo.items.2': 'Retroalimentación personalizada para cada candidato',
        'timeline.preselection.secondaryInfo.items.3': 'Invitación al curso preparatorio',
        'timeline.unpin' : 'Desfijar',
        'timeline.clickToPin': 'Haz clic para fijar la información',


        // Fase del Curso QWorld
        'timeline.course.name': 'Curso QWorld',
        'timeline.course.dateRange': '28 Julio - 4 Agosto 2025',
        'timeline.course.duration': '1 semana intensiva',
        'timeline.course.participants': 'Participantes preseleccionados',
        'timeline.course.primaryInfo.title': 'Contenido',
        'timeline.course.primaryInfo.items.0': 'Fundamentos de computación cuántica',
        'timeline.course.primaryInfo.items.1': 'Programación con Qiskit y Python',
        'timeline.course.primaryInfo.items.2': 'Algoritmos cuánticos fundamentales',
        'timeline.course.primaryInfo.items.3': 'Aplicaciones a problemas climáticos',
        'timeline.course.secondaryInfo.title': 'Metodología',
        'timeline.course.secondaryInfo.items.0': 'Sesiones en vivo con expertos internacionales',
        'timeline.course.secondaryInfo.items.1': 'Laboratorios prácticos con simuladores',
        'timeline.course.secondaryInfo.items.2': 'Proyecto colaborativo en grupo',
        'timeline.course.secondaryInfo.items.3': 'Certificación oficial de QWorld',

        // Fase de Selección Final
        'timeline.selection.name': 'Selección Final',
        'timeline.selection.description': 'Proceso de selección final de equipos',
        'timeline.selection.dateRange': '5 Agosto - 1 Septiembre 2025',
        'timeline.selection.duration': '4 semanas',
        'timeline.selection.participants': 'Graduados del curso QWorld',
        'timeline.selection.primaryInfo.title': 'Evaluación',
        'timeline.selection.primaryInfo.items.0': 'Análisis del proyecto final de QWorld',
        'timeline.selection.primaryInfo.items.1': 'Entrevistas técnicas individuales',
        'timeline.selection.primaryInfo.items.2': 'Evaluación de habilidades colaborativas',
        'timeline.selection.primaryInfo.items.3': 'Resultado del curso de QWorld',
        'timeline.selection.secondaryInfo.title': 'Formación de Equipos',
        'timeline.selection.secondaryInfo.items.0': 'Creación de equipos multidisciplinarios',
        'timeline.selection.secondaryInfo.items.1': 'Asignación de mentores especializados',
        'timeline.selection.secondaryInfo.items.2': 'Entrega de kits de herramientas',
        'timeline.selection.secondaryInfo.items.3': 'Acceso a recursos exclusivos del hackathon',

        // Fase del Hackathon
        'timeline.hackathon.name': 'Hackathon',
        'timeline.hackathon.dateRange': '2 - 10 Octubre 2025',
        'timeline.hackathon.duration': '9 días intensivos',
        'timeline.hackathon.participants': 'Equipos seleccionados',
        'timeline.hackathon.primaryInfo.title': 'Desarrollo',
        'timeline.hackathon.primaryInfo.items.0': 'Kick-off con presentación del desafío',
        'timeline.hackathon.primaryInfo.items.1': 'Desarrollo intensivo de soluciones',
        'timeline.hackathon.primaryInfo.items.2': 'Trabajo en equipo para la solución de problemas',
        'timeline.hackathon.primaryInfo.items.3': 'Presentación final ante el jurado',
        'timeline.hackathon.secondaryInfo.title': 'Presentación y Premiación',
        'timeline.hackathon.secondaryInfo.items.0': 'Demo Day con presentaciones finales',
        'timeline.hackathon.secondaryInfo.items.1': 'Pitch de 10 minutos por equipo',
        'timeline.hackathon.secondaryInfo.items.2': 'Evaluación por jurado internacional',
        'timeline.hackathon.secondaryInfo.items.3': 'Ceremonia de premiación y networking',

        'countdown.t': 'para la selección',
        'countdown.preselection': 'para la preselección',

        //OSD 
        'osd.title1': 'Conectando con los',
        'osd.title2': 'Objetivos de Desarrollo Sostenible',
        'osd.description': 'Explora cómo la tecnología y la innovación pueden contribuir a un futuro más justo y sostenible.',

        'osd1.title': 'Agua limpia y saneamiento',
        'osd1.description': 'Garantizar la disponibilidad de agua limpia y el acceso a servicios de saneamiento para todas las personas, protegiendo así la salud y el medioambiente.',

        'osd2.title': 'Ciudades y comunidades sostenibles',
        'osd2.description': 'Promover comunidades inclusivas, seguras, resilientes y sostenibles mediante la planificación urbana inteligente y la innovación social.',

        'osd3.title': 'Acción por el clima',
        'osd3.description': 'Tomar medidas urgentes para combatir el cambio climático y sus impactos, fomentando la conciencia y la acción global.',


        //Fijados
        'timeline.pin.pin': 'Haz clic en la fecha para fijar',
        'timeline.pin.info': 'haz click para ver la información completa, y la cuenta regresiva.'



    },
    en: {

        'countdown.t': 'for the selection',

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
        'timeline.title': 'Hackathon Timeline',
        'timeline.subtitle': 'Explore each phase of the Quantum Climate Hackathon',
        'timeline.importantDates': 'Important Dates',
        'timeline.hoverInstruction': 'Hover over the image to explore each phase',
        'timeline.hoverDescription': 'Discover requirements, activities and important dates',
        'timeline.duration': 'Duration',
        'timeline.dateDetails': 'Date Details',
        'timeline.timeRemaining': 'Time Remaining',

        // Registration Phase
        'timeline.registration.name': 'Registration',
        'timeline.registration.dateRange': 'July 1 - 15, 2025',
        'timeline.registration.duration': '15 days',
        'timeline.registration.participants': 'Open to everyone',
        'timeline.registration.primaryInfo.title': 'Requirements',
        'timeline.registration.primaryInfo.items.0': 'Complete online registration form',
        'timeline.registration.primaryInfo.items.1': 'Additional requirements for mentors',
        'timeline.registration.primaryInfo.items.2': 'Updated CV in PDF format',
        'timeline.registration.primaryInfo.items.3': 'Basic programming knowledge',
        'timeline.registration.secondaryInfo.title': 'Process',
        'timeline.registration.secondaryInfo.items.0': 'Registration on official event platform',
        'timeline.registration.secondaryInfo.items.1': 'Automatic document verification',
        'timeline.registration.secondaryInfo.items.2': 'Email confirmation within 48 hours',
        'timeline.registration.secondaryInfo.items.3': 'Access to official communication channel',

        // Preselection Phase
        'timeline.preselection.name': 'Preselection',
        'timeline.preselection.description': 'Initial evaluation of candidates',
        'timeline.preselection.dateRange': 'July 16 - 27, 2025',
        'timeline.preselection.duration': '12 days',
        'timeline.preselection.participants': 'Registered candidates',
        'timeline.preselection.primaryInfo.title': 'Evaluation',
        'timeline.preselection.primaryInfo.items.0': 'Application review by technical committee',
        'timeline.preselection.primaryInfo.items.1': 'Profile and experience evaluation',
        'timeline.preselection.primaryInfo.items.2': 'Virtual interviews (selected cases)',
        'timeline.preselection.primaryInfo.items.3': 'Compatibility analysis with objectives',
        'timeline.preselection.secondaryInfo.title': 'Results',
        'timeline.preselection.secondaryInfo.items.0': 'Results notification via email',
        'timeline.preselection.secondaryInfo.items.1': 'Official list of preselected candidates',
        'timeline.preselection.secondaryInfo.items.2': 'Personalized feedback for each candidate',
        'timeline.preselection.secondaryInfo.items.3': 'Invitation to preparatory course',

        // QWorld Course Phase
        'timeline.course.name': 'QWorld Course',
        'timeline.course.dateRange': 'July 28 - August 4, 2025',
        'timeline.course.duration': '1 intensive week',
        'timeline.course.participants': 'Preselected participants',
        'timeline.course.primaryInfo.title': 'Content',
        'timeline.course.primaryInfo.items.0': 'Quantum computing fundamentals',
        'timeline.course.primaryInfo.items.1': 'Programming with Qiskit and Python',
        'timeline.course.primaryInfo.items.2': 'Fundamental quantum algorithms',
        'timeline.course.primaryInfo.items.3': 'Applications to climate problems',
        'timeline.course.secondaryInfo.title': 'Methodology',
        'timeline.course.secondaryInfo.items.0': 'Live sessions with international experts',
        'timeline.course.secondaryInfo.items.1': 'Practical labs with simulators',
        'timeline.course.secondaryInfo.items.2': 'Collaborative group project',
        'timeline.course.secondaryInfo.items.3': 'Official QWorld certification',

        // Final Selection Phase
        'timeline.selection.name': 'Final Selection',
        'timeline.selection.description': 'Final team selection process',
        'timeline.selection.dateRange': 'August 5 - September 1, 2025',
        'timeline.selection.duration': '4 weeks',
        'timeline.selection.participants': 'QWorld course graduates',
        'timeline.selection.primaryInfo.title': 'Evaluation',
        'timeline.selection.primaryInfo.items.0': 'Analysis of QWorld final project',
        'timeline.selection.primaryInfo.items.1': 'Individual technical interviews',
        'timeline.selection.primaryInfo.items.2': 'Assessment of collaborative skills',
        'timeline.selection.primaryInfo.items.3': 'QWorld course final score',
        'timeline.selection.secondaryInfo.title': 'Team Formation',
        'timeline.selection.secondaryInfo.items.0': 'Creation of multidisciplinary teams',
        'timeline.selection.secondaryInfo.items.1': 'Assignment of specialized mentors',
        'timeline.selection.secondaryInfo.items.2': 'Toolkits delivery',
        'timeline.selection.secondaryInfo.items.3': 'Access to exclusive hackathon resources',

        // Hackathon Phase
        'timeline.hackathon.name': 'Hackathon',
        'timeline.hackathon.dateRange': 'October 2 - 10, 2025',
        'timeline.hackathon.duration': '9 intensive days',
        'timeline.hackathon.participants': 'Selected teams',
        'timeline.hackathon.primaryInfo.title': 'Development',
        'timeline.hackathon.primaryInfo.items.0': 'Kick-off with challenge presentation',
        'timeline.hackathon.primaryInfo.items.1': 'Intensive solution development',
        'timeline.hackathon.primaryInfo.items.2': 'Teamwork for problem-solving',
        'timeline.hackathon.primaryInfo.items.3': 'Final presentation and pitch in front of the jury',
        'timeline.hackathon.secondaryInfo.title': 'Presentation and Awards',
        'timeline.hackathon.secondaryInfo.items.0': 'Demo Day with final presentations',
        'timeline.hackathon.secondaryInfo.items.1': '10-minute pitch per team',
        'timeline.hackathon.secondaryInfo.items.2': 'Evaluation by international jury',
        'timeline.hackathon.secondaryInfo.items.3': 'Awards ceremony and networking',
        'countdown.preselection': 'for the pre-selection',

        'timeline.unpin' : 'Unpin',
        'timeline.clickToPin': 'Click to pin the information',

        // OSD Section
        'osd.title1': 'Connecting with the',
        'osd.title2': 'Sustainable Development Goals',
        'osd.description': 'Explore how technology and innovation can contribute to a fairer and more sustainable future.',

        'osd1.title': 'Clean Water and Sanitation',
        'osd1.description': 'Ensure access to clean water and sanitation for all, protecting both human health and the environment.',

        'osd2.title': 'Sustainable Cities and Communities',
        'osd2.description': 'Promote inclusive, safe, resilient, and sustainable communities through smart urban planning and social innovation.',

        'osd3.title': 'Climate Action',
        'osd3.description': 'Take urgent action to combat climate change and its impacts by raising awareness and encouraging global cooperation.',

        //Fijados
        'timeline.pin.pin': 'Click on the date to pin',
        'timeline.pin.info': 'click to see full information, and countdown.'    

   
    },

    pt: {
       // Header
        'nav.home': 'Início',
        'nav.event': 'Evento',
        'nav.requirements': 'Requisitos',
        'nav.registration': 'Inscrição',
        'nav.partners': 'Colaboradores',

        'countdown.preselection': 'para a pré-seleção',
        'countdown.selection': 'para a seleção',
        'timeline.unpin' : 'Desafixar',



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
        'countdown.t': 'a seleção',
        'events.preselection': 'Pré-seleção',
        'events.selection': 'Seleção',
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
        'timeline.title': 'Cronograma do Hackathon',
        'timeline.subtitle': 'Explore cada fase do Quantum Climate Hackathon',
        'timeline.importantDates': 'Datas Importantes',
        'timeline.hoverInstruction': 'Passe o cursor sobre a imagem para explorar cada fase',
        'timeline.hoverDescription': 'Descubra requisitos, atividades e datas importantes',
        'timeline.duration': 'Duração',
        'timeline.dateDetails': 'Detalhes da Data',
        'timeline.timeRemaining': 'Tempo Restante',

        // Fase de Inscrição
        'timeline.registration.name': 'Inscrição',
        'timeline.registration.duration': '15 dias',
        'timeline.registration.participants': 'Aberto para todos',
        'timeline.registration.primaryInfo.title': 'Requisitos',
        'timeline.registration.primaryInfo.items.0': 'Completar formulário de inscrição online',
        'timeline.registration.primaryInfo.items.1': 'Requisitos adicionais para mentores',
        'timeline.registration.primaryInfo.items.2': 'CV atualizado em formato PDF',
        'timeline.registration.primaryInfo.items.3': 'Conhecimentos básicos de programação',
        'timeline.registration.secondaryInfo.title': 'Processo',
        'timeline.registration.secondaryInfo.items.0': 'Registro na plataforma oficial do evento',
        'timeline.registration.secondaryInfo.items.1': 'Verificação automática de documentos',
        'timeline.registration.secondaryInfo.items.2': 'Confirmação por email em até 48h',
        'timeline.registration.secondaryInfo.items.3': 'Acesso ao canal de comunicação oficial',

        // Fase de Pré-seleção
        'timeline.preselection.name': 'Pré-seleção',
        'timeline.preselection.description': 'Avaliação inicial de candidatos',
        'timeline.preselection.duration': '12 dias',
        'timeline.preselection.participants': 'Candidatos inscritos',
        'timeline.preselection.primaryInfo.title': 'Avaliação',
        'timeline.preselection.primaryInfo.items.0': 'Revisão de aplicações por comitê técnico',
        'timeline.preselection.primaryInfo.items.1': 'Avaliação de perfis e experiência',
        'timeline.preselection.primaryInfo.items.2': 'Entrevistas virtuais (casos selecionados)',
        'timeline.preselection.primaryInfo.items.3': 'Análise de compatibilidade com objetivos',
        'timeline.preselection.secondaryInfo.title': 'Resultados',
        'timeline.preselection.secondaryInfo.items.0': 'Notificação de resultados via email',
        'timeline.preselection.secondaryInfo.items.1': 'Lista oficial de pré-selecionados',
        'timeline.preselection.secondaryInfo.items.2': 'Feedback personalizado para cada candidato',
        'timeline.preselection.secondaryInfo.items.3': 'Convite para o curso preparatório',

        // Fase de Curso QWorld
        'timeline.course.name': 'Curso QWorld',
        'timeline.course.duration': '1 semana intensiva',
        'timeline.course.participants': 'Participantes pré-selecionados',
        'timeline.course.primaryInfo.title': 'Conteúdo',
        'timeline.course.primaryInfo.items.0': 'Fundamentos de computação quântica',
        'timeline.course.primaryInfo.items.1': 'Programação com Qiskit e Python',
        'timeline.course.primaryInfo.items.2': 'Algoritmos quânticos fundamentais',
        'timeline.course.primaryInfo.items.3': 'Aplicações em problemas climáticos',
        'timeline.course.secondaryInfo.title': 'Metodologia',
        'timeline.course.secondaryInfo.items.0': 'Sessões ao vivo com especialistas internacionais',
        'timeline.course.secondaryInfo.items.1': 'Laboratórios práticos com simuladores',
        'timeline.course.secondaryInfo.items.2': 'Projeto em grupo colaborativo',
        'timeline.course.secondaryInfo.items.3': 'Certificação oficial da QWorld',

        // Fase de Seleção Final
        'timeline.selection.name': 'Seleção Final',
        'timeline.selection.description': 'Processo de seleção definitiva de equipes',
        'timeline.selection.duration': '4 semanas',
        'timeline.selection.participants': 'Graduados do curso QWorld',
        'timeline.selection.primaryInfo.title': 'Avaliação',
        'timeline.selection.primaryInfo.items.0': 'Análise do projeto final da QWorld',
        'timeline.selection.primaryInfo.items.1': 'Entrevistas técnicas individuais',
        'timeline.selection.primaryInfo.items.2': 'Avaliação de habilidades colaborativas',
        'timeline.selection.primaryInfo.items.3': 'Resultado do curso da QWorld',
        'timeline.selection.secondaryInfo.title': 'Formação de Equipes',
        'timeline.selection.secondaryInfo.items.0': 'Criação de equipes multidisciplinares',
        'timeline.selection.secondaryInfo.items.1': 'Atribuição de mentores especializados',
        'timeline.selection.secondaryInfo.items.2': 'Entrega do kit de ferramentas',
        'timeline.selection.secondaryInfo.items.3': 'Resultado do curso do QWorld',

        // Fase de Hackathon
        'timeline.hackathon.name': 'Hackathon',
        'timeline.hackathon.duration': '9 dias intensivos',
        'timeline.hackathon.participants': 'Equipes selecionadas',
        'timeline.hackathon.primaryInfo.title': 'Desenvolvimento',
        'timeline.hackathon.primaryInfo.items.0': 'Kick-off com apresentação de desafios',
        'timeline.hackathon.primaryInfo.items.1': 'Desenvolvimento intensivo de soluções',
        'timeline.hackathon.primaryInfo.items.2': 'Trabalho em equipe para a solução de problemas',
        'timeline.hackathon.primaryInfo.items.3': 'Apresentaçõ final diante da banca avaliadora',
        'timeline.hackathon.secondaryInfo.title': 'Apresentação e Premiação',
        'timeline.hackathon.secondaryInfo.items.0': 'Demo Day com apresentações finais',
        'timeline.hackathon.secondaryInfo.items.1': 'Pitch de 10 minutos por equipe',
        'timeline.hackathon.secondaryInfo.items.2': 'Avaliação por júri internacional',
        'timeline.hackathon.secondaryInfo.items.3': 'Cerimônia de premiação e networking',
        'timeline.clickToPin': 'Clique aqui para fixar as informações',


        'osd.title1': 'Conectando com os',
        'osd.title2': 'Objetivos de Desenvolvimento Sustentável',
        'osd.description': 'Explore como a tecnologia e a inovação podem contribuir para um futuro mais justo e sustentável.',

        'osd1.title': 'Água limpa e saneamento',
        'osd1.description': 'Garantir o acesso à água limpa e ao saneamento para todos, protegendo a saúde humana e o meio ambiente.',

        'osd2.title': 'Cidades e comunidades sustentáveis',
        'osd2.description': 'Promover comunidades inclusivas, seguras, resilientes e sustentáveis por meio de planejamento urbano inteligente e inovação social.',

        'osd3.title': 'Ação contra a mudança global do clima',
        'osd3.description': 'Tomar medidas urgentes para combater as mudanças climáticas e seus impactos, promovendo a conscientização e a cooperação global.',
        //Fijados
        'timeline.pin.pin': 'Clique na data para fixar',
        'timeline.pin.info': 'clique para ver as informações completas e a contagem regressiva.'

  // Títulos adicionales que estaban sueltos
}     
};
// timelineTranslations.ts


  


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