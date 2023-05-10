import React from 'react';
import { MainMenu } from '../elements';

function Header() {
    return (
        <div className="navbar-wrapper flex justify-between absolute items-center z-50 top-0 py-3 px-3 lg:px-10 w-full bg-black/20 backdrop-blur">
            <div className="logo tracking-wider cursor-scale">
                <a href="#" className="logo-content md:text-3xl text-xl">
                    Eric Go
                </a>
            </div>
            <MainMenu />
        </div>
    );
}

export default Header;
