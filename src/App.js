import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import { createGlobalStyle } from 'styled-components';


// This resets the default browser styles for responsiveness
const GlobalStyle = createGlobalStyle`
body, h1, nav, a {
  margin: 0;
  padding: 0;
}
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;