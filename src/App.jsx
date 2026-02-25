import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeroSection from './components/HeroSection';
 import Features from './components/Features';
import HowToPlay from './components/HowToPlay';


import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     
     <HeroSection />
        <Features />
      <HowToPlay />
      <Footer />
    </div>
  );
}

export default App;