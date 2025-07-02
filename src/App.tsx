import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EventInfo from './components/EventInfo';
import HackathonInfo from './components/HackathonInfo';
import Requirements from './components/Requirements';
import './components/TimelineCountdown.tsx';
import './components/QuantumYearSection';
import Registration from './components/Registration';
import Partners from './components/Partners';
import Footer from './components/Footer';
import BlochSphere from './components/BlochSphere';
import TimelineCountdown from './components/TimelineCountdown.tsx';
import QuantumYearSection from './components/QuantumYearSection.tsx';

function App() {
    return (
        <div className="min-h-screen bg-slate-50">
            <Header />
            <main>
                <Hero />
                <QuantumYearSection/>
                <EventInfo />
                <HackathonInfo />
                <Requirements />
                <BlochSphere />
                <Partners/>
            </main>
            <Footer />
        </div>
    );
}

export default App;