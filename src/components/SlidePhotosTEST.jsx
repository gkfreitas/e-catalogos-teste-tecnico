import { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../context/category-context';
import '../styles/portrait.css';
import '../styles/slide.css';

export default function SlidePhotos() {
  const {
    categories,
    setCategory,
    category,
    filteredProducts,
    setIndexPhoto,
    indexPhoto,
    setIndexPhoto
  } = useContext(CategoryContext);

  
  const [loadedImage, setLoadedImage] = useState(false);
  // const [isPortrait, setIsPortrait] = useState(false);
  const [mainPhotos, setMainPhotos] = useState([]);

  const photos = filteredProducts.map((product) => product.images[0]);

  const backCategory = () => {
    const categoryIndex = categories.indexOf(category);
    if (categoryIndex === 0) return setCategory(categories[categories.length - 1]);
    setCategory(categories[categoryIndex - 1]);
  };

  const nextCategory = () => {
    const categoryIndex = categories.indexOf(category);
    if (categoryIndex === categories.length - 1) return setCategory(categories[0]);
    setCategory(categories[categoryIndex + 1]);
    setIndexPhoto(0);
    setMainPhotos(photos);
    const element = document.querySelector('#photo-0');
    element.scrollIntoView({ behavior: 'instant', block: 'center' });
  };

  const slideToNextPhoto = () => {
    setIndexPhoto(indexPhoto + 1);
    if (indexPhoto + 1 === filteredProducts.length) return nextCategory();
    const element = document.querySelector(`#photo-${indexPhoto + 1}`);
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const slideToPreviusPhoto = () => {
    setIndexPhoto(indexPhoto - 1);
    const element = document.querySelector(`#photo-${indexPhoto - 1}`);
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  useEffect(() => {
    // Verifica se o img pode ser renderizado e se ele é retrato ou paisagem
    setMainPhotos(photos);
    console.log(indexPhoto);
  }, [category, filteredProducts]);

  return (
    <main className="w-[390px] h-[490px] p-[4px] duration-300 container ">
      <button
        className="px-4"
        onClick={ () => slideToPreviusPhoto() }
      >
        Left
      </button>
      <button className="px-4" onClick={ () => slideToNextPhoto() }>Right</button>
      <div className="gallery-wrapper">
        <div className="gallery flex justify-center items-center">
          {mainPhotos.map((photo, i) => (
            <img
              id={ `photo-${i}` }
              className="item current-item object-contain h-full"
              key={ `${photo}-${i}` }
              src={ photo.url }
              alt="Foto retrato"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
