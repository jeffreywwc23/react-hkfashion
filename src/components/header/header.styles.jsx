import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  position: fixed;
  z-index: 999;
  background: #fff;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const MobileNavContainer = styled.div`
    display: none;

    @media screen and (max-width: 630px) {
      display: block;
    ${'' /* position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 120%);
    font-size: 1.8rem;
    cursor: pointer; */}
  }
`


export const LogoContainer = styled(Link)`
  height: 100%;
  width: 20px;
  padding: 10px;

  @media screen and (max-width: 800px) {
    width:30px;
    padding: 0;
  }
`;

export const OptionsContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${'' /* @media screen and (max-width: 800px) {
    width: 70%;
  } */}

  @media screen and (max-width: 630px) {

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 60vh;
    background: #242222;
    ${'' /* position: absolute;
    top: 20px;
    left: -100%; */}


    ${'' /* background: #242222;
    left: 0;
    z-index: 2; */}
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

  @media screen and (max-width: 630px) {
      display: none;
  }
`;

OptionLink.displayName = 'OptionLink';
