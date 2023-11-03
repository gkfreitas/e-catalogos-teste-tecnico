import { useContext } from 'react';
import closeIcon from '../../public/icons/close-icon.svg';
import { ProductContext } from '../context/product-context';

export default function InfoCard(props) {
  const { toggleInfoCard, visibleInfoCard } = useContext(ProductContext);
  const { name, description, tecInfo, deliveryTime } = props;
  return (
    <>
      <section
        className={ ` ${visibleInfoCard ? 'w-[370px] h-[600px]' : 'w-0 h-0'} 
        mx-[10px] absolute top-[100px]
    bg-white rounded-[10px] z-10 duration-200` }
      >
        <header
          className="py-[15px] bg-blue-300 text-center "
        >
          <h1
            className={ `mx-auto align-middle ${visibleInfoCard ? 'block' : 'hidden'}` }
            style={ {
              color: '#001A1E',
              fontFamily: 'Roboto',
              fontSize: '24px',
              fontWeight: '500',
            } }
          >
            Informações
          </h1>
          <button
            onKeyDown={ () => toggleInfoCard(false) }
            onClick={ () => toggleInfoCard(false) }
            tabIndex="0"
            className="inline w-[30px] absolute right-[4px] top-[4px] cursor-pointer"
          >
            <img
              src={ closeIcon }
              alt="Icone para fechar informações"
              className={ `${visibleInfoCard ? 'block' : 'hidden'}` }
            />
          </button>
        </header>
        <div
          className={ `flex flex-col px-[20px] py-[20px] 
          ${visibleInfoCard ? 'block' : 'hidden'}` }
          style={ {
            color: '#1E1E1E',
            fontFamily: 'Roboto',
            fontSize: '18px',
            fontStyle: 'normal',
          } }
        >
          <p className="font-bold mb-2">
            Nome do produto:
            {' '}
            <span className=" font-normal mb-2">{name}</span>
          </p>
          <p className="font-bold mb-2">
            Descrição:
            {' '}
            <span className=" font-normal">{description}</span>
          </p>
          <p className="font-bold mb-2">
            Informação técnica:
            {' '}
            <span className=" font-normal ">{tecInfo}</span>
          </p>
          <p className="font-bold">
            Prazo de entrega:
            {' '}
            <span className=" font-normal">{deliveryTime}</span>
          </p>
        </div>
      </section>
      {visibleInfoCard
        ? <div className="bg-black/30 absolute h-screen w-screen top-0 left-0" /> : ''}
    </>
  );
}
