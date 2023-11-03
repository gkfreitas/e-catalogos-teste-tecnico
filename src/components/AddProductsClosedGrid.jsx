import { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../context/category-context';
import ButtonAddProduct from './ButtonAddProduct';

export default function AddProducts() {
  const { actualProduct } = useContext(CategoryContext);
  const { id, price } = actualProduct;
  const [currentRefSave, setCurrentRefSave] = useState({});
  const [currentPrice, setCurrentPrice] = useState(0);

  const addProduct = () => {
    setCurrentRefSave((prevState) => ({
      ...prevState,
      [id]: currentRefSave[id] + 1,
    }));
    const total = price * (currentRefSave[id] + 1);
    setCurrentPrice((total));
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
    <section className="bg-[#1CBFD8] py-[5px] absolute w-full bottom-0">
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
        <ButtonAddProduct
          addProduct={ addProduct }
        />
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
            {`${0} REF. ${0.00}`}
          </p>
        </div>
      </div>
    </section>
  );
}
