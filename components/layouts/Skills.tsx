import React from 'react';
import { SkillShape } from '../elements';

function Skills() {
    return (
        <>
            <section
                className="fullpage-slide w-screen lg:h-screen h-auto px-3 lg:px-10 py-4 lg:py-8 lg:overflow-hidden"
                id="skills"
            >
                <div className="skills w-full h-full lg:pb-[50px]">
                    <h2 className="title text-title left-0 top-8 tracking-widest z-10 text-center text-scale-animation lg:mb-0 mb-3">
                        My.skills()
                    </h2>
                    <div className="xl:flex w-full h-full">
                        <div className="skill-content relative lg:h-full h-screen xl:w-1/2 w-full grid grid-cols-1 grid-rows-2 gap-2 overflow-hidden">
                            <div className="w-full h-full relative z-10 p-4">
                                <div className="flex w-full h-full rounded-md bg-[rgba(0,0,0,0.5)] backdrop-blur-sm">
                                    <div className="h-full w-full leading-[0.7rem] flex justify-center items-center flex-col">
                                        <div>
                                            <p className="text-2xl text-primary-500">Frontend</p>
                                            <p className="text-md">Developer</p>
                                            <span className="block w-10 h-[0.15rem] rounded-md bg-primary-500 my-2"></span>
                                            <p className="text text-[0.7rem]">2+ experience years</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-full relative z-10 p-4">
                                <div className="w-full h-full flex rounded-md bg-[rgba(0,0,0,0.5)] backdrop-blur-sm">
                                    <div className="h-full w-full leading-[0.7rem] flex justify-center items-center flex-col">
                                        <div>
                                            <p className="text-2xl text-primary-500">UX/UI</p>
                                            <p className="text-md">Designer</p>
                                            <span className="block w-10 h-[0.15rem] rounded-md bg-primary-500 my-2"></span>
                                            <p className="text text-[0.7rem]">0.5 experience years</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SkillShape />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Skills;
