import Link from 'next/link';
import React from 'react';

function Main() {
    return (
        <ul className="menu-items flex justify-between items-center cursor-scale">
            <li className="menu-item ml-10 hidden lg:block">
                <a href="#about">About</a>
            </li>
            <li className="menu-item ml-10 hidden lg:block cursor-scale">
                <a href="#skills">My Skills</a>
            </li>
            <li className="menu-item ml-10 hidden lg:block cursor-scale">
                <Link href="/contact">Contact</Link>
            </li>
            <li className="menu-item ml-8 block cursor-scale">
                <a
                    className="px-4 py-1 border rounded-md border-primary-500 md:text-2xl text-xl"
                    href="https://static.topcv.vn/topcv-cv-uploads/919f7798a27853643782b77f1575cbf1.pdf#toolbar=0&navpanes=0&scrollbar=0"
                >
                    Resume
                </a>
            </li>
        </ul>
    );
}

export default Main;
