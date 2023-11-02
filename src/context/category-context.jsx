import { createContext, useEffect, useRef, useState } from 'react';
import { mockProducts } from '../mock/produtosMOCK';

export const CategoryContext = createContext({});

export default function CategoryContextProvider({ children }) {
  const initialCategory = mockProducts[0].categoryName;
  const initialProduct = mockProducts[0];
  const [category, setCategory] = useState(initialCategory);
  const [filteredProducts, setFiltedProducts] = useState([]);
  const [actualProduct, setActualProduct] = useState(initialProduct);

  const categories = [...new Set(mockProducts.map((product) => product.categoryName))];

  useEffect(() => {
    const setFilter = (categoryName) => {
      const filtered = mockProducts
        .filter((product) => product.categoryName === categoryName);
      setFiltedProducts(filtered);
      setActualProduct(filteredProducts[0]);
    };
    setFilter(category);
  }, [category]);

  const indexPhoto = useRef(0);
  const firstIndexProductOfCategory = useRef(0);

  const findFirstProductOfCategory = mockProducts
    .find((product) => product.categoryName === category);
  const indexOfFirstProductOfCategory = mockProducts
    .indexOf(findFirstProductOfCategory);
  firstIndexProductOfCategory.current = indexOfFirstProductOfCategory;

  const backCategory = () => {
    console.log('back');
    const categoryIndex = categories.indexOf(category);
    if (categoryIndex === 0) return setCategory(categories[categories.length - 1]);
    setCategory(categories[categoryIndex - 1]);
  };

  const nextCategory = () => {
    console.log('next');
    const categoryIndex = categories.indexOf(category);
    if (categoryIndex === categories.length - 1) return setCategory(categories[0]);
    setCategory(categories[categoryIndex + 1]);
    console.log(firstIndexProductOfCategory);
  };

  return (

    <CategoryContext.Provider
      value={ {
        firstIndexProductOfCategory,
        indexPhoto,
        filteredProducts,
        category,
        setCategory,
        categories,
        backCategory,
        nextCategory,
        actualProduct,
        setActualProduct,
      } }
    >
      {children}
    </CategoryContext.Provider>
  );
}
