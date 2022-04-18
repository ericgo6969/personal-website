import React from 'react'
import "../assets/styles/components/about/about.css";

// image
import backIcon from '../assets/images/about/code-tag.svg';
import designIcon from '../assets/images/about/brush-paintbrush.svg';

function About() {
    return (
        <section className="about">
            <div className="wrapper">
                <div className="content-wrapper">
                    <div className="header">
                        <h3><span>Design Fo</span>r Creative</h3>
                        <div className="sub-content">
                            <p className="code-tag open">&#60;&#62;</p>
                            <p className="text">I specialize in front-end development</p>
                            <p className="text">, and I mostly focus on simplicity, ergonomics and responsive design.</p>
                            <p className="code-tag close">&#60;/&#62;</p>
                        </div>
                    </div>
                    <div className="content image">
                        <img src="#" alt="" />
                    </div>
                    <div className="content text">
                        <div className="haft header"></div>
                        <div className="haft main">
                            <div className="items">
                                <div className="item design">
                                    <div className="header">
                                        <div className="content">
                                            <img src={designIcon} alt="backend card icon" />
                                            <h5 className="title">
                                                Design
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p>Figma</p>
                                        <p>Adobe Illustrator </p>
                                        <p>Adobe Photoshop</p>
                                    </div>
                                </div>
                                <div className="item backend">
                                    <div className="header">
                                        <div className="content">
                                            <img src={backIcon} alt="backend card icon" />
                                            <h5 className="title">
                                                Backend
                                            </h5>
                                        </div>

                                    </div>
                                    <div className="content">
                                        <p>PHP/Wordpress</p>
                                        <p>API</p>
                                        <p>Node.JS</p>
                                    </div>
                                </div>
                                <div className="item frontend">
                                    <div className="header frontend">
                                        <h5 className="title">
                                            <span>F</span>
                                            <div className="sub-title">
                                                <span>rontend</span>
                                                <span className="description">development</span>
                                            </div>

                                        </h5>
                                    </div>
                                    <div className="content">
                                        <p>HTML5/CSS</p>
                                        <p>SCSS</p>
                                        <p>Javascript</p>
                                        <p>ReactJS</p>
                                        <p>Motion</p>
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