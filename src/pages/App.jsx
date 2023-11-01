import { useState } from 'react';
import Header from '../components/Header';
import { mockProducts } from '../mock/produtosMOCK';

export default function App() {
  const [category, setCategory] = useState('oculos');

  const mockProductsFiltered = mockProducts
    .filter((product) => (product.categoryName === category));

  const { categoryName } = mockProductsFiltered;
  return (
    <div className="max-w-[390px] max-h-[844px] mx-auto">
      <Header category={ categoryName } />
    </div>
  );
}
