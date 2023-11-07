import { useContext } from 'react';
import closeIcon from '../../../public/icons/close-icon.svg';
import { ProductContext } from '../../context/product-context';
import * as S from './style';

export default function InfoCard(props) {
  const { toggleInfoCard, visibleInfoCard } = useContext(ProductContext);
  const { name, description, tecInfo, deliveryTime } = props;
  // Tags para info dos produtos

  const productInfos = ['Nome do produto', 'Descrição',
    'Informações Técnicas', 'Prazo de entrega'];

  // Conteudo das informações do produto

  const productInfosContent = [name, description, tecInfo, deliveryTime];

  return (
    <>
      <S.InfoCardContainer
        style={ {
          width: visibleInfoCard ? '370px' : '0px',
          height: visibleInfoCard ? '600px' : '0px',
        } }
      >
        <S.InfoCardHeader
          className="py-[15px] bg-blue-300 text-center "
          style={ {
            display: visibleInfoCard ? 'block' : 'none',
          } }
        >
          <S.InfoCardHeaderTitle>
            Informações
          </S.InfoCardHeaderTitle>
          <S.ButtonCloseInfoCard
            onClick={ () => toggleInfoCard(false) }
          >
            <S.CloseIcon
              src={ closeIcon }
              alt="Icone para fechar informações"
            />
          </S.ButtonCloseInfoCard>
        </S.InfoCardHeader>
        <S.InfoProductContainer
          style={ {
            display: visibleInfoCard ? 'block' : 'none',
          } }
        >
          {productInfos.map((infoName, i) => (
            <S.ProductInfo key={ infoName }>
              {infoName}
              :
              {' '}
              <S.ProductInfoContent>{productInfosContent[i]}</S.ProductInfoContent>
            </S.ProductInfo>
          ))}
        </S.InfoProductContainer>
      </S.InfoCardContainer>
      {visibleInfoCard && <S.BlackBackground />}
    </>
  );
}
