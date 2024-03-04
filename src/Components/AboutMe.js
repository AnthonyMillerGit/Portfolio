import React from 'react';
import styled from 'styled-components';
import { FaCode, FaLaptopCode } from 'react-icons/fa'; // Updated to only include necessary icons

import { SectionContainer, SectionTitle, SectionText } from '../Components/Styles/SharedStyles';

const SkillsContainer = styled.div`
  display: flex;
  justify-content: center; // Center the items horizontally
  gap: 40px; // Creates space between the flex items
  flex-wrap: wrap; // Allows items to wrap in smaller screens
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  flex-basis: 20%; // Assigns a base width to each skill section
`;

const SkillIcon = styled.div`
  font-size: 3rem;
  color: #14FFEC; // Cyan for Icons
  &:hover {
    color: #0D7377; // Teal on hover
    transform: scale(1.1); // Slightly enlarge icons on hover
  }
  transition: color 0.3s ease, transform 0.3s ease;
`;

const AboutMe = () => (
  <SectionContainer>
    <SectionTitle>About Me</SectionTitle>
    <SectionText>
      Here's a brief overview of who I am, my journey, and what I love doing. 
      Dive into the details of my projects below to see the work I'm most proud of.
    </SectionText>
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
  </SectionContainer>
);

export default AboutMe;
