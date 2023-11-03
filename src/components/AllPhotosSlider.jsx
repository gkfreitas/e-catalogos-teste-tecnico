import { useContext, useEffect } from 'react';
import arrow from '../../public/icons/right-arrow.svg';
import { CategoryContext } from '../context/category-context';
import { ProductContext } from '../context/product-context';
import { mockProducts } from '../mock/produtosMOCK';
import ChosedImage from './ChosedImage';
import RenderAllPhotos from './RenderAllPhotos';

export default function AllPhotosSlide() {
  const {
    setCategory,
    setActualProduct,
    actualProduct,
    indexPhoto,
  } = useContext(CategoryContext);

  const {
    toggleChosedImage,
    chosedImage,
    allPhotosVisible,
    setOpenGrid,
  } = useContext(ProductContext);

  const slideToNextPhoto = () => {
    toggleChosedImage(false);
    indexPhoto.current += 1;

    if (indexPhoto.current === mockProducts.length) {
      indexPhoto.current = 0;
    }
    setCategory(mockProducts[indexPhoto.current].categoryName);
    setActualProduct(mockProducts[indexPhoto.current]);
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
    setActualProduct(mockProducts[indexPhoto.current]);
    const photoElement = document.getElementById(`photo-${indexPhoto.current}`);
    if (photoElement) {
      photoElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  useEffect(() => {
    setCategory(mockProducts[indexPhoto.current].categoryName);
    setActualProduct(mockProducts[indexPhoto.current]);
    setOpenGrid(actualProduct.openGrid);
    const photoElement = document.getElementById(`photo-${indexPhoto.current}`);
    if (photoElement) {
      photoElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [indexPhoto.current]);

  return (
    <div className="relative">
      <div
        className="flex flex-nowrap overflow-hidden"
        style={ {
          boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
          borderRadius: '0px 0px 10px 10px',
        } }
      >
        {chosedImage && !allPhotosVisible ? <ChosedImage /> : <RenderAllPhotos />}

        <img
          role="presentation"
          onClick={ slideToPreviusPhoto }
          src={ arrow }
          alt="Flecha para esquerda"
          className="rotate-180 absolute bottom-[20px] left-[20px] cursor-pointer"
        />
        <img
          role="presentation"
          onClick={ slideToNextPhoto }
          src={ arrow }
          alt="Flecha para direita"
          className="absolute bottom-[20px] right-[20px] cursor-pointer"
        />
      </div>
    </div>
  );
}
