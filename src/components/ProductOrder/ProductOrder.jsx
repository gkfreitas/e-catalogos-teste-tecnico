import * as S from './style';

export default function ProductOrder() {
  const tags = ['Foto', 'Ref / Nome', 'Tam.', 'Qtd', 'R$ Bruto',
    'R$ Imp.', 'R$ Total'];

  const productsData = JSON.parse(localStorage.getItem(('productsCart'))) || [];

  return (
    <S.ProductOrderContainer>
      <thead>
        <tr>
          {
            tags.map((tag, i) => (
              <S.Tag key={ `${tag}${i}` }>
                {tag}
              </S.Tag>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {productsData.map(({ image, name, sizes, price }, index) => (
          <tr key={ `${image}${name}${index}` }>
            <S.TableBody>
              <S.ImageOrder src={ image } />
            </S.TableBody>
            <S.TableBody>
              {name}
            </S.TableBody>
            <S.TableBodySizes>
              {Object.keys(sizes).map((size, i) => (
                <S.TextSpacing key={ `${size}${i}` }>{size}</S.TextSpacing>
              ))}
            </S.TableBodySizes>
            <S.TableBodySizes>
              {Object.values(sizes).map((size, i) => (
                <S.TextSpacing key={ `${size}${i}` }>{size}</S.TextSpacing>
              ))}
            </S.TableBodySizes>
            <S.TableBodySizes>
              {Object.values(sizes).map((quantity, i) => (
                <S.TextSpacing
                  key={ `${quantity}${i}` }
                >
                  {`R$ ${(quantity * price).toFixed(2)}`}
                </S.TextSpacing>
              ))}
            </S.TableBodySizes>
            <S.TableBodySizes>
              0.0
            </S.TableBodySizes>
            <S.TableBodySizes>
              {`R$ ${(Object.values(sizes).reduce((cur, acc) => {
                const total = (cur + acc);
                return total;
              }, 0) * price).toFixed(2)}`}
            </S.TableBodySizes>
          </tr>
        ))}
      </tbody>
    </S.ProductOrderContainer>
  );
}
