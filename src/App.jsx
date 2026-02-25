import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeroSection from './components/HeroSection';
 import Features from './components/Features';
import HowToPlay from './components/HowToPlay';
// import NavigationBar from './components/NavigationBar';

import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <NavigationBar /> */}
     <HeroSection />
        <Features />
      <HowToPlay />
      <Footer />
    </div>
  );
}

export default App;