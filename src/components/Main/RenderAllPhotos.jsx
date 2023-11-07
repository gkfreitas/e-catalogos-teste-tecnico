import { mockProducts } from '../../mock/produtosMOCK';
import * as S from './styles';

export default function RenderAllPhotos() {
  // Pega a primeira foto das fotos de cada produto de todas as categorias

  const photos = mockProducts.map((product) => product.images[0]);

  // Renderiza todas as fotos

  return photos.map((photo, i) => (
    <S.ChosedImage
      id={ `photo-${i}` }
      src={ photo.url }
      alt="foto"
      key={ `${photo}-${i}` }
    />
  ));
}
