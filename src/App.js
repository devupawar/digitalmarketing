import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavRouter from './NavRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import About from './AboutUs';
import Contact from './ContactUs';
import Services from './Services';
import Clienttestimonial from './Clienttestimonial';
import Plans from './Plans';
import Footer from './Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavRouter />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/clienttestimonial" element={<Clienttestimonial />} />
            <Route path="/services" element={<Services />} />
            <Route path='/plans' element={<Plans />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
