import arrowLeft from '../../../public/icons/back.svg';
import * as S from './style';

export default function HeaderSummaryOrder() {
  return (
    <S.HeaderContainer>
      <S.ArrowIcon src={ arrowLeft } alt="Flecha para esquerda" />
      <S.HeaderTitle>
        Pedido
      </S.HeaderTitle>
    </S.HeaderContainer>
  );
}
