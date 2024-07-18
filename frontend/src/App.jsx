import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import bg from './assets/images/bg.jpg'; // Ensure this path is correct
import About from './components/About';
import Services from './components/Services';
import Review from './components/Review';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
        }}
      >
        <Navbar />
        <Hero />
      </div>
     

     
     <About/>
      <Services/>
      <Review/>
      <Contact/>
      <Footer/>
      

    
      
      

      
      
    </>
  );
}

export default App;
