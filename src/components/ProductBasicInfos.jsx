import { useContext } from 'react';
import { CategoryContext } from '../context/category-context';

export default function ProductBasicInfos() {
  const { actualProduct } = useContext(CategoryContext);
  const { reference, price, nome: name } = actualProduct;

  function capitalizeFirstLetterOfEachSentence(inputString) {
    const sentences = inputString.split(' ');
    const capitalizedSentences = sentences.map((sentence) => {
      if (sentence.length > 0) {
        return sentence.charAt(0).toUpperCase() + sentence.slice(1);
      }
      return sentence;
    });
    const result = capitalizedSentences.join(' ');
    return result;
  }
  return (
    <section className="mt-[4px]">
      <div className="mx-[20px] flex justify-between">
        <h1
          style={ {
            color: '#1E1E1E',
            fontFamily: 'Roboto',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: '500',

          } }
        >
          REF:
          {' '}
          <span
            style={ {
              color: '#000',
            } }
          >
            {reference}
          </span>
        </h1>
        <h1
          style={ {
            color: '#323232',
            fontFamily: 'Roboto',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: '400',

          } }
        >
          R$
          {' '}
          <span
            style={ {
              color: '#000',
              fontFamily: 'Roboto',
              fontSize: '24px',
              fontWeight: '500',
            } }
          >
            {price}
          </span>
        </h1>
      </div>
      <div
        className="text-center mt-[12px]"
        style={ {
          color: '#1E1E1E',
          fontFamily: 'Roboto',
          fontSize: '22px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: 'normal',

        } }
      >
        {capitalizeFirstLetterOfEachSentence(name)}
      </div>
    </section>
  );
}
