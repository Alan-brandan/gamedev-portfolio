import React, { useEffect, useState } from 'react';
import { FeaturedItem } from './FeaturedItem'
import styled from 'styled-components'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ProjectGallery = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: #82a325;
`;

const CarouselWrapper = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

const CustomCarousel = styled(Carousel)`
margin-bottom: -25px;
`;

const IndicatorsContainer = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  background-color: #328bda;
`;

const Indicator = styled.li<{ isSelected: boolean }>`
  width: 65px;
  height: 65px;
  display: inline-block;
  margin: 0 8px;
  list-style: none;
  cursor: pointer;
  border: 2px solid ${props => (props.isSelected ? '#707070' : '#ccc')};
  border-radius: 30%;
  background-color: ${props => (props.isSelected ? '#fff' : '#ccc')};
  box-shadow: ${props => (props.isSelected ? '0 0 5px #707070' : 'none')};
  opacity: ${props => (props.isSelected ? '1' : '0.6')};
  transition: background-color 0.3s, box-shadow 0.3s, opacity 0.3s, border 0.3s;

  img {
    width: 100%;
    height: 100%;
    border-radius: 30%;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 1;
  }
`;

interface Project {
  id: number;
  title: string;
  tech: string[];
  date: string;
  studio: string;
  teamsize: string;
  platform: string;
  genre: string;
  role: string;
  description: string;
  contributions: string;
  images: string[];
  link: string;
  icon: string;
}

export const FeaturedGallery: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

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

  const handleIndicatorClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <ProjectGallery>
      <h2>Featured Projects</h2>
      <CarouselWrapper>
        <CustomCarousel
          showArrows={true}
          swipeable={true}
          showStatus={false}
          infiniteLoop={true}
          showIndicators={false}
          selectedItem={selectedIndex}
          onChange={(index) => setSelectedIndex(index)}
        >
          {projects.map((project) => (
            <FeaturedItem
              key={project.id}
              title={project.title}
              description={project.description}
              tech={project.tech}
              date={project.date}
              studio={project.studio}
              teamsize={project.teamsize}
              platform={project.platform}
              genre={project.genre}
              role={project.role}
              contributions={project.contributions}
              images={project.images}
              link={project.link}
            />
          ))}
        </CustomCarousel>
        <IndicatorsContainer>
          {projects.map((project, index) => (
            <Indicator
              key={index}
              isSelected={selectedIndex === index}
              onClick={() => handleIndicatorClick(index)}
              role="button"
              tabIndex={0}
              aria-label={`Indicator ${index + 1}`}
              title={`Indicator ${index + 1}`}
            >
              <img src={project.icon} alt={`Indicator ${index + 1}`} />
            </Indicator>
          ))}
        </IndicatorsContainer>
      </CarouselWrapper>
    </ProjectGallery>
  );
};