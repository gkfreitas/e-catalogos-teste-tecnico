import { useContext } from 'react';
import { CategoryContext } from '../context/category-context';
import { ProductContext } from '../context/product-context';
import { mockProducts } from '../mock/produtosMOCK';

export default function AllPhotos() {
  const { filteredProducts, indexPhoto } = useContext(CategoryContext);
  const { setAllPhotosVisible } = useContext(ProductContext);

  const photos = filteredProducts.map((product) => product.images[0]);

  const findProductByPhoto = (photo) => {
    const foundedProduct = mockProducts.find((product) => product.images[0] === photo);
    const indexOfThisProduct = mockProducts.indexOf(foundedProduct);
    indexPhoto.current = indexOfThisProduct;
    setAllPhotosVisible(false);
  };

  return (
    <div
      className="w-full h-full p-1"
      style={ {
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        borderRadius: '0px 0px 10px 10px',
      } }
    >
      <div
        className="grid gap-2 grid-cols-3 grid-flow-row"
      >
        {photos.map((photo, i) => (
          <div
            role="presentation"
            onClick={ () => findProductByPhoto(photo) }
            key={ `${photo}-${i}` }
            className=" w-full h-full border border-black text-center bg-slate-600
            text-white"
          >
            <div>{`R$ ${filteredProducts[i].price}`}</div>
            <img
              id={ `photo-${i}` }
              className=" object-contain"
              src={ photo.url }
              alt="foto"

            />
          </div>
        ))}
      </div>
    </div>
  );
}
