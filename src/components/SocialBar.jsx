import React from 'react';
import Social from "./menus/Social";
import "../assets/styles/components/socialbar/socialbar.css";

function SocialBar() {
    return (
        <div className="socialbar-wrapper">
            <Social />
            <div className="circular-bar">
                <div className="process-bar"></div>
            </div>
        </div>
    )
}

export default SocialBar