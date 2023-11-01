import { createContext, useEffect, useState } from 'react';
import { mockProducts } from '../mock/produtosMOCK';

export const CategoryContext = createContext({});

export default function CategoryContextProvider({ children }) {
  const [category, setCategory] = useState('oculos');
  const [filteredProducts, setFiltedProducts] = useState([]);

  useEffect(() => {
    const setFilter = (categoryName) => {
      const filtered = mockProducts
        .filter((product) => product.categoryName === categoryName);
      setFiltedProducts(filtered);
    };
    setFilter(category);
  }, [category]);

  return (

    <CategoryContext.Provider
      value={ {
        filteredProducts,
        category,
        setCategory,
      } }
    >
      {children}
    </CategoryContext.Provider>
  );
}
