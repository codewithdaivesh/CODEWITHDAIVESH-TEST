import './index.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './pages/Navbar';
import Home from "./pages/Home";
import Aboutus from './pages/Aboutus';
import Services from './pages/Service';
import Footer from "./pages/Footer";
import Portfolio from './pages/Portfolio';
import  Contact  from './pages/Contact';

function App() {
  return (
    <>
    
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<Aboutus />} />
      <Route path="course" element={<Portfolio />} />
      <Route path="service" element={<Services />} />
      <Route path="contact" element={<Contact />} />
      
    </Routes>

    <Footer/>
    
    </>
  );
}

export default App;
