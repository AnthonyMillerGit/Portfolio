import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #212121;
  color: #14FFEC;
  padding: 20px 10px;
  text-align: center;
  position: sticky;
  top: 0;
  transition: all 0.5s ease-in-out;
  z-index: 100;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);

  @media (max-width: 768px) {
    padding: 18px 8px;
  }

  @media (max-width: 480px) {
    padding: 15px 5px;
  }
`;

const NavigationLink = styled.a`
  color: #0D7377;
  text-decoration: none;
  margin: 0 15px;
  font-size: 1.8rem;
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover, &:focus {
    color: #14FFEC;
    transform: translateY(-2px);
  }

  &:active {
    color: lightgray;
  }
`;

const MenuIcon = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

const NavLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'flex' : 'none'};
    flex-direction: column;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <GlobalStyle />
      <HeaderContainer>
        <MenuIcon onClick={() => setIsOpen(!isOpen)}>☰</MenuIcon>
        <NavLinksContainer $isOpen={isOpen}>
          <NavigationLink href="#about" aria-label="About Me">About</NavigationLink>
          <NavigationLink href="#projects" aria-label="My Projects">Projects</NavigationLink>
        </NavLinksContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
