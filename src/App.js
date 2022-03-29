import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/styles/App.css';
import { About, Contact, Home, Portfolio, Skills } from './pages';
import { Navbar } from "./containers";
import { ScrollDown, SocialBar } from './components';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollDown />
      <SocialBar />
    </BrowserRouter>
  );
}

export default App;
