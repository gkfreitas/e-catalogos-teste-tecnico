import { useContext } from 'react';
import { ProductContext } from '../../context/product-context';
import AllPhotos from './AllPhotos';
import AllPhotosSlide from './AllPhotosSlider';
import * as S from './styles';

export default function SlidePhotos() {
  const { allPhotosVisible } = useContext(ProductContext);

  return (
    <S.PhotosContainer>
      {allPhotosVisible ? <AllPhotos /> : <AllPhotosSlide />}
    </S.PhotosContainer>
  );
}
