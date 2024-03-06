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

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column; // Changed to column to align title above skills
  align-items: center; // Center align the contents
  gap: 20px;
  margin-top: 20px;
`;

const Skill = styled.div`
  display: flex;
  flex-direction: row; // Align skills in a row for a horizontal layout
  flex-wrap: wrap; // Allow skills to wrap
  justify-content: center; // Center the skills
  width: 100%; // Use full width to center content
`;

const skills = [
  'JavaScript',
  'React',
  'HTML',
  'CSS',
  'Python',
  'Java',
  'Golang',
  'SQL',
  'PostgreSQL',
  'MongoDB',
  'Node.js',
  'Express',
  'Git',
  'Docker',
  'Kubernetes',
  'AWS',
  'Azure',
  'Terraform',
  'Puppet/Ansible'
];

const skillsString = skills.join(', ');
const AboutMe = () => (

  <SectionContainer>
    <EntireContainer>
      <ProfilePicture src={profilePic} alt="Your Name" />
      <AboutMeContent>
        <SectionTitle>Welcome</SectionTitle>
        <SectionText>
          Hello, my name is Anthony, and I am a software engineer based out of Phoenix, Arizona. With a passion for creating and learning, my journey in technology has been driven by curiosity and the desire to solve complex problems. My expertise spans developing innovative applications to optimizing user experiences, reflecting my commitment to enhancing the way we interact with digital environments. Outside of coding, I thrive on exploring new technologies and continuously expanding my skill set to stay at the forefront of industry trends. My goal is to craft solutions that not only meet immediate needs but also anticipate future challenges.
        </SectionText>
      </AboutMeContent>
      <SkillsContainer>
        <SectionTitle>Some of my areas of expertise include:</SectionTitle>
        <SectionText>{skillsString}</SectionText>
      </SkillsContainer>
    </EntireContainer>
  </SectionContainer>
);

export default AboutMe;
