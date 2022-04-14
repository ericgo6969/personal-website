import React from 'react';
import Navbar from "./Navbar";
import { ScrollDown } from "../components";
import "../assets/styles/components/header/header.css";
// import anime from "https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"

// image
import cloud1 from "../assets/images/header/cloud1.svg";
import cloud2 from "../assets/images/header/cloud2.svg";
import cloud3 from "../assets/images/header/cloud3.svg";
import bCloud01 from "../assets/images/header/b_cloud01.svg";
import bCloud02 from "../assets/images/header/b_cloud02.svg";
import moon from "../assets/images/header/moon.svg";
import bStart from "../assets/images/header/star.svg";

// const animeMotion = () => {
//     anime({
//         targets: 'div',
//         translateX: 250,
//         rotate: '1turn',
//         backgroundColor: '#FFF',
//         duration: 800
//     });
// }

function Header() {
    return (
        <section className="fullpage-slide">
            <Navbar />
            <div className="slide-wrapper">
                <div className="slide-content">
                    <div className="sub-content">
                        <p className="code-tag open">&#60;&#62;</p>
                        <p className="text">Hello World</p>
                        <p className="code-tag close">&#60;/&#62;</p>
                    </div>
                    <h1 className="content">I'm Eric Go</h1>
                    <div className="line">
                        <span></span>
                        <span></span>
                    </div>
                    <div className="description">Web Developer <span>'n'</span> UI/UX Designer</div>
                    <p className="note">
                        <span className="line"></span>
                        60% FRONT-END DEV - 30% UX & DESIGN - 10% BACK-END DEV
                    </p>
                </div>
                <div className="moon-wrapper">
                    <div className="moon">
                        <div className="moon__img js-paralax-moon">
                            <div className="moon__front layer" data-depth="0.8">
                                <div className="cloud cloud--front1 js-moon">
                                    <img src={cloud1} alt="cloud" />
                                </div>
                            </div>
                            <div className="moon__back layer" data-depth="0.4">
                                <div className="cloud cloud--back2 js-moon">
                                    <img src={bCloud02} alt="cloud" />
                                </div>

                            </div>
                            <div className="moon__front layer" data-depth="0.6">
                                <div className="cloud cloud--front2 js-moon">
                                    <img src={cloud2} alt="cloud" />
                                </div>
                            </div>
                            <div className="moon__back layer">
                                <img src={moon} alt="moon" />
                            </div>
                            <div className="moon__front layer" data-depth="0.7">
                                <div className="cloud cloud--front3 js-moon">
                                    <img src={cloud3} alt="cloud" />
                                </div>
                            </div>
                            <div className="moon__back layer" data-depth="0.3">
                                <div className="cloud cloud--back1 js-moon">
                                    <img src={bCloud01} alt="cloud" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="moon-background">
                <div className="moonlight">
                    <div className="moonlight__wrap js-paralax-moonlight" data-depth="0.2">
                        <div className="layer moonlight__img"></div>
                    </div>
                </div>
            </div>
            <div className="star js-parallax-moonlight">
                <div className="layer" data-depth="0.1">
                    <div className="star__img">
                        <img src={bStart} alt="star" />
                    </div>
                </div>
            </div>
            <ScrollDown />
        </section>
    )
}

export default Header