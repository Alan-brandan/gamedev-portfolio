import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 2rem 0;
  background-color: #488dca7d;
  display:flex; 
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Visuals = styled.div`
  
`;

const AboutText = styled.div`
  background-color: #62ca487c;
  font-family: 'Nunito', sans-serif;
  font-size: 1.13rem;
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 5%;
  height: 60vh;
  justify-content: center; 

  span {
    font-family: 'Montserrat';
    color: rgb(212, 20, 20);
  }
`;

const textContent = (
    <>
        I'm a game developer from Argentina with a love for crafting engaging and dynamic experiences.
        <br /><br />

        As a self-taught and
        <span> endlessly curious individual</span>, I’m always eager to explore new areas and expand my knowledge. I see myself as a
        <span> problem solver who actively seeks opportunities to learn and grow.</span>
        <br /><br />

        While I consider myself a jack-of-all-trades,
        <span> my primary focus lies in programming and design</span>, where I excel and find the most joy.
        <br /><br />

        When I’m not working on games, you can find me tinkering with all sorts of projects, whether it's messing around with electronics or experimenting with shaders, allowing my creativity to flow in different directions.
        <br /><br />
    </>
);

export const About = () => {
    return (
        <Container>
            <Visuals>
                <img src="https://avatars.githubusercontent.com/u/89269793?v=4" alt="Description" />

            </Visuals>
            <AboutText>
                <h3>About Me</h3>
                <p>{textContent}</p>
            </AboutText>
        </Container>
    );
};
