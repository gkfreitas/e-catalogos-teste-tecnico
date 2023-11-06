import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/product-context';
import ButtonAddProduct from './ButtonAddProduct';
import * as S from './style';

export default function AddProducts() {
  const {
    currentProduct,
    currentRefSave,
    setCurrentRefSave,
    accumulatedPrice,
    setAccumulatedPrice,
    accumulatedRef,
    setAccumulatedRef,
    setCurrentSizeSave,
    currentSizeSave,
    currentSize,
    isOpenGrid,
  } = useContext(ProductContext);

  const { id, price } = currentProduct;
  const [currentPrice, setCurrentPrice] = useState(0);

  const addProduct = () => {
    if (isOpenGrid) {
      if (currentProduct.sizes[currentSize].stock <= currentSizeSave[id][currentSize]) {
        return;
      }
      return setCurrentSizeSave((prevState) => ({
        ...prevState,
        [id]: {
          ...prevState[id],
          [currentSize]: prevState[id][currentSize] + 1,
        },
      }));
    }
    setCurrentRefSave((prevState) => ({
      ...prevState,
      [id]: currentRefSave[id] + 1,
    }));

    const total = price * (currentRefSave[id] + 1);
    setCurrentPrice(total);
    setAccumulatedRef((prevState) => prevState + 1);
    setAccumulatedPrice((prevState) => prevState + price);
  };

  const removeProduct = () => {
    if (currentRefSave[id] === 0) return;
    setCurrentRefSave((prevState) => ({
      ...prevState,
      [id]: currentRefSave[id] - 1,
    }));
    const total = price * (currentRefSave[id] - 1);
    setCurrentPrice(total);
    setAccumulatedRef((prevState) => prevState - 1);
    setAccumulatedPrice((prevState) => prevState - price);
    if (isOpenGrid) {
      setCurrentSizeSave((prevState) => ({
        ...prevState,
        [id]: {
          ...prevState[id],
          [currentSize]: prevState[id][currentSize] - 1,
        },
      }));
    }
  };

  useEffect(() => {
    setCurrentRefSave((prevState) => ({
      ...prevState,
      [id]: currentRefSave[id] || 0,
    }));

    const total = price * currentRefSave[id] || 0;

    setCurrentPrice(total);
  }, [id]);

  return (
    <S.AddProductsBox>
      <S.AddProcutsContainer>
        <div>
          <S.TextStyle>
            Atual
          </S.TextStyle>
          <S.TextStyle style={ { fontSize: '14px' } }>
            {`${currentRefSave[id]} REF. ${currentPrice.toFixed(2)}`}
          </S.TextStyle>
        </div>
        <ButtonAddProduct
          addProduct={ addProduct }
          removeProduct={ removeProduct }
          quantity={ currentRefSave[id] }
        />
        <div>
          <S.TextStyle>
            Acumulado
          </S.TextStyle>
          <S.TextStyle style={ { fontSize: '14px' } }>
            {`${accumulatedRef} REF. ${accumulatedPrice.toFixed(2)}`}
          </S.TextStyle>
        </div>
      </S.AddProcutsContainer>
    </S.AddProductsBox>
  );
}
