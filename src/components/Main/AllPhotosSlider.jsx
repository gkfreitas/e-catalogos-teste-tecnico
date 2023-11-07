import { useContext, useEffect } from 'react';
import arrow from '../../../public/icons/right-arrow.svg';
import { ProductContext } from '../../context/product-context';
import { mockProducts } from '../../mock/produtosMOCK';
import RenderAllPhotos from './RenderAllPhotos';
import * as S from './styles';

export default function AllPhotosSlide() {
  const {
    toggleChosedImage,
    chosedImage,
    allPhotosVisible,
    setIndexPhoto,
    indexPhoto,
    productImageUrl,
  } = useContext(ProductContext);

  const slideToNextPhoto = () => {
    toggleChosedImage(false);
    setIndexPhoto((prevState) => prevState + 1);

    if (indexPhoto === mockProducts.length - 1) {
      setIndexPhoto(0);
    }

    const photoElement = document.getElementById(`photo-${indexPhoto}`);

    if (photoElement) {
      photoElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const slideToPreviusPhoto = () => {
    toggleChosedImage(false);
    setIndexPhoto((prevState) => prevState - 1);

    if (indexPhoto === 0) {
      setIndexPhoto(mockProducts.length - 1);
    }

    const photoElement = document.getElementById(`photo-${indexPhoto}`);
    if (photoElement) {
      photoElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  useEffect(() => {
    const photoElement = document.getElementById(`photo-${indexPhoto}`);
    if (photoElement) {
      photoElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [indexPhoto]);

  return (
    <S.RelativeArrows>
      <S.SlideContainer>
        {chosedImage && !allPhotosVisible ? (
          <S.ChosedImage src={ productImageUrl } alt="foto" />
        ) : (
          <RenderAllPhotos />
        )}

        <S.ArrowLeft
          role="presentation"
          onClick={ slideToPreviusPhoto }
          src={ arrow }
          alt="Flecha para esquerda"
        />
        <S.ArrowRight
          role="presentation"
          onClick={ slideToNextPhoto }
          src={ arrow }
          alt="Flecha para direita"
        />
      </S.SlideContainer>
    </S.RelativeArrows>
  );
}
