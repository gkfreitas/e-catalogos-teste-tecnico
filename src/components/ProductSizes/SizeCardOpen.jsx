import { useContext, useEffect } from 'react';
import { ProductContext } from '../../context/product-context';
import * as S from './style';

export default function SizeCardOpen(props) {
  const { size, stock } = props;

  const {
    currentSize,
    setCurrentSize,
    currentSizeSave,
    setCurrentSizeSave,
    currentProduct,
  } = useContext(ProductContext);

  const { id } = currentProduct;

  const verifyUnic = size === 'unico';

  const stockToReduce = currentSizeSave[id] ? currentSizeSave[id][size] : 0;

  useEffect(() => {
    if (!currentSizeSave[id]) {
      setCurrentSizeSave((prevState) => ({
        ...prevState,
        [id]: {
          ...prevState[id],
          [size]: 0,
        },
      }));
    }
  }, []);

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
            {currentSizeSave[id] ? currentSizeSave[id][size] : 0 }
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
                    {stock - stockToReduce }
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
