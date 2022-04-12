import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/styles/App.css';
import { Header, About, Experiments, Portfolio, Contact } from "./containers";
import { SocialBar } from './components';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <About />
      <Experiments />
      <Portfolio />
      <Contact />
      <SocialBar />
    </BrowserRouter>
  );
}

export default App;