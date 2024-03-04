// src/components/Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #212121; // Dark Gray background
  color: #14FFEC; // Cyan text for contrast
  padding: 20px 10px; // Adjusted for better spacing on all devices
  text-align: center;
  position: sticky;
  top: 0;
  transition: all 0.5s ease-in-out;
  z-index: 100;
  border-radius: 30px; /* Adjust the radius as needed */
  overflow: hidden; /* Ensures content respects the border radius */

  @media (max-width: 768px) {
    padding: 18px 8px; // Slightly reduce padding for tablets
  }

  @media (max-width: 480px) {
    padding: 15px 5px; // Reduce padding for mobile devices
  }
`;

const NavigationLink = styled.a`
  color: #0D7377; // Teal links
  text-decoration: none;
  margin: 0 100px; // Increased spacing
  font-size: 1.8rem;
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    color: #14FFEC; // Cyan on hover
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    margin: 0 15px;
  }

  @media (max-width: 480px) {
    margin: 0 10px;
  }
`;

const Header = () => (
  <HeaderContainer>
    <nav>
      <NavigationLink href="#about">About</NavigationLink>
      <NavigationLink href="#projects">Projects</NavigationLink>
      <NavigationLink href="#contact">Contact</NavigationLink>
    </nav>
  </HeaderContainer>
);

export default Header;
