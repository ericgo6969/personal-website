import { gsap } from 'gsap';

export function cursorEffect() {
    if (!('ontouchstart' in window)) {
        const cursor = document.querySelector('.cursor'),
            cursorScale = document.querySelectorAll('.cursor-scale');
        let mouseX = 0,
            mouseY = 0;

        cursor?.classList.remove('hidden');

        gsap.to({}, 0.016, {
            repeat: -1,
            onRepeat: function () {
                gsap.set(cursor, {
                    css: {
                        left: mouseX,
                        top: mouseY,
                    },
                });
            },
        });

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        cursorScale.forEach((link) => {
            link.addEventListener('mousemove', () => {
                cursor?.classList.add('grow');
                if (link.classList.contains('small')) {
                    cursor?.classList.remove('grow');
                    cursor?.classList.add('grow-small');
                }
            });

            link.addEventListener('mouseleave', () => {
                cursor?.classList.remove('grow');
                cursor?.classList.remove('grow-small');
            });
        });
    }
}
