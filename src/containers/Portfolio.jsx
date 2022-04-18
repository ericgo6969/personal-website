import React from 'react'
import "../assets/styles/components/portfolio/portfolio.css";

// image
import arrow from "../assets/images/arrow.svg";

function Portfolio() {
    return (
        <section className="portfolio">
            <div className="wrapper">
                <div className="main">
                    <div className="left">
                        <div className="image">
                            <img className='arrow-up' src={arrow} alt="arrow up icon" />
                            <img src={arrow} alt="arrow down icon" />
                        </div>
                    </div>
                    <div className="center"></div>
                    <div className="right"></div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio