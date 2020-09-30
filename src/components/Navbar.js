import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <header className="navbar__container">

                <img
                    src="images/logo.png"
                    alt="Logo empresa"
                    className="logo"
                />

                <a href="#" class="navbar__button"><i class="fas fa-bars"></i></a>

            </header>
            <hr />
        </>
    )
}

export default Navbar;
