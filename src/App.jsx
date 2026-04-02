import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

// Home page sections
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Brands from "./components/Brands";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Pages
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";

function HomePage() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Industries />
      <Brands />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
