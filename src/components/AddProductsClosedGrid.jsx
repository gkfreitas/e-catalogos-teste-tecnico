import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../context/product-context';
import ButtonAddProduct from './ButtonAddProduct';

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
      setCurrentSizeSave((prevState) => ({
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
    <section className="bg-[#1CBFD8] py-[5px] absolute w-[390px] bottom-0 left-0">
      <div
        className="mx-[20px] flex justify-between items-center
      "
      >
        <div className="text-center">
          <h1
            style={ {
              color: '#1E1E1E',
              fontFamily: 'Roboto',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: '500',
            } }
          >
            Atual
          </h1>
          <p
            style={ {
              color: '#000',
              fontFamily: 'Roboto',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: 'normal',
            } }
          >
            {`${currentRefSave[id]} REF. ${currentPrice.toFixed(2)}`}
          </p>
        </div>
        <ButtonAddProduct addProduct={ addProduct } removeProduct={ removeProduct } />
        <div className="text-center">
          <h1
            style={ {
              color: '#1E1E1E',
              fontFamily: 'Roboto',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: '500',
            } }
          >
            Acumulado
          </h1>
          <p
            style={ {
              color: '#000',
              fontFamily: 'Roboto',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: 'normal',
            } }
          >
            {`${accumulatedRef} REF. ${accumulatedPrice.toFixed(2)}`}
          </p>
        </div>
      </div>
    </section>
  );
}
