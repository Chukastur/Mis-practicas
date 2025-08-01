import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-secondary">
            <div className="container-fluid">
                <Link className="navbar-brand text-light" to="/">useContext</Link>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        <NavLink 
                            className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }` }
                            to="/"
                            >Home
                        </NavLink>

                        <NavLink 
                            className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }` } 
                            to="/about"
                            >About
                        </NavLink>

                        <NavLink 
                            className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }` }
                            to="/login"
                            >Login
                        </NavLink>

                    </ul>
                </div>
            </div>
        </nav>  
    );
};
 