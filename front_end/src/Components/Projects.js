import React from 'react';
import { SectionContainer, SectionTitle, SectionText } from '../Components/Styles/SharedStyles';

const Projects = () => (
  <SectionContainer id="projects">
    <SectionTitle>My Work</SectionTitle>
    <SectionText>
      <p>
        For specific projects, you can follow the links provided to my GitHub profile, but I wanted to touch on a couple of specifics here as most of my work has been with proprietary code for the companies I've worked for and not found on my GitHub profile.
      </p>
      <div>
        <h4>Web Development</h4>
        <p>
          My background is in web development focusing on both front end and back end with specialization in authentication and encryption. My favorite tools have been using React for my front end and Golang for my back end web applications but I also have experience using ruby, php, dart (flutter), node.js, and others for development too.
        </p>
      </div>
      <div>
        <h4>Cloud Migration</h4>
        <p>
          Most of the work I've been doing over the last few years has been spent developing and maintaining automation software with an emphasis on cloud migration. I have experience with most major cloud providers (AWS, Azure, GCP) but my favorite one to use and what I have my certifications in is AWS using Terraform.
        </p>
      </div>
      <div>
        <h4>Personal Projects</h4>
        <p>
          My current passions include learning and implementing everything I can about AI so I can utilize it in all aspects of my work and projects. I've also recently dabbled in developing applications for VR and AR use such as for the Apple Vision Pro and MetaQuest headsets. I make (and sell) pixel art in my free time and also use it when I program my own games for the old Nintendo Gameboy system.
        </p>
      </div>
    </SectionText>
  </SectionContainer>
);

export default Projects;
