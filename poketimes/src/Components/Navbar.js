import React from 'react'

const Navbar = () => {
    return (
        <nav className="nav-warpper deep-orange lighten-1">
            <div className="container">
                <a className="brand-logo">PokeTimes</a>
                <ul className="right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
