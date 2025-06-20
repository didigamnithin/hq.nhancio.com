import React from 'react';
import Header from './components/Header';
import WhyHackathons from './components/WhyHackathons';
import WhyNhancio from './components/WhyNhancio';
import Benefits from './components/Benefits';
import Registration from './components/Registration';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <main>
        <WhyHackathons />
        <WhyNhancio />
        <Benefits />
        <Registration />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;