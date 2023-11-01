import { useContext, useEffect, useRef } from 'react';
import arrow from '../../public/icons/right-arrow.svg';
import { CategoryContext } from '../context/category-context';

export default function SlidePhotos() {
  const { filteredProducts,
    category,
    backCategory,
    nextCategory } = useContext(CategoryContext);
  const indexPhoto = useRef(0);

  const slideToNextPhoto = () => {
    indexPhoto.current += 1;
    if (indexPhoto.current === filteredProducts.length) return nextCategory();
    const photoElement = document.getElementById(`photo-${indexPhoto.current}`);
    photoElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const slideToPreviusPhoto = () => {
    indexPhoto.current -= 1;
    if (indexPhoto.current < 0) return backCategory();
    const photoElement = document.getElementById(`photo-${indexPhoto.current}`);
    photoElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  useEffect(() => {
    // Ir para a primeira foto
    console.log(indexPhoto.current);
    if (filteredProducts.length) {
      const firstPhoto = document.getElementById('photo-0');
      firstPhoto.scrollIntoView({ behavior: 'instant' });
      indexPhoto.current = 0;
    }
  }, [category]);

  const photos = filteredProducts.map((product) => product.images[0]);

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
