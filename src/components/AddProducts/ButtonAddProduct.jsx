import minusIcon from '../../../public/icons/minus-symbol.svg';
import plusIcon from '../../../public/icons/plus-symbol.svg';
import * as S from './style';

export default function ButtonAddProduct(props) {
  const { addProduct, removeProduct, quantity } = props;
  return (
    <S.ButtonBox>
      <button onClick={ removeProduct }>
        <img src={ minusIcon } alt="Icone de menos" />
      </button>
      <S.ProductQuantityText>
        {quantity}
      </S.ProductQuantityText>
      <button onClick={ () => addProduct() }>
        <img src={ plusIcon } alt="Icone de mais" />
      </button>
    </S.ButtonBox>
  );
}
