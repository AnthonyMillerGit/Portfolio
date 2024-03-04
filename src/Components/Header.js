import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #009688; // Teal background
  color: #FFFFFF; // White text
  padding: 20px 0;
  text-align: center;
`;

const Header = () => (
  <HeaderContainer>
    <h1>Your Portfolio Name</h1>
  </HeaderContainer>
);

export default Header;