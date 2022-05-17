import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

export function initStartAnimation() {
    gsap.from(
        '.cloud--back1',
        {
            x: 300,
            opacity: 0,
            ease: Power3.easeOut,
            delay: 0.2
        },
        'Start'
    );

    gsap.from(
        '.cloud--back2',
        {
            x: 300,
            opacity: 0,
            ease: Power3.easeOut,
            delay: 0.3
        },
        'Start'
    );

    gsap.from(
        '.cloud--front2',
        {
            x: 300,
            opacity: 0,
            ease: Power3.easeOut,
            delay: 0.4
        },
        'Start'
    );

    gsap.from(
        '.cloud--front3',
        {
            x: 300,
            opacity: 0,
            ease: Power3.easeOut,
            delay: 0.5
        },
        'Start'
    );

    gsap.from(
        '.moon__center',
        {
            x: 300,
            opacity: 0,
            ease: Power3.easeOut,
            delay: 0.5
        },
        'Start'
    );

    gsap.from(
        '.cloud--front1',
        {
            x: 300,
            opacity: 0,
            ease: Power3.easeOut,
            delay: 0.6
        },
        'Start'
    );
}

export function mouseMoveAnimation() {
    document.getElementsByClassName("fullpage-slide")[0].addEventListener("mousemove", function (e) {
        document.querySelectorAll('.layer').forEach(image => {
            let speed = (image.dataset.depth) ?? 0,
                x = e.screenX / (40 / speed),
                y = e.screenY / (40 / speed);

            gsap.to(
                image.childNodes[0],
                {
                    x: -x,
                    y: -y,
                }
            );
        })
    })
}

export function sectionScrollAnimation() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);


    const sections = document.querySelectorAll("section");

    sections.forEach((panel) => {
        ScrollTrigger.create({
            trigger: panel,
            end: "bottom top+=1",
            onEnter: () => goToPanel(panel),
            onEnterBack: () => goToPanel(panel),
        });
    });
    ScrollTrigger.addEventListener("scrollStart", () => document.body.style.setProperty('overflow', 'hidden'));
    ScrollTrigger.addEventListener("scrollEnd", () => document.body.style.setProperty('overflow', 'scroll'));
}

function goToPanel(panel) {
    gsap.to(window, {
        scrollTo: { y: panel, autoKill: false },
        duration: 0,
    });
}