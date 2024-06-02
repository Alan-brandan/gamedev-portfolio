import React from 'react'
import styled, { css } from 'styled-components'

const Item = styled.div`
    display: flex;
    justify-content: center; 
    background-color: #49b0cf;

    padding: 5rem 0;

    h3{
    color: rgb(226, 17, 17);
    font-size: 1rem;
    }
    p{
    color: #c26c6d;
    font-size: 0.8;
    }
`;

const Visuals = styled.div`
    display: flex;

`;

const ProjectData = styled.div`
    display: flex;
    flex-direction: column;

`;

export const FeaturedItem = () => {
  return (
    <Item>
      <Visuals>
        <img src="https://avatars.githubusercontent.com/u/89269793?v=4" alt="" />
      </Visuals>

      <ProjectData>
        <h3>Title</h3>
        <div>
          <p>Information</p>
        </div>
        <p>Description</p>
      </ProjectData>
    </Item>
  )
}
