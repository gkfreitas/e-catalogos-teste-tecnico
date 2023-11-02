import { createContext, useState } from 'react';

export const ProductContext = createContext({});

export default function ProductContextProvider({ children }) {
  const [visibleInfoCard, toggleInfoCard] = useState(false);
  const [chosedImage, toggleChosedImage] = useState(false);
  const [productImageUrl, setProductImageUrl] = useState('');
  const [allPhotosVisible, setAllPhotosVisible] = useState(false);
  const [currentRefQuantity, setCurrentRefQuantity] = useState(0);
  const [accumulatedRefQuantity, setAccumulatedRefQuantity] = useState(0);
  const [currentPack, setCurrentPack] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);
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
        currentRefQuantity,
        setCurrentRefQuantity,
        accumulatedRefQuantity,
        setAccumulatedRefQuantity,
        currentPack,
        setCurrentPack,
        setCurrentPrice,
        currentPrice,
        accumulatedPrice,
        setAccumulatedPrice,
      } }
    >
      {children}
    </ProductContext.Provider>
  );
}
