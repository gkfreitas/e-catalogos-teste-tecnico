import { useContext } from 'react';
import { CategoryContext } from '../context/category-context';
import SizeCardOpen from './SizeCardOpen';

export default function ProductSizesOpenGrid() {
  const { actualProduct } = useContext(CategoryContext);
  const { sizes } = actualProduct;

  const sizesName = Object.keys(sizes);
  const sizesValues = Object.values(sizes);

  return (
    <div className="flex mx-[20px] justify-center items-end mt-[12px]">
      {sizesValues.map((size, i) => (
        <SizeCardOpen
          quantity={ size.quantity }
          size={ sizesName[i] }
          stock={ size.stock }
          key={ `${size}-${i}` }
        />
      ))}
    </div>
  );
}
