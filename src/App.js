import React, { useRef, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/styles/App.css';
import { Header, About, Portfolio, Contact } from "./containers";
import { SocialBar } from './components';
import { initStartAnimation, mouseMoveAnimation, sectionScrollAnimation } from './scripts/animations';

function App() {
  let cursor = useRef(null);
  let h1 = useRef(null);

  useEffect(() => {
    initStartAnimation();
    sectionScrollAnimation();
    // mouseMoveAnimation(h1, cursor);
  }, [])


  return (
    <BrowserRouter>
      <Header />
      <About />
      <Portfolio />
      <SocialBar />
    </BrowserRouter>
  );
}

export default App;