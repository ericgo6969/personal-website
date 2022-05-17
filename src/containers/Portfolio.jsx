import React from 'react';
import { Paper } from '@mui/material';
import "../assets/styles/components/portfolio/portfolio.css";

// image
// import arrow from "../assets/images/arrow.svg";

const heights = [27, 60, 40, 50, 40, 30, 48, 38, 30, 27];

function Portfolio() {
    return (
        <section className="portfolio">
            <div className="wrapper">
                <div className="main">
                    <div className="left">
                        {/* <div className="image"> */}
                        {/* <img className='arrow-up' src={arrow} alt="arrow up icon" />
                            <img src={arrow} alt="arrow down icon" /> */}
                        {/* </div> */}
                        <div className="title">
                            <p>Eric Go - <span>Portfolio</span> -- 2022</p>
                        </div>
                    </div>
                    <div className="center">
                        <div className="wrapper codepen">

                        </div>
                        {/* <div className="wrapper codepen">

                        </div>
                        <div className="wrapper codepen">

                        </div> */}
                        {/* <div className="wrapper"></div>
                        <div className="wrapper"></div> */}
                    </div>
                    <div className="right"></div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio