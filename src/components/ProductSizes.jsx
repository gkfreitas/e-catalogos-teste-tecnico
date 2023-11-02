import { useContext, useEffect } from 'react';
import { CategoryContext } from '../context/category-context';
import { ProductContext } from '../context/product-context';
import SizeCard from './SizeCard';

export default function ProductSizes() {
  const { actualProduct } = useContext(CategoryContext);
  const { setCurrentPack } = useContext(ProductContext);
  const { sizes } = actualProduct;
  const sizesName = Object.keys(sizes);
  const sizesValues = Object.values(sizes);
  const totalPack = sizesValues.reduce((acc, cur) => cur.quantity + acc, 0);

  useEffect(() => {
    setCurrentPack(totalPack);
    console.log(totalPack);
  }, [totalPack]);

  return (
    <div className="flex mx-[20px] justify-center my-[8px] items-end">
      {sizesValues.map((size, i) => (
        <SizeCard
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
        <SizeCard quantity={ totalPack } isPack />
      </div>
    </div>
  );
}
