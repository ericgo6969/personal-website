import React from 'react';

const cloud1 = '/images/header/cloud1.svg';
const cloud2 = '/images/header/cloud2.svg';
const cloud3 = '/images/header/cloud3.svg';
const bCloud01 = '/images/header/b_cloud01.svg';
const bCloud02 = '/images/header/b_cloud02.svg';
const moon = '/images/header/moon.svg';
const bStart = '/images/header/star.svg';

function Main() {
    return (
        <section className="fullpage-slide w-screen h-screen relative">
            {/* <div className="bg-black opacity-20 absolute h-screen w-screen top-0 left-0 z-30"></div> */}
            <div className="wrapper">
                <div className="slide-wrapper">
                    <div className="slide-content absolute left-3 lg:left-10 z-40 -translate-y-1/2 top-1/2 md:mt-4">
                        <div className="sub-content mb-4">
                            <p className="code-tag open">&#60;&#62;</p>
                            <p className="text ml-8">Hello World</p>
                            <p className="code-tag close ml-32">&#60;/&#62;</p>
                        </div>
                        <h1 className="content lg:text-7xl text-3xl tracking-wider mb-4">I&apos;m Eric Go</h1>
                        <div className="line inline-block mb-4">
                            <span className="block w-14 h-1 rounded-md bg-primary-500 mb-2"></span>
                            <span className="block w-14 h-1 rounded-md bg-primary-500 ml-7"></span>
                        </div>
                        <div className="description text-sm lg:text-2xl mb-10">
                            Frontend Developer{' '}
                            <span className="px-2 py-1 text-sm lg:text-2xl bg-primary-500">&apos;n&apos;</span> UI/UX
                            Designer
                        </div>
                        <p className="note flex justify-center text-sm lg:text-2xl items-center">
                            <span className="block line w-3 h-1 mr-2 rounded-md bg-primary-500"></span>
                            60% FRONT-END DEV - 30% UX & DESIGN - 10% BACK-END DEV
                        </p>
                    </div>
                    <div className="moon-wrapper overflow-hidden h-screen relative">
                        <div className="moon absolute left-1/3 -translate-y-1/3 bottom-0 flex justify-center items-center">
                            <div className="moon__img js-paralax-moon relative">
                                <div className="moon__front layer z-20" data-depth="0.8">
                                    <div className="cloud cloud--front cloud--front1 js-moon absolute z-10">
                                        <img src={cloud1} alt="cloud" />
                                    </div>
                                </div>
                                <div className="moon__back layer -z-20" data-depth="0.3">
                                    <div className="cloud cloud--back cloud--back2 js-moon absolute">
                                        <img src={bCloud02} alt="cloud" />
                                    </div>
                                </div>
                                <div className="moon__front layer z-20" data-depth="0.6">
                                    <div className="cloud cloud--front cloud--front2 js-moon absolute z-10">
                                        <img src={cloud2} alt="cloud" />
                                    </div>
                                </div>
                                <div className="moon__back moon__center layer -z-20">
                                    <img src={moon} alt="moon" />
                                </div>
                                <div className="moon__front layer z-20" data-depth="0.6">
                                    <div className="cloud cloud--front cloud--front3 js-moon absolute z-10">
                                        <img src={cloud3} alt="cloud" />
                                    </div>
                                </div>
                                <div className="moon__back layer -z-20" data-depth="0.4">
                                    <div className="cloud cloud--back cloud--back1 js-moon absolute">
                                        <img src={bCloud01} alt="cloud" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="moon-background fixed top-0 left-0 w-full h-screen">
                    <div className="moonlight absolute left-1/3 -translate-y-1/3">
                        <div className="moonlight__wrap js-paralax-moonlight layer h-full" data-depth="0.2">
                            <div className="layer moonlight__img h-full"></div>
                        </div>
                    </div>
                </div>
                <div className="star js-parallax-moonlight fixed h-screen top-0 left-1/3">
                    <div className="layer w-full h-full" data-depth="0.3">
                        <div className="star__img w-full h-full flex items-center">
                            <img className="h-auto max-w-full w-full align-middle" src={bStart} alt="star" />
                        </div>
                    </div>
                </div>
                {/* <ScrollDown /> */}
            </div>
        </section>
    );
}

export default Main;
