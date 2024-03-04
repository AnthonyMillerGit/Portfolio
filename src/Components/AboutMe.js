import React from 'react';
import styled from 'styled-components';
import { FaCode, FaLaptopCode } from 'react-icons/fa';
import { SectionContainer, SectionTitle, SectionText } from '../Components/Styles/SharedStyles';
import profilePic from '../Media/Didier.jpeg';

const EntireContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around; // Adjust spacing around items
  width: 100%;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin: 30px 0; // Increase space above and below the image
`;

const AboutMeContent = styled.div`
  display: flex;
  flex-direction: column; // Change to column for aligning text under the image
  align-items: center; // Center-align the text content
  text-align: center; // Ensure text is centered
  width: 80%; // Adjust width as necessary
`;

const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  margin-top: 20px; // Add some space between the text and skills
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  flex-basis: 20%;
`;

const SkillIcon = styled.div`
  font-size: 3rem;
  color: #14FFEC;
  &:hover {
    color: #0D7377;
    transform: scale(1.1);
  }
  transition: color 0.3s ease, transform 0.3s ease;
`;
const AboutMe = () => (
  <SectionContainer>
    <EntireContainer>
      <ProfilePicture src={profilePic} alt="Your Name" />
      <AboutMeContent>
        <SectionTitle>About Me</SectionTitle>
        <SectionText>
          Here's a brief overview of who I am, my journey, and what I love doing. 
          Dive into the details of my projects below to see the work I'm most proud of.
        </SectionText>
      </AboutMeContent>
      <SkillsContainer>
        <Skill>
          <SkillIcon><FaCode /></SkillIcon>
          <SectionText>Development</SectionText>
        </Skill>
        <Skill>
          <SkillIcon><FaLaptopCode /></SkillIcon>
          <SectionText>Design</SectionText>
        </Skill>
      </SkillsContainer>
    </EntireContainer>
  </SectionContainer>
);

export default AboutMe;
