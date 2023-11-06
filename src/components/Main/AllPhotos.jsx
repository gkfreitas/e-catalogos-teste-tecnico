import { useContext } from 'react';
import { CategoryContext } from '../../context/category-context';
import { ProductContext } from '../../context/product-context';
import { mockProducts } from '../../mock/produtosMOCK';
import * as S from './styles';

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
    <S.GalleryPhotos>
      {photos.map((photo, i) => (
        <S.ProductCard
          role="presentation"
          onClick={ () => findProductByPhoto(photo) }
          key={ `${photo}-${i}` }
        >
          <S.PriceCard>{`R$ ${filteredProducts[i].price}`}</S.PriceCard>
          <S.ImageCard id={ `photo-${i}` } src={ photo.url } alt="foto" />
        </S.ProductCard>
      ))}
    </S.GalleryPhotos>
  );
}
