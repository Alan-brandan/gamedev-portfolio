import React from 'react'
import styled, { css } from 'styled-components'

const HomeContainer = styled.div`
    background-color: #242327;
    height: 120%;
    padding: 35% 0 30rem 0;
    margin-bottom: 50em;
`;

export const Home = () => {
    return (
        <HomeContainer >
            <div className='home_data'>
                <p>Hi, my name is</p>
                <h1>Alan Brandan</h1>
            </div>
            <div className='home_items'>
                <div className='scroll_icon'><span></span></div>
            </div>
        </HomeContainer>
    )
}
