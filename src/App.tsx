import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EventInfo from './components/EventInfo';
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
        <Registration />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}

export default App;