import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import AppNavbar from "./components/AppNavbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Weather from "./pages/Weather";



// import { Container } from "react-bootstrap";
import "bootswatch/dist/solar/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>

          <Route exact path = "/" element={<Home />} />
          <Route exact path = "/weather" element={<Weather />} />
          
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
