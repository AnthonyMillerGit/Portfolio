import React from 'react';
import styled from 'styled-components';
import { SectionContainer, SectionTitle, SectionText } from '../Components/Styles/SharedStyles';
import profilePic from '../Media/Didier.jpeg';

const EntireContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin: 30px 0;
`;

const AboutMeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 80%;
`;

const AboutMe = () => (
  <SectionContainer>
    <EntireContainer id="about">
      <ProfilePicture src={profilePic} alt="didierDogba" />
      <AboutMeContent>
        <SectionTitle>About Me</SectionTitle>
        <SectionText>
          Welcome! My name is Anthony Miller and I am a software engineer based out of
          Phoenix, Arizona. I have a passion for problem solving, creativity, and 
          working well as a teammate to achieve goals. I believe strongly in ethical
          coding practices and believe we as software developers have a responsibility
          to do right no matter the project. Outside of work I enjoy staying active and
          spoiling my dog, Didier Dogba (Pictured with his favorite toy above.).
        </SectionText>
      </AboutMeContent>
    </EntireContainer>
  </SectionContainer>
);

export default AboutMe;
