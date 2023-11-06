import { useContext } from 'react';
import { ProductContext } from '../../context/product-context';
import SizeCardOpen from './SizeCardOpen';
import * as S from './style';

export default function ProductSizesOpenGrid() {
  const { currentProduct } = useContext(ProductContext);
  const { sizes } = currentProduct;

  const sizesName = Object.keys(sizes);
  const sizesValues = Object.values(sizes);

  return (
    <S.SizesContainer>

      {sizesValues.map((size, i) => (
        <SizeCardOpen
          quantity={ size.quantity }
          size={ sizesName[i] }
          stock={ size.stock }
          key={ `${size}-${i}` }
        />
      ))}
    </S.SizesContainer>
  );
}
