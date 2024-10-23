import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


const StyledCarousel = styled(Carousel)`
  max-width: 700px;
  margin-top: 4rem;

  @media (max-width: 768px) {
    max-width: 90%;  
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const StyledImage = styled.img`
  width: 100%;        
  object-fit: contain;

  @media (max-width: 768px) {
    max-height: 400px; 
  }

  @media (max-width: 480px) {
    max-height: 300px; 
  }
`;

interface ImageGalleryProps {
  images: string[];
}
  
export const FeaturedItemGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <StyledCarousel
      showThumbs={true} 
      dynamicHeight={false} 
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      emulateTouch={true} 
      thumbWidth={100} 
      showStatus={false}
    >
      {images.map((image, index) => (
        <div key={index}>
          <StyledImage src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </StyledCarousel>
  );
};
