import { useContext } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { CategoryContext } from '../../context/category-context';
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
        <AiOutlineLeft
          cursor="pointer"
          size={ 24 }
        />
        <S.CategoryName>
          {`${category} (${quantity})`}
        </S.CategoryName>
      </S.LeftSection>
      <S.RightSection>
        <AiOutlineLeft
          cursor="pointer"
          size={ 26 }
          onClick={ backCategory }
        />
        <S.CategoryButton>
          Categoria
        </S.CategoryButton>
        <AiOutlineRight
          cursor="pointer"
          size={ 26 }
          onClick={ nextCategory }
        />
      </S.RightSection>
    </S.HeaderContainer>
  );
}
