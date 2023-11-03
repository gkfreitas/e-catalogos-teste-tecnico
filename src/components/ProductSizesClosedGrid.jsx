import { useContext } from 'react';
import { CategoryContext } from '../context/category-context';
import SizeCardClosed from './SizeCardClosed';

export default function ProductSizesClosedGrid() {
  const { actualProduct } = useContext(CategoryContext);
  const { sizes } = actualProduct;

  const sizesName = Object.keys(sizes);
  const sizesValues = Object.values(sizes);
  const totalPack = sizesValues.reduce((acc, cur) => cur.quantity + acc, 0);

  return (
    <div className="flex mx-[20px] justify-center items-end mt-[12px]">
      {sizesValues.map((size, i) => (
        <SizeCardClosed
          quantity={ size.quantity }
          size={ sizesName[i] }
          key={ `${size}-${i}` }
          isPack={ false }
        />
      ))}
      <span
        style={ {
          fontFamily: 'Inter',
          fontSize: '44px',
          fontStyle: 'normal',
          fontWeight: '400',
        } }
      >
        =
      </span>
      <div className="flex flex-col ml-[8px] items-center">
        <div className="uppercase">Pack</div>
        <SizeCardClosed quantity={ totalPack } isPack />
      </div>
    </div>
  );
}
