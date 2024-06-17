import React from 'react'
import styled, { css } from 'styled-components'



const HomeContainer = styled.div`
  background-color: #a3f89b73;
  margin: 2rem 0 15rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Intro = styled.div`
  background-color: #af342f;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 10px;
  margin: 1rem;
  text-align: center;
  color: #fff;

  p {
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    margin: 1rem 0 0;
    font-size: 3rem;
  }
`;

const IntroVisuals = styled.div`
  background-color: #7a57e6;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 10px;
  margin: 1rem;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 50%;
  }
`;

export const Home = () => {
    return (
        <HomeContainer >
            <Intro>
                <p>Hi, my name is</p>
                <h1>Alan Brandan</h1>
            </Intro>

            <IntroVisuals>
                <img src="https://avatars.githubusercontent.com/u/89269793?v=4" alt="" />
            </IntroVisuals>

        </HomeContainer>
    )
}
