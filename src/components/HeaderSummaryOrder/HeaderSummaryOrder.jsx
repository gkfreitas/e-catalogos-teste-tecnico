import arrowLeft from '../../icons/back.svg';
import * as S from './style';

export default function HeaderSummaryOrder() {
  return (
    <S.HeaderContainer>
      <a href="/">
        <S.ArrowIcon src={ arrowLeft } alt="Flecha para esquerda" />
      </a>
      <S.HeaderTitle>
        Pedido
      </S.HeaderTitle>
    </S.HeaderContainer>
  );
}
