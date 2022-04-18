import React from 'react'
import { Link } from 'react-router-dom'

function Main() {
    return (
        <ul className="menu-items">
            <li className="menu-item">
                <Link to="/about">About</Link>
            </li>
            <li className="menu-item">
                <Link to="/portfolio" >Portfolio</Link>
            </li>
            <li className="menu-item">
                <Link to="/contact" >Contact</Link>
            </li>
            <li className="menu-item">
                <Link to="/" >Blog</Link>
            </li>
        </ul>
    )
}

export default Main