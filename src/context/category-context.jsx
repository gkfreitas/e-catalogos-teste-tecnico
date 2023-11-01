import { createContext, useEffect, useState } from 'react';
import { mockProducts } from '../mock/produtosMOCK';

export const CategoryContext = createContext({});

export default function CategoryContextProvider({ children }) {
  const initialCategory = mockProducts[0].categoryName;
  const [category, setCategory] = useState(initialCategory);
  const [filteredProducts, setFiltedProducts] = useState([]);
  const categories = [...new Set(mockProducts.map((product) => product.categoryName))];

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
        categories,
      } }
    >
      {children}
    </CategoryContext.Provider>
  );
}
