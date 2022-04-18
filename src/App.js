import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/styles/App.css';
import { Header, About, Portfolio, Contact } from "./containers";
import { SocialBar } from './components';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <SocialBar />
    </BrowserRouter>
  );
}

export default App;