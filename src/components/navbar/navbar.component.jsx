import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import {
    NavbarContainer,
    LogoContainer,
    Hamburger,
    MenuContainer,
    MenuLink
} from './navbar.styles';


const Navbar = ({ currentUser, hidden, signOutStart }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <NavbarContainer>
            <LogoContainer to="/">
                React<span>FashionHk</span>
            </LogoContainer>

            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </Hamburger>


            <MenuContainer isOpen={isOpen}>

                <MenuLink to='/shop'>Shop</MenuLink>
                <MenuLink to='/contact'>Contact</MenuLink>
                <MenuLink to='/articles'>Articles</MenuLink>

                {currentUser ? (
                    <MenuLink as='div' onClick={signOutStart}>
                        Sign Out
                    </MenuLink>
                ) : (
                        <MenuLink to='/signin'>Sign In</MenuLink>
                    )
                }
                <CartIcon />
            </MenuContainer>

            {hidden ? null : <CartDropdown />}
        </NavbarContainer>
    );
}


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);