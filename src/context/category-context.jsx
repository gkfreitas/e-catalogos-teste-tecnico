import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { mockProducts } from '../mock/produtosMOCK';
import { ProductContext } from './product-context';

export const CategoryContext = createContext({});

export default function CategoryContextProvider({ children }) {
  const initialCategory = mockProducts[0].categoryName;
  const initialProduct = mockProducts[0];
  const [category, setCategory] = useState(initialCategory);
  const [filteredProducts, setFiltedProducts] = useState([]);
  const [actualProduct, setActualProduct] = useState(initialProduct);
  const indexPhoto = useRef(0);
  const categories = [...new Set(mockProducts.map((product) => product.categoryName))];

  const { toggleChosedImage } = useContext(ProductContext);

  useEffect(() => {
    const setFilter = (categoryName) => {
      const filtered = mockProducts
        .filter((product) => product.categoryName === categoryName);
      setFiltedProducts(filtered);
    };
    setFilter(category);
  }, [category, indexPhoto.current]);

  const findFirstProductOfCategory = (categoryName) => {
    const foundedProduct = mockProducts
      .find((product) => product.categoryName === categoryName);
    const indexOfFirstProductOfCategory = mockProducts
      .indexOf(foundedProduct);
    indexPhoto.current = indexOfFirstProductOfCategory;
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
        actualProduct,
        setActualProduct,
      } }
    >
      {children}
    </CategoryContext.Provider>
  );
}
