import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles

// Styled components
const StyledCarousel = styled(Carousel)`
  max-width: 700px;
  margin-top:4rem;
`;

const StyledImage = styled.img`
  width: 100%;        /* Ensure the image takes the full width of the container */
  object-fit: contain;  
`;

interface ImageGalleryProps {
  images: string[];
}
  
export const FeaturedItemGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <StyledCarousel
      showThumbs={true} 
      dynamicHeight={true}  // Avoid dynamic height to maintain consistent layout
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