import React, { useEffect, useState } from 'react';
import { FeaturedItem } from './FeaturedItem'
import styled, { css } from 'styled-components'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ProjectGallery = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width:100%;
    padding: 0;
    margin: 0;

    background-color: #82a325;

`;

const indicatorStyles: CSSProperties = {
  background: '#fff',
  width: 65,
  height: 65,
  display: 'inline-block',
  margin: '0 8px'

};

interface Project {
  id: number;
  category: string;
  title: string;
  tech: string[];
  date: string;
  desc: string;
  background: string;
  images: string[];
  link: string;
  repo: string;
  icon: string;
}


export const FeaturedGallery: React.FC = () => {

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('public/Data.json')
      .then(response => response.json())
      .then(data => {
        const transformedData: Project[] = data.map((item: any) => ({
          ...item,
          desc: item.desc
        }));
        setProjects(transformedData);
      })
      .catch(error => console.error('Error fetching the projects:', error));
  }, []);

  return (
    <ProjectGallery>
      <h2>Featured Projects</h2>
      <Carousel showArrows={true} swipeable={true} showStatus={false} infiniteLoop={true}
       renderIndicator={(onClickHandler, isSelected, index, label) => {

        if (isSelected) {
            return (
                <li
                    style={{ ...indicatorStyles, background: '#707070' }}
                    aria-label={`Selected: ${label} ${index + 1}`}
                    title={`Selected: ${label} ${index + 1}`}
                    >  <img src={projects[index].icon} /></li>
            );
        }
        return (
            <li
                style={indicatorStyles}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                title={`${label} ${index + 1}`}
                aria-label={`${label} ${index + 1}`}
            >            <img src={projects[index].icon} /></li>
        );
    }}>
        {projects.map(project => (
          <FeaturedItem key={project.id} title={project.title} description={project.desc} />
        ))}
      </Carousel>
    </ProjectGallery>
  )
}
