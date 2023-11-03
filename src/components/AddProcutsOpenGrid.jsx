import ButtonAddProduct from './ButtonAddProduct';

export default function AddProductsOpenGrid() {
  return (
    <section className="bg-[#1CBFD8] py-[5px] absolute w-[390px] bottom-0">
      <div
        className="mx-[20px] flex justify-between items-center
      "
      >
        <div className="text-center">
          <h1
            style={ {
              color: '#1E1E1E',
              fontFamily: 'Roboto',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: '500',
            } }
          >
            Atual

          </h1>
          <p
            style={ {
              color: '#000',
              fontFamily: 'Roboto',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: 'normal',
            } }
          >
            {`${0} REF. ${0}`}

          </p>
        </div>
        <ButtonAddProduct />
        <div className="text-center">
          <h1
            style={ {
              color: '#1E1E1E',
              fontFamily: 'Roboto',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: '500',
            } }
          >
            Acumulado

          </h1>
          <p
            style={ {
              color: '#000',
              fontFamily: 'Roboto',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: 'normal',
            } }
          >
            {`${0} REF. ${0}`}
          </p>
        </div>
      </div>
    </section>
  );
}
