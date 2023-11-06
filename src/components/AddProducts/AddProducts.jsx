import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/product-context';
import ButtonAddProduct from './ButtonAddProduct';
import * as S from './style';

export default function AddProducts() {
  const {
    currentProduct,
    currentRefSave,
    accumulatedPrice,
    accumulatedRef,
    currentSize,
    productsCart,
    setProductsCart,
    isOpenGrid,
    setCurrentSize,
  } = useContext(ProductContext);

  const { id, price, images, nome: name, sizes } = currentProduct;
  const [currentPrice, setCurrentPrice] = useState(0);
  const [currentRef, setCurrentRef] = useState(0);

  const sizesTransformed = (multiple = 1) => {
    const sizesKeys = Object.keys(sizes);
    const sizesValues = Object.values(sizes);
    const sizesProduct = {};
    sizesKeys.forEach((size, i) => {
      console.log(size);
      sizesProduct[size] = sizesValues[i].quantity * multiple;
    });

    return sizesProduct;
  };

  const addProductCartCloseGrid = () => {
    if (!productsCart[id]) {
      return setProductsCart((prevState) => ({
        ...prevState,
        [id]: {
          image: images[0].url,
          name,
          price,
          sizes: sizesTransformed(),
          packs: 1,
        },
      }));
    }

    setProductsCart((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        sizes: sizesTransformed(productsCart[id].packs + 1),
        packs: productsCart[id].packs + 1,
      },
    }));
  };

  const removeProductCartCloseGrid = () => {
    if (!productsCart[id]) return;

    setProductsCart((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        sizes: sizesTransformed(productsCart[id].packs - 1),
        packs: productsCart[id].packs - 1,
      },
    }));
  };

  const addProductCartOpenGrid = () => {
    // Valor incial
    if (!currentSize) return;

    if (!productsCart[id]) {
      setProductsCart((prevState) => ({
        ...prevState,
        [id]: {
          image: images[0].url,
          name,
          price,
          sizes: {
            [currentSize]: 1,
          },
          packs: 1,
        },
      }));
    }

    if (productsCart[id]) {
      if (sizes[currentSize].stock === productsCart[id].sizes[currentSize]) return;

      setProductsCart((prevState) => ({
        ...prevState,
        [id]: {
          ...prevState[id],
          sizes: {
            ...prevState[id].sizes,
            [currentSize]: prevState[id].sizes[currentSize] + 1 || 1,
          },
        },
      }));
    }
  };

  const removeProductCartOpenGrid = () => {
    // Valor incial
    if (!currentSize) return;

    if (!productsCart[id]) return;

    if (productsCart[id].sizes[currentSize] === 0) return;

    setProductsCart((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        sizes: {
          ...prevState[id].sizes,
          [currentSize]: prevState[id].sizes[currentSize] - 1 || 0,
        },
      },
    }));
  };

  const addProduct = () => {
    if (isOpenGrid) {
      addProductCartOpenGrid();
    }
    if (!isOpenGrid) {
      addProductCartCloseGrid();
    }
  };

  const removeProduct = () => {
    if (!productsCart[id]) return;

    if (currentRef === 0) return;

    if (isOpenGrid) {
      removeProductCartOpenGrid();
    }

    if (!isOpenGrid) {
      removeProductCartCloseGrid();
    }
  };

  useEffect(() => {
    setCurrentRef(0);
    setCurrentPrice(0);
    if (productsCart[id]) {
      const sizesValues = Object.values(productsCart[id].sizes);
      const calcCurrentRef = sizesValues.reduce((acc, cur) => cur + acc, 0);
      setCurrentRef(calcCurrentRef);
      setCurrentPrice(currentRef * price);
    }
  }, [productsCart, id, currentRef, price]);

  useEffect(() => {
    setCurrentSize('');
  }, [setCurrentSize, id]);

  return (
    <S.AddProductsBox>
      <S.AddProcutsContainer>
        <div>
          <S.TextStyle>
            Atual
          </S.TextStyle>
          <S.TextStyle style={ { fontSize: '14px' } }>
            {`${currentRef} REF. ${currentPrice.toFixed(2)}`}
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
