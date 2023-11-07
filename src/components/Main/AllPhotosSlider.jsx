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
    // Ao mudar de foto sai da foto escolhida

    toggleChosedImage(false);

    // Muda o index da foto para o proximo da lista

    setIndexPhoto((prevState) => prevState + 1);

    // Se for a ultima foto volta para a primeira

    if (indexPhoto === mockProducts.length - 1) {
      setIndexPhoto(0);
    }

    // Elemento da foto escolhida

    const photoElement = document.getElementById(`photo-${indexPhoto}`);

    // Se o elemento existir o scroll é feito para este elemento

    if (photoElement) {
      photoElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const slideToPreviusPhoto = () => {
    // Ao mudar de foto sai da foto escolhida

    toggleChosedImage(false);

    // Muda o index da foto para o item anterior da lista

    setIndexPhoto((prevState) => prevState - 1);

    // Se for a primeira foto volta para a ultima

    if (indexPhoto === 0) {
      setIndexPhoto(mockProducts.length - 1);
    }

    // Elemento da foto escolhida

    const photoElement = document.getElementById(`photo-${indexPhoto}`);

    // Se o elemento existir o scroll é feito para este elemento

    if (photoElement) {
      photoElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  useEffect(() => {
    // Sempre que o index mudar é feito o scroll independente se clicou ou não

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
