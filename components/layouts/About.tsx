import Image from 'next/image';
import React from 'react';

function About() {
    return (
        <section
            className="fullpage-slide w-screen lg:h-screen h-auto px-3 lg:px-10 py-4 lg:py-8 lg:overflow-hidden"
            id="about"
        >
            <div className="about w-full h-full relative">
                <h2 className="title absolute text-title left-0 top-4 tracking-widest z-10">My.about()</h2>
                <div className="w-full h-full lg:flex justify-between items-center mt-4">
                    <div className="img lg:h-full h-[50vw] lg:w-1/2 rounded-md lg:pl-0 ml-7 relative flex justify-center items-center rounded-md overflow-hidden">
                        <div className="glitch-effect absolute h-full w-full top-0 left-0"></div>
                        <div className="glitch-effect absolute h-full w-full top-0 left-0"></div>
                        <div className="glitch-effect absolute h-full w-full top-0 left-0"></div>
                        <div className="glitch-effect absolute h-full w-full top-0 left-0"></div>
                        <div className="glitch-effect absolute h-full w-full top-0 left-0"></div>
                    </div>
                    <div className="content lg:w-1/2 h-full">
                        <div className="title text-title tracking-wider lg:absolute w-full xl:text-center lg:hidden block xl:block md:text-center top-4 xl:ml-4 lg:ml-0 left-0 mt-5 lg:mt-0 z-[3]">
                            <span className="text-primary-500">Design Fo</span>r Creative
                        </div>
                        <div className="content xl:mt-8 lg:pl-5 h-full flex justify-center items-start flex-col">
                            <div className="sub-content mb-4 text-xl relative w-full">
                                <p className="code-tag open left-0 top-0 absolute">&#60;&#62;</p>
                                <br />
                                <p className="text ml-8 md:ml-0 lg:ml-8 md:text-center text-left lg:text-left">
                                    Hi, I&apos;m Eric Go,
                                </p>
                                <p className="text xl:ml-28 ml-0 lg:ml-16 md:text-center text-left lg:text-left">
                                    a Vietnamese Developer
                                </p>
                                <br />
                                <p className="code-tag close right-0 bottom-0 absolute xl:right-16">&#60;/&#62;</p>
                            </div>
                            <div className="description xl:pr-9">
                                Creative Front-End Developer offering 2+ years of experience providing high-impact web
                                solutions for diverse industry organizations. Skilled in designing, developing and
                                testing multiple web-based applications incorporating a range of technologies_
                            </div>
                            <div className="line inline-block mt-4">
                                <span className="block w-14 h-1 rounded-md bg-primary-500 mb-2"></span>
                                <span className="block w-14 h-1 rounded-md bg-primary-500 ml-7"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
