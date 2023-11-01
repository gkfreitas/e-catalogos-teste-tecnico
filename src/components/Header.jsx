import { useContext } from 'react';
import arrowLeft from '../../public/icons/back.svg';
import arrowRight from '../../public/icons/icon-arrow-back-ios.svg';
import { CategoryContext } from '../context/category-context';

export default function Header() {
  const { category, filteredProducts,
    categories, setCategory } = useContext(CategoryContext);
  const quantity = filteredProducts.length;

  const backCategory = () => {
    const categoryIndex = categories.indexOf(category);
    if (categoryIndex === 0) return setCategory(categories[categories.length - 1]);
    setCategory(categories[categoryIndex - 1]);
  };

  const nextCategory = () => {
    const categoryIndex = categories.indexOf(category);
    if (categoryIndex === categories.length - 1) return setCategory(categories[0]);
    setCategory(categories[categoryIndex + 1]);
  };
  return (
    <header
      className="flex h-[46px] items-center
    bg-[#1CBFD8] px-[20px] rounded-b-[5px] justify-between"
    >
      <div className="flex items-center">
        <img
          src={ arrowLeft }
          alt="Flecha para esquerda"
          className="w-[30px] h-[30px]"
        />
        <h1
          className="uppercase ml-[24px]"
          style={ {
            color: '#001A1E',
            fontFamily: 'Roboto',
            fontSize: '18px',
            fontWeight: '500',
          } }
        >
          {`${category} (${quantity})`}

        </h1>
      </div>
      <div className="flex items-center">
        <img
          role="presentation"
          src={ arrowLeft }
          onClick={ () => backCategory() }
          alt="Flecha para esquerda"
          className="w-[30px] h-[30px]"
        />
        <div
          className="mx-[4px] p-[5px] uppercase bg-[#12A1B8] rounded-[5px]"
          style={ {
            color: '#001A1E',
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontWeight: '700',
          } }
        >
          Categoria
        </div>
        <img
          role="presentation"
          src={ arrowRight }
          alt="Flecha para Direitas"
          className="w-[30px] h-[30px]"
          onClick={ () => nextCategory() }
        />
      </div>
    </header>
  );
}
