import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EventInfo from './components/EventInfo';
import Requirements from './components/Requirements';
import Registration from './components/Registration';
import Partners from './components/Partners';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <Hero />
        <EventInfo />
        <Requirements />
        <Registration />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}

export default App;