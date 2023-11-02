import { useContext } from 'react';
import { CategoryContext } from '../context/category-context';

export default function ProductTools() {
  const { filteredProducts, actualProduct } = useContext(CategoryContext);
  return (
    <div>ProductTools</div>
  );
}
