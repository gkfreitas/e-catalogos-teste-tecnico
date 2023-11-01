import { useContext, useEffect, useRef } from 'react';
import { CategoryContext } from '../context/category-context';

export default function SlidePhotos() {
  const { filteredProducts,
    category,
    setCategory,
    categories } = useContext(CategoryContext);
  const indexPhoto = useRef(0);

  const backCategory = () => {
    const categoryIndex = categories.indexOf(category);
    if (categoryIndex === 0) return setCategory(categories[categories.length - 1]);
    setCategory(categories[categoryIndex - 1]);
  };

  const nextCategory = () => {
    const categoryIndex = categories.indexOf(category);
    if (categoryIndex === categories.length - 1) return setCategory(categories[0]);
    setCategory(categories[categoryIndex + 1]);
  };

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
    if (filteredProducts.length) {
      const firstPhoto = document.getElementById('photo-0');
      firstPhoto.scrollIntoView({ behavior: 'instant' });
      indexPhoto.current = 0;
    }
  }, [category]);

  const photos = filteredProducts.map((product) => product.images[0]);

  return (
    <main className="w-[390px] h-[490px] ">
      <div className="flex flex-nowrap overflow-auto">
        {photos.map((photo, i) => (
          <img
            id={ `photo-${i}` }
            className="w-[390px] h-[490px] shrink-0"
            src={ photo.url }
            alt="foto"
            key={ `${photo}-${i}` }
          />
        ))}
      </div>
      <button
        onClick={ slideToPreviusPhoto }
        className="mt-[40px] text-black text-xl p-8"
      >
        Back

      </button>
      <button
        className="mt-[40px] text-black text-xl p-8 float-right"
        onClick={ slideToNextPhoto }
      >
        Next

      </button>
    </main>
  );
}
