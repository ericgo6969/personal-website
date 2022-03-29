import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/styles/App.css';
import { Header } from "./containers";
import { SocialBar } from './components';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <SocialBar />
    </BrowserRouter>
  );
}

export default App;

// if ($("#js-fullpage").length) new Parallax($(".js-parallax-moon").get(0)), new Parallax($(".js-parallax-moonlight").get(0)), new Parallax($(".js-parallax-star").get(0));