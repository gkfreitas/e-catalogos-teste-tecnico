import { useContext } from 'react';
import { ProductContext } from '../../context/product-context';
import * as S from './style';

export default function ProductBasicInfos() {
  const { currentProduct } = useContext(ProductContext);
  const { reference, price, nome: name } = currentProduct;

  // Função para transformas as primeiras letras de cada palavra em maiuscula

  function capitalizeFirstLetterOfEachWord(inputString) {
    // Separa cada palavra e coloca em um array

    const words = inputString.split(' ');

    // Deixa em maisuculo a primeira letra da palavra

    const capitalizedWords = words.map((word) => {
      if (word.length > 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word;
    });

    // Retorna a frase completa

    const result = capitalizedWords.join(' ');
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
        {capitalizeFirstLetterOfEachWord(name)}
      </S.ProductNameContainer>
    </section>
  );
}
