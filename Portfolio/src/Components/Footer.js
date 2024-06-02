import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #212121; // Most prominent color for the background
  color: #323232; // Secondary color for text
  padding: 20px 0;
  text-align: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const FooterText = styled.p`
  color: #323232; // Medium Grey for readability
  font-size: 1.6rem;
  margin: 0;
  padding: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const SocialLinksContainer = styled.div`
  margin-top: 10px;
`;

const SocialLink = styled.a`
  color: #14FFEC; // Cyan for links to make them stand out
  margin: 0 10px;
  &:hover {
    color: #0D7377; // Teal for hover states
  }
`;

const Footer = () => (
  <FooterContainer>
    <FooterText>&copy; {new Date().getFullYear()} Anthony Miller. All Rights Reserved.</FooterText>
    <SocialLinksContainer>
      <SocialLink href="mailto:anthony@amiller.info" aria-label="Email">Email</SocialLink>
      <SocialLink href="https://www.linkedin.com/in/anthony-miller-88768842/" aria-label="LinkedIn">LinkedIn</SocialLink>
      <SocialLink href="https://github.com/AnthonyMillerGit" aria-label="GitHub">GitHub</SocialLink>
    </SocialLinksContainer>
  </FooterContainer>
);

export default Footer;