import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';
// import './Navbar.css';

const Navbar = () => {

    const { user: { name }, dispatch } = useContext(AuthContext);
    const history = useHistory();

    const handleLogout = () => {
        history.replace('/login')
        dispatch({
            type: types.logout
        });

    };

    return (
        <>

            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

                <Link
                    className="navbar-brand"
                    to="/"
                >
                    Modelos
                </Link>

                <div className="navbar-collapse">
                    <div className="navbar-nav">

                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/servicios"
                        >
                            Servicios
                        </NavLink>

                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/finance"
                        >
                            Financiación
                        </NavLink>

                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/reviews"
                        >
                            Reviews
                        </NavLink>
                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ml-auto">
                        <span className="nav-item nav-link text-info">
                            {name}
                        </span>
                        <button
                            className="nav-item nav-link btn"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </ul>
                </div>
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
