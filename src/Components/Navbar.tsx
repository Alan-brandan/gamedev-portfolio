import React, { useState, useEffect, useRef, Fragment } from "react";
import styled, { css } from 'styled-components'


const NavbarContainer = styled.div<{ hasscrolled: boolean }>`
position: fixed;
top: 0;
left: 0;
height: ${(props) => (props.hasscrolled ? '42px' : '57px')};
width: 100%;
z-index: 900;
background-color: ${(props) => (props.hasscrolled ? '#f7d2d2' : '#fa0808')};
`;

const NavbarElements = styled.div<{ hasscrolled: boolean }>`
display: flex;
justify-content: space-between;
width: 65%;
transition: 0.4s ease-in-out;
margin: ${(props) => (props.hasscrolled ? '5px auto 0 auto' : '13px auto 0 auto')};
background-color: #a1ee8e;
`;

const NavbarSectionsContainer = styled.div`
display: flex;
justify-content: end;
width: 70%;
background-color: #6896ec;
`;

const NavbarSection = styled.div`
background-color: #1cd3ca;
margin-left: 15px;
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
      <NavbarElements hasscrolled={scrolled}>
        <a href="/">
          <h3>Alan Brandan</h3>
        </a>
        <NavbarSectionsContainer>
          <NavbarSection>
            <a className={"navbar_section"} href="/"
            ><h2>Projects</h2></a>
          </NavbarSection>
          <NavbarSection>
            <a className={"navbar_section"} href="/about"
            ><h2>About</h2></a>
          </NavbarSection>
        </NavbarSectionsContainer>
        <div className="lang_toggle">
          <input type="checkbox" className="language_checkbox" />
        </div>
      </NavbarElements>
    </NavbarContainer>
  )

}
