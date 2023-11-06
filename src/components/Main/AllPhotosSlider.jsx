import { useContext, useEffect } from 'react';
import arrow from '../../../public/icons/right-arrow.svg';
import { CategoryContext } from '../../context/category-context';
import { ProductContext } from '../../context/product-context';
import { mockProducts } from '../../mock/produtosMOCK';
import RenderAllPhotos from './RenderAllPhotos';
import * as S from './styles';

export default function AllPhotosSlide() {
  const { setCategory, indexPhoto } = useContext(CategoryContext);

  const {
    toggleChosedImage,
    chosedImage,
    allPhotosVisible,
    setOpenGrid,
    currentProduct,
    setCurrentProduct,
    productImageUrl,
  } = useContext(ProductContext);

  const slideToNextPhoto = () => {
    toggleChosedImage(false);
    indexPhoto.current += 1;

    if (indexPhoto.current === mockProducts.length) {
      indexPhoto.current = 0;
    }
    setCategory(mockProducts[indexPhoto.current].categoryName);
    setCurrentProduct(mockProducts[indexPhoto.current]);
    const photoElement = document.getElementById(`photo-${indexPhoto.current}`);
    if (photoElement) {
      photoElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const slideToPreviusPhoto = () => {
    toggleChosedImage(false);
    indexPhoto.current -= 1;
    if (indexPhoto.current < 0) {
      indexPhoto.current = mockProducts.length - 1;
    }
    setCategory(mockProducts[indexPhoto.current].categoryName);
    setCurrentProduct(mockProducts[indexPhoto.current]);
    const photoElement = document.getElementById(`photo-${indexPhoto.current}`);
    if (photoElement) {
      photoElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  useEffect(() => {
    setCategory(mockProducts[indexPhoto.current].categoryName);
    setCurrentProduct(mockProducts[indexPhoto.current]);
    setOpenGrid(currentProduct.openGrid);
    const photoElement = document.getElementById(`photo-${indexPhoto.current}`);
    if (photoElement) {
      photoElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [indexPhoto.current]);

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
