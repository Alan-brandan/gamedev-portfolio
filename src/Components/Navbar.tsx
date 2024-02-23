import React, { useState, useEffect, useRef, Fragment } from "react";
import styled, { css } from 'styled-components'


const NavbarContainer = styled.div<{ hasscrolled: boolean }>`
position: fixed;
top: 0;
left: 0;
height: 50px;
width: 100%;
z-index: 900;
background-color: ${(props) => (props.hasscrolled ? '#f0f0f0' : '#fa0808')};
`;

const NavbarElements = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 63%;
transition: 0.4s ease-in-out;
margin: -1px auto 0 auto;

`;

const NavbarSections = styled.div`
display: flex;
align-items: center;
margin-right: 0;
padding-top: 10px;

`;


export const Navbar = () => {

  const [scrolled, setScrolled] = useState<boolean>(false);


  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <NavbarContainer hasscrolled={scrolled} >
      <NavbarElements>
        <a href="/">
          <h3>Alan Brandan</h3>
        </a>
        <NavbarSections>
          <a className={"navbar_section"} href="/"
          ><h2>Projects</h2></a>
          <a className={"navbar_section"} href="/about"
          ><h2>About</h2></a>
        </NavbarSections>
        <div className="lang_toggle">
          <input type="checkbox" className="language_checkbox" />
        </div>
      </NavbarElements>
    </NavbarContainer>
  )

}
