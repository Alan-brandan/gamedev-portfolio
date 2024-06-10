import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #49b0cf;
  margin: 0 9%;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  height: 75vh;

  h3 {
    color: rgb(226, 17, 17);
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: #c26c6d;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;

const Visuals = styled.div`
  flex: 0 0 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #49cf50;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

const ProjectData = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #e7c59e;
  overflow-y: auto;
  max-height: 100%;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #c26c6d;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #a54d4d;
  }
`;

const InfoSection = styled.div`
  background-color: #e79ed1;
  margin-bottom: 1rem;

  p {
    font-weight: bold;
  }
`;

interface FeaturedItemProps {
  title: string;
  tech?: string[];
  date?: string;
  studio?: string;
  teamsize?: string;
  platform?: string;
  genre?: string;
  role?: string;
  description: string;
  contributions?: string;
  images: string[];
  link?: string;
}

export const FeaturedItem: React.FC<FeaturedItemProps> = ({
  title,
  description,
  tech,
  date,
  studio,
  teamsize,
  platform,
  genre,
  role,
  contributions,
  images,
  link,
}) => {
  return (
    <Item>
      <Visuals>
        <img src={images[0]} alt={title} />
      </Visuals>

      <ProjectData>
        <h3>{title}</h3>
        <InfoSection>
          {tech && <p>Tech: {tech.join(', ')}</p>}
          {date && <p>Date: {date}</p>}
          {studio && <p>Studio: {studio}</p>}
          {teamsize && <p>Team Size: {teamsize}</p>}
          {platform && <p>Platform: {platform}</p>}
          {genre && <p>Genre: {genre}</p>}
          {role && <p>Role: {role}</p>}
        </InfoSection>
        <p>{description}</p>
        {contributions && <p>{contributions}</p>}
        {link && <a href={link}>Learn more</a>}
      </ProjectData>
    </Item>
  );
};