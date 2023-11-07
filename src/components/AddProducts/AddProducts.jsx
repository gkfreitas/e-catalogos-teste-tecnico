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
    // Transforma dos dados de current Product para se adequar aos dados de productsCart

    const sizesKeys = Object.keys(sizes);
    const sizesValues = Object.values(sizes);
    const sizesProduct = {};
    sizesKeys.forEach((size, i) => {
      sizesProduct[size] = sizesValues[i].quantity * multiple;
    });

    return sizesProduct;
  };

  const addProductCartCloseGrid = () => {
    // Adiciona Products ao carrinho se for grade fechada

    // Se o produto não estiver no carrinho ele é criado pela primeira vez

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

    // Adiciona os packs e multiplica as quantidades

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
    // Se o produto não existir no carrinho é impossivel tira-lo

    if (!productsCart[id]) return;

    // Remove 1 pack do produto do carrinho

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
    // Se nenhum tamanho estiver seleciona não é possivel adicionar o produto

    if (!currentSize) return;

    // Se o produto não estiver no carrinho ele é criado pela primeira vez

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

    // Se o produto existir é possivel adicionar de 1 em 1

    if (productsCart[id]) {
      // Se o estoque = a quantidade selecionada não é possivel adicionar mais

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
    // Se nenhum tamanho estiver seleciona não é possivel remover o produto

    if (!currentSize) return;

    // Se o produto não existir não é possivel remover

    if (!productsCart[id]) return;

    // Se eu a quantidade do tamanho for 0 não é possivel remover

    if (productsCart[id].sizes[currentSize] === 0) return;

    // Remove o produto do carrinho de 1 a 1

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
    // Redireciona para as funções certa caso seja ou não grade aberta

    if (isOpenGrid) {
      addProductCartOpenGrid();
    }
    if (!isOpenGrid) {
      addProductCartCloseGrid();
    }
  };

  const removeProduct = () => {
    // Se a quantidade atual do produto for 0 não é possivel remover

    if (currentRef === 0) return;

    // Redireciona para as funções certa caso seja ou não grade aberta

    if (isOpenGrid) {
      removeProductCartOpenGrid();
    }

    if (!isOpenGrid) {
      removeProductCartCloseGrid();
    }
  };

  useEffect(() => {
    // Se o produto existir procura seus dados e seta
    if (productsCart[id]) {
      const sizesValues = Object.values(productsCart[id].sizes);
      const calcCurrentRef = sizesValues.reduce((acc, cur) => cur + acc, 0);
      setCurrentRef(calcCurrentRef);
      setCurrentPrice(currentRef * price);
    }
  }, [productsCart, id, currentRef, price]);

  useEffect(() => {
    // Ao mudar de produto seta o o preço e quantidade atual em 0

    setCurrentRef(0);
    setCurrentPrice(0);

    // Ao mudar de produto reseta o tamanho selecionado

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
