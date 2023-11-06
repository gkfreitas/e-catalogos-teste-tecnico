import { useContext, useEffect } from 'react';
import { ProductContext } from '../context/product-context';

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
    <div className="mr-[20px]">
      {verifyUnic && <div>UNICO</div>}
      <button onClick={ () => setCurrentSize(size) }>
        <div
          className="px-[8px] border-[#055663] relative text-center }"
          style={ {
            border: '0.2px solid #055663',
            borderRadius: '5px',
            backgroundColor: `${size === currentSize
              ? '#7aedff' : '#BBF6FF'}`,
          } }
        >
          <h1
            style={ {
              color: '#000',
              fontFamily: 'Roboto',
              fontSize: '40px',
              fontStyle: 'normal',
              lineHeight: 'normal',
              fontWeight: '500',
            } }
          >
            {currentSizeSave[id] ? currentSizeSave[id][size] : 0 }
          </h1>
          {verifyUnic ? '' : (
            <>
              <div className="absolute -top-2 -right-2">
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
                    {size.toUpperCase()}
                  </text>
                </svg>
              </div>
              <div className="absolute -top-2 -left-2">
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
              </div>
            </>
          )}
        </div>
      </button>
    </div>
  );
}
