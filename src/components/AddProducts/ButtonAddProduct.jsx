import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import * as S from './style';

export default function ButtonAddProduct(props) {
  const { addProduct, removeProduct, quantity } = props;
  return (
    <S.ButtonBox>
      <button onClick={ removeProduct }>
        <AiFillMinusCircle
          size={ 35 }
          fill="#0B7788"
        />
      </button>
      <S.ProductQuantityText>
        {quantity}
      </S.ProductQuantityText>
      <button onClick={ () => addProduct() }>
        <AiFillPlusCircle
          size={ 35 }
          fill="#BBF6FF"
        />
      </button>
    </S.ButtonBox>
  );
}
