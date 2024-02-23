import { Navbar } from './Components/Navbar'
import { Home } from './Components/Home'
import { Footer } from './Components/Footer'
import { Gallery } from './Components/Gallery'
import { About } from './Components/About'
import { Skills } from './Components/Skills'

import styled, { createGlobalStyle, css } from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Fragment } from 'react'

const AppContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;
const ResetStyles = css`
  /* CSS Reset */

  :root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}

*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
html{
  scroll-behavior: smooth;
  scroll-padding-top: 75px;
}
body{
  overflow-x: hidden;
  font-weight: 400;
  overflow-x: hidden;
  position: relative;
  background-color: #282c34;
  color: rgb(0, 0, 0) !important;
}
h1,h2,h3,h4,h5,h6{
  margin:0;
  padding: 0;
  line-height: normal;
}

`;

const GlobalStyles = createGlobalStyle`
  ${ResetStyles}
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={
              <>
                <Home></Home>
                <Gallery></Gallery>
              </>
            } />
            <Route path="/about" element={
              <>
                <About></About>
                <Skills></Skills>
              </>
            } />
          </Routes>
          <Footer></Footer>
        </Router>
      </AppContainer>
    </>
  );
}

export default App
