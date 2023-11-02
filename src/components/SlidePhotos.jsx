import { useContext, useEffect } from 'react';
import arrow from '../../public/icons/right-arrow.svg';
import { CategoryContext } from '../context/category-context';
import { mockProducts } from '../mock/produtosMOCK';

export default function SlidePhotos() {
  const {
    category,
    setCategory,
    setActualProduct,
    indexPhoto,
  } = useContext(CategoryContext);

  const slideToNextPhoto = () => {
    indexPhoto.current += 1;
    if (indexPhoto.current === mockProducts.length) {
      indexPhoto.current = 0;
    }
    const photoElement = document.getElementById(`photo-${indexPhoto.current}`);
    photoElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setActualProduct(mockProducts[indexPhoto.current].categoryName);
    setCategory(mockProducts[indexPhoto.current].categoryName);
  };

  const slideToPreviusPhoto = () => {
    indexPhoto.current -= 1;
    if (indexPhoto.current < 0) {
      indexPhoto.current = mockProducts.length - 1;
    }
    const photoElement = document.getElementById(`photo-${indexPhoto.current}`);
    photoElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setActualProduct(mockProducts[indexPhoto.current]);
    setCategory(mockProducts[indexPhoto.current].categoryName);
  };

  useEffect(() => {
    // Ir para a primeira foto

  }, [category]);

  const photos = mockProducts.map((product) => product.images[0]);

  return (
    <main className="w-[390px] h-[490px] ">
      <div className="relative">
        <div
          className="flex flex-nowrap overflow-auto"
          style={ {
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
            borderRadius: '0px 0px 10px 10px',
          } }
        >
          {photos.map((photo, i) => (

            <img
              id={ `photo-${i}` }
              className="w-[390px] h-[490px] shrink-0"
              src={ photo.url }
              alt="foto"
              key={ `${photo}-${i}` }
            />
          ))}
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
    </main>
  );
}
