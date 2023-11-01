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

  const backCategory = () => {
    const categoryIndex = categories.indexOf(category);
    if (categoryIndex === 0) return setCategory(categories[categories.length - 1]);
    setCategory(categories[categoryIndex - 1]);
  };

  const nextCategory = () => {
    const categoryIndex = categories.indexOf(category);
    if (categoryIndex === categories.length - 1) return setCategory(categories[0]);
    setCategory(categories[categoryIndex + 1]);
  };

  return (

    <CategoryContext.Provider
      value={ {
        filteredProducts,
        category,
        setCategory,
        categories,
        backCategory,
        nextCategory,
      } }
    >
      {children}
    </CategoryContext.Provider>
  );
}
