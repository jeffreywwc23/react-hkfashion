import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../../assets/fashion-icon.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  MobileNavContainer,
  OptionLink
} from './header.styles';

import { FaTimes, FaBars } from "react-icons/fa";

export const Header = ({ currentUser, hidden, signOutStart }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>

      <OptionsContainer className={click ? 'nav-menu active' : 'nav-menu'}>
        <MobileNavContainer onClick={handleClick}>
          {click ? <FaTimes className="menu-icon-times" /> : <FaBars className="menu-icon-bars" />}
        </MobileNavContainer>


        <OptionLink to='/shop' onClick={closeMobileMenu}>SHOP</OptionLink>
        <OptionLink to='/contact' onClick={closeMobileMenu}>CONTACT</OptionLink>
        <OptionLink to='/articles' onClick={closeMobileMenu}>ARTICLES</OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={signOutStart}>
            SIGN OUT
          </OptionLink>
        ) : (
            <OptionLink to='/signin'>SIGN IN</OptionLink>
          )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  )
};

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
)(Header);
