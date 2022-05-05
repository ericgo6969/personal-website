import React from 'react';
import { Paper } from '@mui/material';
import { Masonry } from '@mui/lab';
// import Masonry from 'react-masonry-component';
import "../assets/styles/components/portfolio/portfolio.css";
import { display, height } from '@mui/system';

// image
// import arrow from "../assets/images/arrow.svg";

const heights = [27, 60, 40, 50, 40, 30, 48, 38, 30, 27];

function Portfolio() {
    return (
        <section className="portfolio">
            <div className="wrapper">
                <div className="main">
                    <div className="left">
                        <div className="image">
                            {/* <img className='arrow-up' src={arrow} alt="arrow up icon" />
                            <img src={arrow} alt="arrow down icon" /> */}
                        </div>
                    </div>
                    <div className="center">
                        <Masonry
                            columns={{ xs: 1, sm: 2, md: 4 }}
                            spacing={1}
                        >
                            {
                                heights.map((height, index) => (
                                    <Paper
                                        key={index}
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height: `${height}%`,
                                            border: '1px solid'
                                        }}>
                                        {index + 1}
                                    </Paper>
                                ))
                            }
                        </Masonry>
                    </div>
                    <div className="right"></div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio