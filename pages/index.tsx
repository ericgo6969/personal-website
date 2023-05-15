import type { NextPage } from 'next';
import { useEffect } from 'react';
import AppHead from '../components/AppHead';
import { About, Skills, Main, Header } from '../components/layouts';
import { initStartAnimation, mouseMoveAnimation } from '../scripts/animations';
import { cursorEffect } from '../scripts/scroll-animation';
import Link from 'next/link';

const Home: NextPage = () => {
    useEffect(() => {
        initStartAnimation();
        mouseMoveAnimation();
        cursorEffect();
    }, []);

    return (
        <div>
            <AppHead />
            <main>
                <div className="cursor hidden">
                    <div className="center"></div>
                </div>
                <Header />
                {/* <SocialMenu /> */}
                <Main />
                <About />
                <Skills />
                <Link
                    href="/contact"
                    className="relative z-10 block mb-8 max-w-[50%] cursor-pointer w-full font-bold text-white capitalize text-2xl tracking-wider bg-[#cf3247] rounded-lg text-center py-2 px-4 m-auto cursor-scale"
                >
                    Me.contact()
                </Link>
            </main>
        </div>
    );
};

export default Home;
