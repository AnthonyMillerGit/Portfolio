import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components'; // Import styled from styled-components

// This resets the default browser styles for responsiveness
const GlobalStyle = createGlobalStyle`
body, h1, nav, a {
  margin: 0;
  padding: 0;
}
`;

const MainContent = styled.div`
  padding-bottom: 100px; // Adjust this value based on your footer's height
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <MainContent> {/* Wrap the main content with MainContent styled-component */}
        <AboutMe />
        <Projects />
        <Contact />
      </MainContent>
      <Footer />
    </div>
  );
}

export default App;