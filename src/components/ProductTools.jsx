import { useContext } from 'react';
import infoIcon from '../../public/icons/info.svg';
import searchIcon from '../../public/icons/search-icon.svg';
import shopIcon from '../../public/icons/shop-icon.svg';
import viewIcon from '../../public/icons/view-icon.svg';
import { CategoryContext } from '../context/category-context';
import { ProductContext } from '../context/product-context';
import InfoCard from './InfoCard';

export default function ProductTools() {
  const { actualProduct } = useContext(CategoryContext);
  const { images, nome, description, tecInfo, deliveryTime } = actualProduct;
  const { toggleInfoCard,
    productImageUrl,
    chosedImage,
    toggleChosedImage,
    setProductImageUrl } = useContext(ProductContext);

  console.log(chosedImage, productImageUrl);

  const enableAndShowImage = ({ target }) => {
    toggleChosedImage(true);
    setProductImageUrl(target.src);
  };

  return (
    <div
      className="py-[12px] border-b border-black"
    >
      <div className="mx-[20px] flex justify-between items-center">

        <div className="flex ">
          <img
            role="presentation"
            src={ infoIcon }
            onClick={ () => toggleInfoCard(true) }
            alt="Icone para informações"
            className="cursor-pointer mr-[8px]"
          />
          <img
            src={ searchIcon }
            alt="Icone de pesquisa"
            className="cursor-pointer mr-[8px]"
          />
        </div>
        {images.map((image, i) => (
          <div
            key={ `${image}-${i}` }
            className="w-[38px] h-[44px] rounded-[5px] shadow-lg shadow-black/20"

          >
            <img
              role="presentation"
              className=" object-contain w-full h-full"
              onClick={ (e) => enableAndShowImage(e) }
              src={ image.url }
              alt="Foto"
            />
          </div>
        ))}
        <div className="flex">
          <img
            src={ viewIcon }
            alt="Icone de um olho"
            className="cursor-pointer ml-[8px]"
          />
          <img
            src={ shopIcon }
            alt="Icone de um carrinho de compras"
            className="cursor-pointer ml-[8px]"
          />
        </div>
      </div>

      <InfoCard
        name={ nome }
        description={ description }
        tecInfo={ tecInfo }
        deliveryTime={ deliveryTime }
      />
    </div>
  );
}
