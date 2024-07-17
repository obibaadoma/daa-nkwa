import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    background-color: #4a90e2;
    width: 100%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    z-index: 10;
`;

const NavLinks = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const NavLinkItem = styled.li`
    margin: 0 1rem;
`;

const NavAnchor = styled.a`
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;

    &:hover {
        color: #ffcc00;
    }
`;

const NavButton = styled(Link)`
    background-color: white;
    color: #4a90e2;
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    border: none;
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s, color 0.3s, transform 0.2s;

    &:hover {
        background-color: #ffcc00;
        color: white;
        transform: translateY(-2px);
    }
`;

const NavBar = () => {
    return (
        <Nav>
            <NavLinks>
                <NavLinkItem>
                    <NavAnchor href="#home" className="page-scroll">Home</NavAnchor>
                </NavLinkItem>
                <NavLinkItem>
                    <NavAnchor href="#about" className="page-scroll">About</NavAnchor>
                </NavLinkItem>
                <NavLinkItem>
                    <NavAnchor href="#service" className="page-scroll">Services</NavAnchor>
                </NavLinkItem>
                <NavLinkItem>
                    <NavAnchor href="#portfolio" className="page-scroll">Gallery</NavAnchor>
                </NavLinkItem>
                <NavLinkItem>
                    <NavAnchor href="#team" className="page-scroll">Team</NavAnchor>
                </NavLinkItem>
                <NavLinkItem>
                    <NavAnchor href="#testimonials" className="page-scroll">Testimonials</NavAnchor>
                </NavLinkItem>
                <NavLinkItem>
                    <NavAnchor href="#contact" className="page-scroll">Contact</NavAnchor>
                </NavLinkItem>
            </NavLinks>
            <div>
                <NavButton to="/pharmacy">Pharmacy</NavButton>
                <NavButton to="/farm">Farm</NavButton>
                <NavButton to="/real-estate">Real Estate</NavButton>
            </div>
        </Nav>
    );
};

export default NavBar;
