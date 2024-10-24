import { Navbar } from './Components/Navbar'
import { Home } from './Components/Home'
import { Footer } from './Components/Footer'
import { FeaturedGallery } from './Components/FeaturedGallery'
import { Analytics } from "@vercel/analytics/react"

import styled, { createGlobalStyle, css } from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const AppContainer = styled.div`
  width: 100%;
  padding: 4rem 0;
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
    width: 100%;
    align-items: center;
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
  width: 100%;

}
body{
  overflow-x: hidden;
  font-weight: 400;
  overflow-x: hidden;
  position: relative;
  background-color: #282c34;
  color: rgb(0, 0, 0) !important;
  width: 100%;
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
      <Analytics />
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={
              <>
                <Home></Home>
                <FeaturedGallery></FeaturedGallery>
              </>
            } />
            {/*}
            <Route path="/about" element={
              <>
                <About></About>
                <Skills></Skills>
              </>
            } />
             {*/}
          </Routes>
          <Footer></Footer>
        </Router>
      </AppContainer>
    </>
  );
}

export default App
