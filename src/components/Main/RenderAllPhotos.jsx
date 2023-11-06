import { mockProducts } from '../../mock/produtosMOCK';
import * as S from './styles';

export default function RenderAllPhotos() {
  const photos = mockProducts.map((product) => product.images[0]);

  return photos.map((photo, i) => (
    <S.ChosedImage
      id={ `photo-${i}` }
      src={ photo.url }
      alt="foto"
      key={ `${photo}-${i}` }
    />
  ));
}
