import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #212121;
  color: #323232;
  padding: 20px 0;
  text-align: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const FooterText = styled.p`
  font-size: 1.6rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Footer = () => (
  <FooterContainer>
    <FooterText>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</FooterText>
  </FooterContainer>
);

export default Footer;
