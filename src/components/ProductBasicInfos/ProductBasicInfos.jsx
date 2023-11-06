import { useContext } from 'react';
import { ProductContext } from '../../context/product-context';
import * as S from './style';

export default function ProductBasicInfos() {
  const { currentProduct } = useContext(ProductContext);
  const { reference, price, nome: name } = currentProduct;

  function capitalizeFirstLetterOfEachSentence(inputString) {
    const sentences = inputString.split(' ');
    const capitalizedSentences = sentences.map((sentence) => {
      if (sentence.length > 0) {
        return sentence.charAt(0).toUpperCase() + sentence.slice(1);
      }
      return sentence;
    });
    const result = capitalizedSentences.join(' ');
    return result;
  }
  return (
    <section>
      <S.ProductBasicInfosContainer>
        <S.RefText>
          REF:
          {' '}
          <span style={ { color: '#000' } }>
            {reference}
          </span>
        </S.RefText>
        <S.PriceText>
          R$
          {' '}
          <span
            style={ {
              color: '#000',
              fontFamily: 'Roboto',
              fontSize: '24px',
              fontWeight: '500',
            } }
          >
            {price}
          </span>
        </S.PriceText>
      </S.ProductBasicInfosContainer>
      <S.ProductNameContainer>
        {capitalizeFirstLetterOfEachSentence(name)}
      </S.ProductNameContainer>
    </section>
  );
}
