import { gsap, Power3 } from 'gsap';

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

export function mouseMoveAnimation(h1, cursor) {
    let tl = gsap.timeline();
    let tl2 = gsap.timeline();
    let posX = 0;
    let posY = 0;
    let mouseX = 0;
    let mouseY = 0;

    tl.to({}, 0.016, {
        repeat: -1,
        onRepeat: function () {
            posX += (mouseX - posX) / 10;
            posY += (mouseY - posY) / 10;
            tl.set(cursor, {
                css: {
                    left: posX - 50,
                    top: posY - 50,
                }
            })
        }
    })
    document.addEventListener("mousemove", function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;

    })
    tl2.from('.cloud--front1', {
        x: 300,
        opacity: 0,
        ease: Power3.easeOut,
        delay: 0.6
    })
    tl2.from('.cloud--front3',
        {
            x: 300,
            opacity: 0,
            ease: Power3.easeOut,
            delay: 0.5
        }, "-=1")
}

export function sectionScrollAnimation() {
    // gsap.registerPlugin(ScrollTrigger);
}