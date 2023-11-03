import { useContext } from 'react';
import { ProductContext } from '../context/product-context';
import SizeCardOpen from './SizeCardOpen';

export default function ProductSizesOpenGrid() {
  const { currentProduct, isOpenGrid } = useContext(ProductContext);
  const { sizes } = currentProduct;

  const sizesName = Object.keys(sizes);
  const sizesValues = Object.values(sizes);

  console.log(isOpenGrid);

  return (
    <div className="flex mx-[20px] justify-center items-end mt-[28px]">

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
