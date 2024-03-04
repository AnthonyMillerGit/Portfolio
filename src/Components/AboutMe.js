import React from 'react';
import { SectionContainer, SectionTitle, SectionText } from '../Components/Styles/SharedStyles';
import styled from 'styled-components';
import { FaCode, FaLaptopCode, FaAward } from 'react-icons/fa';

const SkillsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
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

const SkillText = styled(SectionText)`
  color: #323232; // Medium Grey for Text
`;

const AboutMe = () => (
  <SectionContainer>
    <SectionTitle style={{ color: "#212121" }}>About Me</SectionTitle>
    <SectionText style={{ color: "#323232" }}>
      Here's a brief overview of who I am, my journey, and what I love doing. 
      Dive into the details of my projects below to see the work I'm most proud of.
    </SectionText>
    <SkillsContainer>
      <Skill>
        <SkillIcon><FaCode /></SkillIcon>
        <SkillText>Development</SkillText>
      </Skill>
      <Skill>
        <SkillIcon><FaLaptopCode /></SkillIcon>
        <SkillText>Design</SkillText>
      </Skill>
      <Skill>
        <SkillIcon><FaAward /></SkillIcon>
        <SkillText>Achievements</SkillText>
      </Skill>
    </SkillsContainer>
  </SectionContainer>
);

export default AboutMe;
