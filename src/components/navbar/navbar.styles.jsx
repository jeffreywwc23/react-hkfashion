import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.div`
    width:100%;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: white;
    position: fixed;
    z-index: 999;
    top: 0px;
`;

export const LogoContainer = styled(Link)`
    padding: 1rem 0;
    color: #406299;
    text-decoration: none;
    font-weight: 800;
    font-size: 1.7rem;

    span {
        font-weight: 300;
        font-size: 1.3rem;
        color: #242222;
    }
`;

export const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    margin-top: 10px;

    span {
        height: 2px;
        width: 25px;
        background: #7b7fda;
        margin-bottom: 4px;
        border-radius: 5px;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`;

export const MenuContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-top: 5px;

    @media (max-width: 768px) {
        background: #fff;
        overflow:hidden;
        flex-direction: column;
        width: 100%;
        max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
        transition: max-height 0.3s ease-in;
    }
`;

export const MenuLink = styled(Link)`
    margin: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: #242222;
    transition: all 0.3s ease-in;
    font-size: 0.9rem;

    &:hover {
        color: #406299;
        font-size: 1.2rem;
    }
`;
