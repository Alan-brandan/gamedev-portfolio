import React from 'react'
import styled, { css } from 'styled-components'



const HomeContainer = styled.div`
    background-color: #a3f89b73;
    margin-bottom: 15rem;
    display: flex;
    justify-content: center;
`;

const Intro = styled.div`
    background-color: #af342f;
    display: flex;
    flex-direction: column;

    p{
        font-size: 2rem;
    }
`;

const IntroVisuals = styled.div`
    background-color: #7a57e6;

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
