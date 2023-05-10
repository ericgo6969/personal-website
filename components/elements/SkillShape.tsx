import React from 'react';
import { useEffect, useRef } from 'react';
import TagCloud from 'TagCloud';

function SkillShape() {
    const effectRan = useRef(false);
    useEffect(() => {
        if (effectRan.current === false) {
            const container = '.skill-shape' as any;
            const texts = [
                'PHP',
                'ReactJS',
                'JavaScript',
                'Gsap',
                'NextJS',
                'Git',
                'Node.js',
                'ThreeJS',
                'SCSS',
                'UI/UX',
                'Wordpress',
                'CSS',
                'Tailwind',
            ];
            const options = {
                radius: 280,
                maxSpeed: 'normal',
                initSpeed: 'slow',
                direction: 135,
                keep: true,
            };

            TagCloud(container, texts, options as any);
        }

        return () => {
            effectRan.current = true;
        };
    }, []);

    return (
        <>
            <div className="h-full lg:w-1/2 w-full lg:flex justify-center items-center hidden">
                <div className="skill-shape m-auto"></div>
            </div>
        </>
    );
}

export default SkillShape;
