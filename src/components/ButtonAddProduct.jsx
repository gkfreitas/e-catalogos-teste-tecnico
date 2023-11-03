import minusIcon from '../../public/icons/minus-symbol.svg';
import plusIcon from '../../public/icons/plus-symbol.svg';

export default function ButtonAddProduct(props) {
  const { addProduct } = props;
  return (
    <div
      className="flex justify-between bg-[#12A1B8] rounded-[8px]
    px-[8px] py-[4px] items-center"
    >
      <button>
        <img src={ minusIcon } alt="Icone de menos" />
      </button>
      <h1
        className="mx-[12px]"
        style={ {
          color: '#F9F8F8',
          fontFamily: 'Roboto',
          fontSize: '24px',
          fontStyle: 'normal',
          fontWeight: '500',
        } }
      >
        {}
      </h1>
      <button onClick={ () => addProduct() }>
        <img
          src={ plusIcon }
          alt="Icone de mais"
        />
      </button>
    </div>
  );
}
