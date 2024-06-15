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
`;

const Visuals = styled.div`
  flex: 0 0 45%;
  display: flex;
  justify-content: center;
  align-items: center;

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
  text-align: left;
  background-color: #769cbd;
  margin: 0 1rem 0 2.7rem;
  overflow-y: auto;
  max-height: 100%;


`;

const ProjectTitle = styled.div`
  h3{
    font-size: 2.5rem;
  }

  span{
    font-size: 1.5rem;
    font-weight: 500;
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
  span{
    font-weight: 500;
  }

  ul {
    list-style: none;
    margin-top: 1rem;
    padding-left: 1.5rem;
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
    color: #333;
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
    const parts = text.split('*').map((part, index) => {
      if (index % 2 === 1) {
        return <span key={index}>{part}</span>;
      } else {
        return part;
      }
    });

    return <p>{parts}</p>;
  };

  return (
    <Item>
      <Visuals>
        <img src={images[0]} alt={title} />
      </Visuals>

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
                <a key={index} href={link && link[index]}>
                  {platformItem}
                </a>
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
            <ul>
              {contributions.map((contribution, index) => (
                <li key={index}> • {contribution}</li>
              ))}
            </ul>
          )}
        </Description>
      </ProjectData>
    </Item>
  );
};