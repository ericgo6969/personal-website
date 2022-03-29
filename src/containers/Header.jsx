import React from 'react';
import Navbar from "./Navbar";
import { ScrollDown } from "../components";
import "../assets/styles/components/header/header.css";

// image
import cloud1 from "../assets/images/cloud1.svg";
import cloud2 from "../assets/images/cloud2.svg";
import cloud3 from "../assets/images/cloud3.svg";
import bCloud01 from "../assets/images/b_cloud01.svg";
import bCloud02 from "../assets/images/b_cloud02.svg";
import moon from "../assets/images/moon.svg";

function Header() {
    return (
        <section className="fullpage-slide">
            <Navbar />
            <div className="slide-wrapper">
                <div className="slide-content"></div>
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
            <ScrollDown />
        </section>
    )
}

export default Header