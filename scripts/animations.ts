import { gsap, Power3 } from 'gsap';

export function initStartAnimation() {
    gsap.fromTo(
        '.cloud--back1',
        {
            x: 300,
            opacity: 0,
            ease: Power3.easeOut,
        } as any,
        {
            x: 0,
            opacity: 1,
            ease: Power3.easeOut,
        },
        'Start' as any
    ).duration(0.01);

    gsap.fromTo(
        '.cloud--back2',
        {
            x: 300,
            opacity: 0,
            ease: Power3.easeOut,
        } as any,
        {
            x: 0,
            opacity: 1,
            ease: Power3.easeOut,
        },
        'Start' as any
    ).delay(0.1);

    gsap.fromTo(
        '.cloud--front2',
        {
            x: 300,
            opacity: 0,
            ease: Power3.easeOut,
        } as any,
        {
            x: 0,
            opacity: 1,
            ease: Power3.easeOut,
        },
        'Start' as any
    ).delay(0.2);

    gsap.fromTo(
        '.cloud--front3',
        {
            x: 300,
            opacity: 0,
            ease: Power3.easeOut,
        } as any,
        {
            x: 0,
            opacity: 1,
            ease: Power3.easeOut,
        },
        'Start' as any
    ).delay(0.3);

    gsap.fromTo(
        '.moon__center',
        {
            x: 300,
            opacity: 0,
            ease: Power3.easeOut,
            duration: 1,
        } as any,
        {
            x: 0,
            opacity: 1,
            ease: Power3.easeOut,
            duration: 1,
        },
        'Start' as any
    ).delay(0.3);

    gsap.fromTo(
        '.cloud--front1',
        {
            x: 300,
            opacity: 0,
            ease: Power3.easeOut,
        } as any,
        {
            x: 0,
            opacity: 1,
            ease: Power3.easeOut,
        },
        'Start' as any
    ).delay(0.4);
}

export function mouseMoveAnimation() {
    if (!('ontouchstart' in window))
        document.getElementsByClassName('fullpage-slide')[0].addEventListener('mousemove', function (e: any) {
            document.querySelectorAll('.layer').forEach((image: any) => {
                const speed = image.dataset.depth ?? 0,
                    x = e.screenX / (10 / speed),
                    y = e.screenY / (10 / speed);

                gsap.to(image.childNodes[0], {
                    x: -x,
                    y: -y,
                });
            });
        });
}
