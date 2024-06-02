import React from 'react'
import { FeaturedItem } from './FeaturedItem'
import { FeaturedButtons } from './FeaturedButtons'
import styled, { css } from 'styled-components'

const ProjectGallery = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width:100%;
    padding: 0;
    margin: 0;
  
    background-color: #82a325;

`;


export const FeaturedGallery = () => {
  return (
    <ProjectGallery>
      <h2>Featured Projects</h2>
      <FeaturedItem></FeaturedItem>
      <FeaturedButtons></FeaturedButtons>
    </ProjectGallery>
  )
}
