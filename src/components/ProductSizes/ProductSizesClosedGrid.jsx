import { useContext, useEffect } from 'react';
import { ProductContext } from '../../context/product-context';
import SizeCardClosed from './SizeCardClosed';
import * as S from './style';

export default function ProductSizesClosedGrid() {
  const { currentProduct, setCurrentPack } = useContext(ProductContext);

  const { sizes } = currentProduct;

  // Pega cada tamanho do produto e suas quantidades

  const sizesName = Object.keys(sizes);
  const sizesValues = Object.values(sizes);

  // Calcula o a quantidade de produtos por pack

  const totalPack = sizesValues.reduce((acc, cur) => cur.quantity + acc, 0);

  useEffect(() => {
    // Quando a quantidade mudar seta a nova quantidade

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
