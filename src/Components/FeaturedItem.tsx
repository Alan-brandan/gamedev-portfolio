import React from 'react';
import styled from 'styled-components';
import { FeaturedItemGallery } from './FeaturedItemGallery';

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0 9%;
  padding: 2rem;
  overflow: hidden;
  height: 75vh;

  @media (max-width: 768px) {
    flex-direction: column; 
    height: auto; 
  }

  @media (max-width: 480px) {
    margin: 0 5%; 
    padding: 1rem; 
  }
`;

const ProjectData = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 0 1rem 0 2.7rem;
  overflow-y: auto;
  max-height: 100%;

  @media (max-width: 768px) {
    margin: 1rem 0 0; 
  }

  @media (max-width: 480px) {
    margin: 0; 
  }
`;

const ProjectTitle = styled.div`
  h3 {
    font-size: 2.5rem;
    color: white;

    @media (max-width: 768px) {
      font-size: 2rem; 
    }

    @media (max-width: 480px) {
      font-size: 1.8rem; 
    }
  }

  span {
    font-size: 1.5rem;
    font-weight: 500;
    color: #b4b4b4;

    @media (max-width: 768px) {
      font-size: 1.2rem; 
    }

    @media (max-width: 480px) {
      font-size: 1rem; 
    }
  }
`;

const InfoSection = styled.div`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 10px;

  p {
    font-weight: bold;
    margin: 0;
  }
`;

const Description = styled.div`
  p {
    color: white;
    font-size: 1.1rem;

    @media (max-width: 768px) {
      font-size: 1rem; 
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  span {
    color: white;
    font-weight: 550;
  }

  max-height: 50vh;
  overflow-y: auto;
`;

const Contributions = styled.div`
  span {
    display: block;
    margin-top: 2rem;
  }

  ul {
    list-style: disc;
    margin-left: 2rem;
  }

  li {
    color: white;
    font-size: 1.1rem;
    margin: 5px 0 10px 0;

    @media (max-width: 768px) {
      font-size: 1rem; 
    }

    @media (max-width: 480px) {
      font-size: 0.9rem; 
    }
  }

  .nested-ul {
    list-style: circle;
    margin-left: 2rem;
    color: white;
    font-size: 1rem;
  }
`;

const ProjectLink = styled.a`
  color: white;
  text-decoration: none;
  margin-right: 0.5rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: large;
  padding: 2px 6px;
  border: 1px solid white;

  &:hover {
    text-decoration: underline;
  }
`;

const PlatformSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  p {
    font-weight: bold;
    margin-right: 0.5rem;
  }

  a {
    color: white;
    text-decoration: none;
    margin-right: 0.5rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const RoleTag = styled.span`
  background-color: #c26c6d;
  color: white;
  padding: 0.3rem 0.5rem;
  border-radius: 25px;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem ;
display: inline-block; 
`;

interface FeaturedItemProps {
  title: string;
  date?: string;
  platform?: string[];
  role?: string[];
  description: string;
  contributions?: string[];
  images: string[];
  link?: string[];
}

export const FeaturedItem: React.FC<FeaturedItemProps> = ({
  title,
  description,
  date,
  platform,
  role,
  contributions,
  images,
  link,
}) => {
  const renderDescription = (text: string) => {
    return text.split('\n').map((line, index) => (
      <p key={index}>
        {line.split('*').map((part, partIndex) => {
          if (partIndex % 2 === 1) {
            return <span key={partIndex}>{part}</span>;
          } else {
            return part;
          }
        })}
      </p>
    ));
  };

  return (
    <Item>
      <FeaturedItemGallery images={images} />
      <ProjectData>
        <ProjectTitle>
          <h3>
            {title} {date && <span>({date})</span>}
          </h3>
        </ProjectTitle>
        <InfoSection>
          {platform && (
            <PlatformSection>
              {platform.map((platformItem, index) => (
                <ProjectLink key={index} href={link && link[index]}>
                  {platformItem}
                </ProjectLink>
              ))}
            </PlatformSection>
          )}

          {role && (
            <div>
              {role.map((r, index) => (
                <RoleTag key={index}>{r}</RoleTag>
              ))}
            </div>
          )}
        </InfoSection>
        <Description>
          {renderDescription(description)}

          {contributions && (
            <Contributions>
              <span>Key Contributions</span>
              <ul>
                {contributions.map((contribution, index) => {
                  const parts = contribution.split('•');
                  return (
                    <li key={index}>
                      {parts[0]}
                      {parts.length > 1 && (
                        <ul className="nested-ul">
                          {parts.slice(1).map((part, subIndex) => (
                            <li key={subIndex}>{part.trim()}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </Contributions>
          )}
        </Description>
      </ProjectData>
    </Item>
  );
};
