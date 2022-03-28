import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/styles/App.css';
import { About, Contact, Home, Portfolio, Skills } from './pages';
import { Navbar } from "./containers";
import { Scrolldown } from './components';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
      <Scrolldown />
    </BrowserRouter>
  );
}

export default App;
