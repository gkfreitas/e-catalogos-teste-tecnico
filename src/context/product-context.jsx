import { createContext, useEffect, useState } from 'react';
import { mockProducts } from '../mock/produtosMOCK';

export const ProductContext = createContext({});

export default function ProductContextProvider({ children }) {
  const initialProduct = mockProducts[0];
  const [indexPhoto, setIndexPhoto] = useState(0);
  const [currentProduct, setCurrentProduct] = useState(initialProduct);
  const [visibleInfoCard, toggleInfoCard] = useState(false);
  const [chosedImage, toggleChosedImage] = useState(false);
  const [productImageUrl, setProductImageUrl] = useState('');
  const [allPhotosVisible, setAllPhotosVisible] = useState(false);
  const [isOpenGrid, setOpenGrid] = useState(0);
  const [currentSize, setCurrentSize] = useState('');
  const [currentRefSave, setCurrentRefSave] = useState({});
  const [currentSizeSave, setCurrentSizeSave] = useState({});
  const [accumulatedRef, setAccumulatedRef] = useState(0);
  const [accumulatedPrice, setAccumulatedPrice] = useState(0);
  const [currentPack, setCurrentPack] = useState(1);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [productsCart, setProductsCart] = useState({});

  useEffect(() => {
    setCurrentProduct(mockProducts[indexPhoto]);
    setOpenGrid(currentProduct.openGrid);
  }, [currentProduct, indexPhoto, productsCart]);

  useEffect(() => {
    const totalRef = () => {
      const productsCartIds = Object.keys(productsCart);
      const products = productsCartIds.map((id) => {
        const values = productsCart[id].sizes;
        return { values, price: productsCart[id].price };
      });
      const productsValues = products.map((size) => {
        const values = Object.values(size.values).reduce((acc, cur) => cur + acc, 0);
        return { values, price: size.price };
      });
      const calcPrice = productsValues.map((value) => value.values * value.price);
      const calcTotalRefs = productsValues.map((value) => value.values);
      const totalRefs = calcTotalRefs.reduce((acc, cur) => cur + acc, 0);
      const totalPrice = calcPrice.reduce((acc, cur) => cur + acc, 0);
      setAccumulatedRef(totalRefs);
      setAccumulatedPrice(totalPrice);
    };
    totalRef();

    localStorage.setItem('productsCart', JSON.stringify(Object.values(productsCart)));
  }, [productsCart]);

  return (
    <ProductContext.Provider
      value={ {
        visibleInfoCard,
        toggleInfoCard,
        productImageUrl,
        setProductImageUrl,
        toggleChosedImage,
        chosedImage,
        allPhotosVisible,
        setAllPhotosVisible,
        isOpenGrid,
        setOpenGrid,
        currentSize,
        setCurrentSize,
        currentRefSave,
        setCurrentRefSave,
        accumulatedPrice,
        setAccumulatedPrice,
        accumulatedRef,
        setAccumulatedRef,
        currentSizeSave,
        setCurrentSizeSave,
        currentProduct,
        setCurrentProduct,
        currentPack,
        setCurrentPack,
        currentPrice,
        setCurrentPrice,
        indexPhoto,
        setIndexPhoto,
        setProductsCart,
        productsCart,
      } }
    >
      {children}
    </ProductContext.Provider>
  );
}
