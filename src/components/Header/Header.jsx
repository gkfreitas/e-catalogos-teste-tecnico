import { useContext } from 'react';
import { CategoryContext } from '../../context/category-context';
import arrowLeft from '../../icons/back.svg';
import arrowRight from '../../icons/icon-arrow-back-ios.svg';
import * as S from './styles';

export default function Header() {
  const { category,
    filteredProducts,
    backCategory,
    nextCategory,
  } = useContext(CategoryContext);

  // Pega a quantidade de protudos do catalogo selecionado

  const quantity = filteredProducts.length;

  return (

    <S.HeaderContainer>
      <S.LeftSection>
        <S.ArrowIcon
          src={ arrowLeft }
          alt="Flecha para esquerda"
        />
        <S.CategoryName>
          {`${category} (${quantity})`}
        </S.CategoryName>
      </S.LeftSection>
      <S.RightSection>
        <S.ArrowIcon
          role="presentation"
          src={ arrowLeft }
          onClick={ backCategory }
          alt="Flecha para esquerda"
        />
        <S.CategoryButton>
          Categoria
        </S.CategoryButton>
        <S.ArrowIcon
          role="presentation"
          src={ arrowRight }
          alt="Flecha para Direitas"
          onClick={ nextCategory }
        />
      </S.RightSection>
    </S.HeaderContainer>
  );
}
