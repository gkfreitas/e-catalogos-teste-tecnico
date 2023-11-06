import { useContext } from 'react';
import arrowLeft from '../../../public/icons/back.svg';
import arrowRight from '../../../public/icons/icon-arrow-back-ios.svg';
import { CategoryContext } from '../../context/category-context';
import * as S from './styles';

export default function Header() {
  const { category,
    filteredProducts,
    backCategory,
    nextCategory,
  } = useContext(CategoryContext);

  const quantity = filteredProducts.length;

  return (

    <S.HeaderContainer>
      <S.LeftSection className="flex items-center">
        <S.ArrowIcon
          src={ arrowLeft }
          alt="Flecha para esquerda"
          className="w-[30px] h-[30px]"
        />
        <S.CategoryName
          className="uppercase ml-[24px]"
          style={ {
            color: '#001A1E',
            fontFamily: 'Roboto',
            fontSize: '18px',
            fontWeight: '500',
          } }
        >
          {`${category} (${quantity})`}

        </S.CategoryName>
      </S.LeftSection>
      <S.RightSection className="flex items-center">
        <S.ArrowIcon
          role="presentation"
          src={ arrowLeft }
          onClick={ backCategory }
          alt="Flecha para esquerda"
          className="w-[30px] h-[30px]"
        />
        <S.CategoryButton
          className="mx-[4px] p-[5px] uppercase bg-[#12A1B8] rounded-[5px]"
          style={ {
            color: '#001A1E',
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontWeight: '700',
          } }
        >
          Categoria
        </S.CategoryButton>
        <S.ArrowIcon
          role="presentation"
          src={ arrowRight }
          alt="Flecha para Direitas"
          className="w-[30px] h-[30px]"
          onClick={ nextCategory }
        />
      </S.RightSection>
    </S.HeaderContainer>
  );
}
