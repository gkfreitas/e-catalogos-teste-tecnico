import * as S from './style';

export default function SizeCard(props) {
  const { quantity, size, isPack } = props;

  const verifyUnic = size === 'unico';

  return (
    <div>
      {verifyUnic && <div>UNICO</div>}
      <S.CardContainer>
        <S.QuantitySize>
          {quantity}
        </S.QuantitySize>
        {isPack || verifyUnic ? '' : (
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
          </S.SizeBall>)}
      </S.CardContainer>
    </div>
  );
}
