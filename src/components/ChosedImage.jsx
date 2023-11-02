import { useContext } from 'react';
import { ProductContext } from '../context/product-context';

export default function ChosedImage() {
  const { productImageUrl } = useContext(ProductContext);
  return (
    <img
      src={ productImageUrl }
      className="w-[390px] h-[490px] shrink-0"
      alt="foto"
    />
  );
}
