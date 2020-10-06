import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {

    const history = useHistory();

    return (
        <>

            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

                <Link
                    className="navbar-brand"
                    to="/"
                >
                    Asociaciones
                </Link>

            </nav>






            {/* <header className="navbar__container">

                <img
                    src="images/logo.png"
                    alt="Logo empresa"
                    className="logo"
                />

                <a href="#" className="navbar__button"><i className="fas fa-bars"></i></a>

            </header> */}
            {/* <hr /> */}
        </>
    )
}

export default Navbar;
