import React from 'react'
import "../assets/styles/components/about/about.css";


function About() {
    return (
        <section className="about">
            <div className="wrapper">
                <div className="content-wrapper">
                    <div className="content image">
                        <img src="#" alt="" />
                    </div>
                    <div className="content text">
                        <div className="haft header"></div>
                        <div className="haft main">
                            <div className="items">
                                <div className="item">
                                    <div className="header">
                                        <h5 className="title">
                                            Design
                                        </h5>
                                    </div>
                                    <div className="content">

                                    </div>
                                </div>
                                <div className="item">
                                    <div className="header">
                                        <h5 className="title">
                                            Backend
                                        </h5>
                                    </div>
                                    <div className="content">

                                    </div>
                                </div>
                                <div className="item">
                                    <div className="header">
                                        <h5 className="title">
                                            Frontend
                                        </h5>
                                    </div>
                                    <div className="content">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About