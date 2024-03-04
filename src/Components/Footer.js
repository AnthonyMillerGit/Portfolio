import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #673AB7; // Purple background
  color: #FFFFFF; // White text
  padding: 20px 0;
  text-align: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
  </FooterContainer>
);

export default Footer;
