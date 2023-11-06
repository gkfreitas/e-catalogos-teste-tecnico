import { createContext, useContext, useEffect, useState } from 'react';
import { mockProducts } from '../mock/produtosMOCK';
import { ProductContext } from './product-context';

export const CategoryContext = createContext({});

export default function CategoryContextProvider({ children }) {
  const { toggleChosedImage, indexPhoto, setIndexPhoto } = useContext(ProductContext);
  const [category, setCategory] = useState('');
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

  useEffect(() => {
    setCategory(mockProducts[indexPhoto].categoryName);
  }, [indexPhoto]);

  const findFirstProductOfCategory = (categoryName) => {
    const foundedProduct = mockProducts
      .find((product) => product.categoryName === categoryName);
    const indexOfFirstProductOfCategory = mockProducts
      .indexOf(foundedProduct);
    setIndexPhoto(indexOfFirstProductOfCategory);
  };

  const backCategory = () => {
    toggleChosedImage(false);
    const categoryIndex = categories.indexOf(category);
    let newCategory;

    if (categoryIndex === 0) {
      newCategory = categories[categories.length - 1];
    } else {
      newCategory = categories[categoryIndex - 1];
    }

    setCategory(newCategory);
    findFirstProductOfCategory(newCategory);
  };

  const nextCategory = () => {
    toggleChosedImage(false);
    const categoryIndex = categories.indexOf(category);
    let newCategory;

    if (categoryIndex === categories.length - 1) {
      // eslint-disable-next-line prefer-destructuring
      newCategory = categories[0];
    } else {
      newCategory = categories[categoryIndex + 1];
    }
    setCategory(newCategory);
    findFirstProductOfCategory(newCategory);
  };

  return (
    <CategoryContext.Provider
      value={ {
        indexPhoto,
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
