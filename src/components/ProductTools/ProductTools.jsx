import { useContext } from 'react';
import {
  AiFillInfoCircle, AiOutlineEye, AiOutlineSearch,
  AiOutlineShoppingCart
} from 'react-icons/ai';
import { ProductContext } from '../../context/product-context';
import InfoCard from './InfoCard';
import * as S from './style';

export default function ProductTools() {
  const {
    currentProduct,
    toggleInfoCard,
    toggleChosedImage,
    setProductImageUrl,
    setAllPhotosVisible,
    allPhotosVisible,
  } = useContext(ProductContext);

  const { images, nome, description, tecInfo, deliveryTime } = currentProduct;

  // Ao clicar no produto muda a src do produto

  const enableAndShowImage = ({ target }) => {
    toggleChosedImage(true);
    setProductImageUrl(target.src);
  };

  return (
    <S.ToolsContainer
      className="py-[12px] border-b border-black"
    >
      {!allPhotosVisible
          && <AiFillInfoCircle
            size={ 32 }
            cursor="pointer"
            fill="#055663"
            onClick={ () => toggleInfoCard(true) }
          />}

      <AiOutlineSearch
        size={ 32 }
        cursor="pointer"
        fill="#055663"
      />
      {!allPhotosVisible && images.map((image, i) => (
        <S.ImageContainer
          key={ `${image}-${i}` }
        >
          <S.ImagePrewiew
            role="presentation"
            onClick={ (e) => enableAndShowImage(e) }
            src={ image.url }
            alt="Foto"
          />
        </S.ImageContainer>
      ))}

      <AiOutlineEye
        size={ 32 }
        cursor="pointer"
        fill="#055663"
        onClick={ () => setAllPhotosVisible(!allPhotosVisible) }
      />
      <a href="/order">
        <AiOutlineShoppingCart
          size={ 32 }
          cursor="pointer"
          fill="#055663"
        />
      </a>

      <InfoCard
        name={ nome }
        description={ description }
        tecInfo={ tecInfo }
        deliveryTime={ deliveryTime }
      />

    </S.ToolsContainer>
  );
}
