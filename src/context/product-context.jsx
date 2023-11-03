import { createContext, useState } from 'react';
import { mockProducts } from '../mock/produtosMOCK';

export const ProductContext = createContext({});

export default function ProductContextProvider({ children }) {
  const initialProduct = mockProducts[0];
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
      } }
    >
      {children}
    </ProductContext.Provider>
  );
}
