import { useContext, useEffect } from 'react';
import { ProductContext } from '../../context/product-context';
import SizeCardClosed from './SizeCardClosed';
import * as S from './style';

export default function ProductSizesClosedGrid() {
  const { currentProduct, setCurrentPack } = useContext(ProductContext);

  const { sizes } = currentProduct;

  const sizesName = Object.keys(sizes);
  const sizesValues = Object.values(sizes);
  const totalPack = sizesValues.reduce((acc, cur) => cur.quantity + acc, 0);

  useEffect(() => {
    setCurrentPack(totalPack);
  }, [totalPack, setCurrentPack]);

  return (
    <S.SizesContainer>
      {sizesValues.map((size, i) => (
        <SizeCardClosed
          quantity={ size.quantity }
          size={ sizesName[i] }
          key={ `${size}-${i}` }
          isPack={ false }
        />
      ))}
      <S.EqualSymbol>
        =
      </S.EqualSymbol>
      <S.PackCard>
        Pack
        <SizeCardClosed quantity={ totalPack } isPack />
      </S.PackCard>
    </S.SizesContainer>
  );
}
