import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Review from './components/Review';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import AdminLogin from './components/admin/AdminLogin';
import AdminPanel from './components/admin/Admin';
import UpcomingReservations from './components/admin/UpcomingReservation';
import AllReservations from './components/admin/AllReservations';
import MakeReservation from './components/admin/MakeReservation';
import ProtectedRoute from './components/admin/ProtectedRoute';
import bg from './assets/images/bg.jpg'; 
import { Element } from 'react-scroll';

function MainApp() {
  return (
    <div>
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
        <Element name="hero">
          <Hero />
        </Element>
      </div>
      <Element name="about">
        <About />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="review">
        <Review />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        
        {/* Admin routes */}
        <Route path="/admin" element={<ProtectedRoute />}>
          <Route element={<AdminPanel />}>
            <Route index element={<UpcomingReservations />} />
            <Route path="upcoming-reservations" element={<UpcomingReservations />} />
            <Route path="all-reservations" element={<AllReservations />} />
            <Route path="make-reservations" element={<MakeReservation />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
