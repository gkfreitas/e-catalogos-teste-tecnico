import { mockProducts } from '../mock/produtosMOCK';

export default function RenderAllPhotos() {
  const photos = mockProducts.map((product) => product.images[0]);

  return (
    photos.map((photo, i) => (
      <img
        id={ `photo-${i}` }
        className="w-[390px] h-[490px] shrink-0"
        src={ photo.url }
        alt="foto"
        key={ `${photo}-${i}` }
      />
    ))
  );
}
