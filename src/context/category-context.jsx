import { createContext, useContext, useEffect, useState } from 'react';
import { mockProducts } from '../mock/produtosMOCK';
import { ProductContext } from './product-context';

export const CategoryContext = createContext({});

export default function CategoryContextProvider({ children }) {
  const { toggleChosedImage, indexPhoto, setIndexPhoto } = useContext(ProductContext);
  const [category, setCategory] = useState('');
  const [filteredProducts, setFiltedProducts] = useState([]);

  // Pega todas os nomes de categorias da base de dados e tira as repetições

  const categories = [...new Set(mockProducts.map((product) => product.categoryName))];

  useEffect(() => {
    // Toda vez que a categoria mudar é feito um filtro para a categoria escolhidas

    const setFilter = (categoryName) => {
      const filtered = mockProducts
        .filter((product) => product.categoryName === categoryName);
      setFiltedProducts(filtered);
    };
    setFilter(category);
  }, [category]);

  useEffect(() => {
    // Toda vez que o index da foto mudar a categoria é setada de acordo com o produto

    setCategory(mockProducts[indexPhoto].categoryName);
  }, [indexPhoto]);

  // Producura o primeiro produto referente a categoria

  const findFirstProductOfCategory = (categoryName) => {
    const foundedProduct = mockProducts
      .find((product) => product.categoryName === categoryName);
    const indexOfFirstProductOfCategory = mockProducts
      .indexOf(foundedProduct);
    setIndexPhoto(indexOfFirstProductOfCategory);
  };

  // Função para voltar categoria

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

  // Função para ir para a proxima categoria

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
