export default function SizeCard(props) {
  const { quantity, size, isPack } = props;

  const verifyUnic = size === 'unico';

  return (
    <div className="mr-[8px]">
      {verifyUnic && <div>UNICO</div>}
      <div
        className="px-[8px] border-[#055663] relative text-center"
        style={ {
          border: '0.2px solid #055663',
          background: '#BBF6FF',
          borderRadius: '5px',
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
          {quantity}
        </h1>
        {isPack || verifyUnic ? '' : (
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
          </div>)}
      </div>
    </div>
  );
}
