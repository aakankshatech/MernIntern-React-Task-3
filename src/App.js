// App.js
import React from 'react';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
// import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
