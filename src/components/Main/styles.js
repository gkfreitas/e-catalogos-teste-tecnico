import styled from 'styled-components';

// SlidePhotos

export const PhotosContainer = styled.main`
  width: 370px;
  height: 490px;
  overflow: hidden;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 10px 10px;
  margin: auto;
  overflow: auto;
`;

// AllPhotos

export const GalleryPhotos = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
`;

export const ProductCard = styled.div`
  width: 31%;
  height: 150px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: white;
  font-weight: 500;
  text-align: center;
  border-radius: 5px;
  margin: 4px;
  transition-duration: 300ms;
  cursor: pointer;
  &:hover {
    box-shadow: 1px 5px 5px 1px rgba(0, 0, 0, 0.5);
  }
`;

export const PriceCard = styled.div`
  width: 100%;
  height: 20%;
  border-radius: 5px 5px 0px 0px;
  padding: 4px;
  background-color: slateblue;
`;

export const ImageCard = styled.img`
  object-fit: contain;
  width: 100%;
  height: 78%;
`;

// AllPhotosSlider

export const RelativeArrows = styled.div`
  position: relative;
`;

export const SlideContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
`;

export const ArrowLeft = styled.img`
  position: absolute;
  bottom: 20px;
  left: 20px;
  cursor: pointer;
  transform: rotate(180deg);
`;

export const ArrowRight = styled.img`
  position: absolute;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
`;

export const ChosedImage = styled.img`
  width: 390px;
  height: 490px;
  flex-shrink: 0;
`;
