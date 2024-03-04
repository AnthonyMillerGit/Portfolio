// src/components/Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #212121; // Dark Gray background
  color: #14FFEC; // Cyan text for contrast
  padding: 20px 0;
  text-align: center;
  position: sticky;
  top: 0;
  transition: all 0.5s ease-in-out;
  z-index: 100;
`;

const Title = styled.h1`
  color: #14FFEC; // Cyan for contrast
  font-size: 2.2rem; // Starts at 22px for standard desktop

  @media (max-width: 768px) {
    font-size: 2rem; // Scales down to 20px on tablets
  }

  @media (max-width: 480px) {
    font-size: 1.8rem; // Scales down to 18px on mobile devices
  }
`;

const NavigationLink = styled.a`
  color: #0D7377; // Teal links
  text-decoration: none;
  margin: 0 15px;
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    color: #14FFEC; // Cyan on hover
    transform: translateY(-2px); // Slightly raise the link
  }
`;

const Header = () => (
  <HeaderContainer>
    <Title>Your Portfolio Name</Title>
    <nav>
      <NavigationLink href="#about">About</NavigationLink>
      <NavigationLink href="#projects">Projects</NavigationLink>
      <NavigationLink href="#contact">Contact</NavigationLink>
    </nav>
  </HeaderContainer>
);

export default Header;
