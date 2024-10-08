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
  position: relative;
  background-color: #82a325;
  background-image: url("https://b.l3n.co/i/6f17we.gif");
  background-size: cover;
  background-position: center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
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
  z-index: 2; 
`;

const Indicator = styled.li<{ isselected: boolean }>`
  width: 60px;
  height: 60px;
  display: inline-block;
  margin: 0 8px;
  list-style: none;
  cursor: pointer;
  border: 2px solid ${props => (props.isselected ? '#707070' : '#ccc')};
  border-radius: 30%;
  background-color: ${props => (props.isselected ? '#fff' : '#ccc')};
  box-shadow: ${props => (props.isselected ? '0 0 5px #707070' : 'none')};
  opacity: ${props => (props.isselected ? '1' : '0.7')};
  transform: ${props => (props.isselected ? 'scale(1.3)' : 'scale(1)')};

  transition: 
    background-color 0.3s, 
    box-shadow 0.3s, 
    opacity 0.3s, 
    border 0.3s,
    transform 0.3s;

  img {
    width: 100%;
    height: 100%;
    border-radius: 30%;
    filter: grayscale(${props => (props.isselected ? '0%' : '100%')});
    transition: filter 0.3s;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #fff;
    border: 2px solid #707070;
    box-shadow: 0 0 5px #707070;
    opacity: 1;
    transform: translateY(-15px) scale(1.2);

    img {
      filter: grayscale(0%);
    }
  }
`;

interface Project {
  id: number;
  title: string;
  date: string;
  platform: string[];
  role: string[];
  description: string;
  contributions: string[];
  images: string[];
  link: string[];
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

  useEffect(() => {
    if (projects.length > 0) {
      setSelectedIndex(0);
    }
  }, [projects]);

  const handleIndicatorClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <ProjectGallery>
      <ContentWrapper>
        <h2>Featured Projects</h2>
        <CarouselWrapper>
          {projects.length > 0 && (
            <>
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
                    date={project.date}
                    platform={project.platform}
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
                    isselected={selectedIndex === index}
                    onClick={() => handleIndicatorClick(index)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Indicator ${index + 1}`}
                    title={`Indicator ${index + 1}`}
                  >
                    <img src={project.icon} alt={`Indicator ${index + 1}`} draggable="false" />
                  </Indicator>
                ))}
              </IndicatorsContainer>
            </>
          )}
        </CarouselWrapper>
      </ContentWrapper>
    </ProjectGallery>
  );
};