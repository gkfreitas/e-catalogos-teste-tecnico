import { useContext } from 'react';
import infoIcon from '../../../public/icons/info.svg';
import searchIcon from '../../../public/icons/search-icon.svg';
import shopIcon from '../../../public/icons/shop-icon.svg';
import viewIcon from '../../../public/icons/view-icon.svg';
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
      {!allPhotosVisible && <S.ToolImage
        role="presentation"
        src={ infoIcon }
        onClick={ () => toggleInfoCard(true) }
        alt="Icone para informações"
      />}

      <S.ToolImage
        src={ searchIcon }
        alt="Icone de pesquisa"
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

      <S.ToolImage
        role="presentation"
        src={ viewIcon }
        alt="Icone de um olho"
        onClick={ () => setAllPhotosVisible(!allPhotosVisible) }
      />
      <a href="/order">
        <S.ToolImage
          src={ shopIcon }
          alt="Icone de um carrinho de compras"
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
