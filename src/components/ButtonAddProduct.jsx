import { useContext } from 'react';
import minusIcon from '../../public/icons/minus-symbol.svg';
import plusIcon from '../../public/icons/plus-symbol.svg';
import { ProductContext } from '../context/product-context';

export default function ButtonAddProduct() {
  const {
    currentRefQuantity,
    setCurrentRefQuantity,
    setAccumulatedRefQuantity,
    setAccumulatedPrice,
    currentPrice,
    currentPack } = useContext(ProductContext);

  const addProduct = () => {
    setCurrentRefQuantity((prevState) => prevState + 1);
    setAccumulatedRefQuantity((prevState) => prevState + currentPack);
    const totalPrice = currentPrice * currentPack;
    setAccumulatedPrice((prevState) => prevState + totalPrice);
  };

  const removeProduct = () => {
    setCurrentRefQuantity((prevState) => prevState - 1);
    setAccumulatedRefQuantity((prevState) => prevState - currentPack);
  };

  return (
    <div
      className="flex justify-between bg-[#12A1B8] rounded-[8px]
    px-[8px] py-[4px] items-center"
    >
      <button
        onClick={ removeProduct }
      >
        <img src={ minusIcon } alt="Icone de menos" />
      </button>
      <h1
        className="mx-[12px]"
        style={ {
          color: '#F9F8F8',
          fontFamily: 'Roboto',
          fontSize: '24px',
          fontStyle: 'normal',
          fontWeight: '500',
        } }
      >
        {currentRefQuantity}
      </h1>
      <button
        onClick={ addProduct }
      >
        <img
          src={ plusIcon }
          alt="Icone de mais"
        />
      </button>
    </div>
  );
}
