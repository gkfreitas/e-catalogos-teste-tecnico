import { createContext, useState } from 'react';

export const ProductContext = createContext({});

export default function ProductContextProvider({ children }) {
  const [visibleInfoCard, toggleInfoCard] = useState(false);
  const [chosedImage, toggleChosedImage] = useState(false);
  const [productImageUrl, setProductImageUrl] = useState('');
  const [allPhotosVisible, setAllPhotosVisible] = useState(false);
  const [isOpenGrid, setOpenGrid] = useState(0);
  const [currentSize, setCurrentSize] = useState('');
  const [currentRefSave, setCurrentRefSave] = useState({});

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
      } }
    >
      {children}
    </ProductContext.Provider>
  );
}
