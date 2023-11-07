import { useContext } from 'react';
import { ProductContext } from '../../context/product-context';
import * as S from './style';

export default function SizeCardOpen(props) {
  const { size, stock } = props;

  const {
    currentSize,
    setCurrentSize,
    currentProduct,
    productsCart,
  } = useContext(ProductContext);

  const { id } = currentProduct;

  // Verifica se o tamanho é unico se for o estilo é diferente

  const verifyUnic = size === 'unico';

  // Pega a quantidade adicionada e é usado para reduzir a quantidade do estoque

  const stockReduce = productsCart[id] ? productsCart[id].sizes[size] || 0 : 0;

  return (
    <>
      {verifyUnic && <div>UNICO</div>}
      <button onClick={ () => setCurrentSize(size) }>
        <S.CardContainer
          style={ {
            backgroundColor: `${size === currentSize
              ? '#1CBFD8' : '#BBF6FF'}`,
            marginRight: '20px',
          } }
        >
          <S.QuantitySize>
            {productsCart[id] ? productsCart[id].sizes[size] || 0 : 0 }
          </S.QuantitySize>
          {verifyUnic ? '' : (
            <>
              <S.SizeBall>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle
                    cx="10"
                    cy="10"
                    r="10"
                    fill="#89EEFE"
                    stroke="#055663"
                    strokeWidth="0.2"
                  />
                  <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="#000"
                    fontSize={ 12 }
                  >
                    {size.toUpperCase()}
                  </text>
                </svg>
              </S.SizeBall>
              <S.StockBall>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <circle
                    cx="10"
                    cy="10"
                    r="10"
                    fill="#89EEFE"
                    stroke="#055663"
                    strokeWidth="0.2"
                  />
                  <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="#000"
                    fontSize={ 12 }
                  >
                    {stock - stockReduce }
                  </text>
                </svg>
              </S.StockBall>
            </>
          )}
        </S.CardContainer>
      </button>
    </>
  );
}
