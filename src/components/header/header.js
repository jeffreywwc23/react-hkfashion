import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './NavBar.scss';

// import UserIcon from '../../assets/img/users/default.jpg';
import { FaTimes, FaBars } from "react-icons/fa";

function NavBar(props) {
    const { currentUser } = props.user;
    console.log(props);

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className="navbar">
            <NavLink to="/" className="navbar-logo">
                HKTour.com
            </NavLink>

            <div className="menu-icon" onClick={handleClick}>
                {click ? <FaTimes className="menu-icon-times" /> : <FaBars className="menu-icon-bars" />}
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <NavLink to='/tours' className="nav-links" onClick={closeMobileMenu} activeStyle={{ color: '#1888ff' }}>
                        All Tours
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/about-us' className="nav-links" onClick={closeMobileMenu} activeStyle={{ color: '#1888ff' }}>
                        About Us
                    </NavLink>
                </li>

                {currentUser ? (
                    <>
                        <NavLink to='/sign-in-sign-up' className="nav-links" onClick={closeMobileMenu} activeStyle={{ color: '#1888ff' }}>
                            Log Out
                        </NavLink>
                        {/* <Link to="/tours" className="nav__el">
                            <div className="nav-user-container">
                                <img src={UserIcon} alt="user" className="nav__user-img"

                                />
                                <span>{currentUser.name}</span>
                            </div>
                        </Link> */}
                    </>
                ) : (
                        <>
                            <li className="nav-item">
                                <NavLink to='/sign-in-sign-up' className="nav-links" onClick={closeMobileMenu} activeStyle={{ color: '#1888ff' }}>
                                    Sign In and Sign Up
                                </NavLink>
                            </li>
                        </>
                    )}

            </ul>
        </nav>
    )
};

const mapStateToProps = (state) => ({
    user: state.user,
});


export default connect(
    mapStateToProps,
)(NavBar);