import { createContext, useState } from 'react';

export const ProductContext = createContext({});

export default function ProductContextProvider({ children }) {
  const [visibleInfoCard, toggleInfoCard] = useState(false);
  const [chosedImage, toggleChosedImage] = useState(false);
  const [productImageUrl, setProductImageUrl] = useState('');

  return (
    <ProductContext.Provider
      value={ { visibleInfoCard,
        toggleInfoCard,
        productImageUrl,
        setProductImageUrl,
        toggleChosedImage,
        chosedImage,
      } }
    >
      {children}
    </ProductContext.Provider>
  );
}
