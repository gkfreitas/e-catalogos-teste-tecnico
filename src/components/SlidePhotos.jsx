import { useContext } from 'react';
import { ProductContext } from '../context/product-context';
import AllPhotos from './AllPhotos';
import AllPhotosSlide from './AllPhotosSlider';

export default function SlidePhotos() {
  const { allPhotosVisible } = useContext(ProductContext);
  return (
    <main className="w-[390px] h-[490px] overflow-hidden ">
      <div>
        {allPhotosVisible ? <AllPhotos /> : <AllPhotosSlide />}
      </div>
    </main>
  );
}
