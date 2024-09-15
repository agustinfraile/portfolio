import './Nav.css';

import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-scroll';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#" className="navbar-logo">

                </a>
                <div className="menu-icon" onClick={handleMenuClick}>
                    <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={menuOpen ? 'navbar-menu active' : 'navbar-menu'}>
                    <li className="navbar-item">
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            className="navbar-link"
                            onClick={closeMenu}
                        >
                            Inicio
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            className="navbar-link"
                            onClick={closeMenu}
                        >
                            Sobre mí
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="navbar-link"
                            onClick={closeMenu}
                        >
                            Proyectos
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="navbar-link"
                            onClick={closeMenu}
                        >
                            Contacto
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav