import { useState, useEffect } from "react";
import styled from 'styled-components';

const NavbarContainer = styled.div.attrs<{ hasscrolled: boolean }>(({
  hasscrolled: undefined,
}))<{ hasscrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: ${({ hasscrolled }) => (hasscrolled ? '42px' : '57px')};
  width: 100%;
  z-index: 900;
  background-color: ${({ hasscrolled }) => (hasscrolled ? '#2e2d2d' : '#252525')};
  transition: height 0.3s ease, background-color 0.3s ease;
  box-shadow: ${({ hasscrolled }) => (hasscrolled ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none')};

  @media (max-width: 768px) {
    height: ${({ hasscrolled }) => (hasscrolled ? '38px' : '50px')};
  }

  @media (max-width: 480px) {
    height: ${({ hasscrolled }) => (hasscrolled ? '35px' : '45px')};
  }
`;

const NavbarElements = styled.div.attrs<{ hasscrolled: boolean }>
( ({
  hasscrolled: undefined, 
}))<{ hasscrolled: boolean }>`
  display: flex;
  justify-content: space-between;
  width: 65%;
  transition: margin 0.4s ease-in-out;
  margin: ${({ hasscrolled }) => (hasscrolled ? '5px auto 0 auto' : '13px auto 0 auto')};
  align-items: center;

  @media (max-width: 768px) {
    width: 80%;
    margin: ${({ hasscrolled }) => (hasscrolled ? '3px auto 0 auto' : '10px auto 0 auto')};
  }

  @media (max-width: 480px) {
    width: 90%;
    margin: ${({ hasscrolled }) => (hasscrolled ? '2px auto 0 auto' : '8px auto 0 auto')};
  }
`;

const NavbarSectionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const NavbarSection = styled.div`
  a {
    color: #fff;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
    font-size: 1.2rem;
    padding: 8px 16px;
    border-radius: 5px;
    transition: color 0.3s ease, background-color 0.3s ease;

    &:hover {
      color: #ddd;
      background-color: rgba(255, 255, 255, 0.1);
    }

    @media (max-width: 768px) {
      font-size: 1.1rem;
      padding: 6px 14px;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
      padding: 5px 12px;
    }
  }
`;

const Brand = styled.a`
  color: #fff;
  text-decoration: none;

  h3 {
    margin: 0;
    font-size: 1.5rem;

    @media (max-width: 768px) {
      font-size: 1.3rem;
    }

    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
  }
`;

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <NavbarContainer hasscrolled={scrolled}>
      <NavbarElements hasscrolled={scrolled}>
        <Brand href="/">
          <h3>Alan Brandan</h3>
        </Brand>
        <NavbarSectionsContainer>
          <NavbarSection>
            <a className={"navbar_section"} href="/">Projects</a>
          </NavbarSection>
          {/*}
          <NavbarSection>
            <a className={"navbar_section"} href="/about">About</a>
          </NavbarSection>^
          {*/}
        </NavbarSectionsContainer>
      </NavbarElements>
    </NavbarContainer>
  );
};
