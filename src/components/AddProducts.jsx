import { useContext, useEffect } from 'react';
import { CategoryContext } from '../context/category-context';
import { ProductContext } from '../context/product-context';
import ButtonAddProduct from './ButtonAddProduct';

export default function AddProducts() {
  const {
    currentRefQuantity,
    accumulatedRefQuantity,
    currentPrice,
    accumulatedPrice,
    currentPack,
    setCurrentRefQuantity } = useContext(ProductContext);

  const { indexPhoto } = useContext(CategoryContext);

  const currentPriceNumber = ((currentPrice * currentRefQuantity) * currentPack)
    .toFixed(2);

  useEffect(() => {
    setCurrentRefQuantity(0);
  }, [indexPhoto.current]);
  return (
    <section className="bg-[#1CBFD8] py-[5px]">
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
            {`${currentRefQuantity} REF. ${currentPriceNumber}`}

          </p>
        </div>
        <ButtonAddProduct />
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
            {`${accumulatedRefQuantity} REF. ${accumulatedPrice.toFixed(2)}`}
          </p>
        </div>
      </div>
    </section>
  );
}
