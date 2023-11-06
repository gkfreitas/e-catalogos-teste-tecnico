import * as S from './style';

export default function ProductOrder() {
  const tags = ['Foto', 'Ref / Nome', 'Tam.', 'Qtd', 'R$ Bruto',
    'R$ Imp.', 'R$ Total'];
  const productsData = [{
    productImage: 'https://paineladm.e-catalogos.net/storage/2110/2110_16074783815dke1jnq4nu3sdv1zwhis9.png',
    productName: 'Jaqueta Azul',
    sizes: {
      PP: 10,
      GG: 20,
      P: 30,
      PPP: 40,
    },
    price: 29.00,
  }];
  return (
    <S.ProductOrderContainer>
      <thead>
        <tr>
          {
            tags.map((tag) => (
              <S.Tag key={ tag }>
                {tag}
              </S.Tag>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {productsData.map(({ productImage, productName, sizes, price }) => (
          <tr key={ productImage }>
            <S.TableBody>
              <S.ImageOrder src={ productImage } />
            </S.TableBody>
            <S.TableBody>
              {productName}
            </S.TableBody>
            <S.TableBodySizes>
              {Object.keys(sizes).map((size) => (
                <S.TextSpacing key={ size }>{size}</S.TextSpacing>
              ))}
            </S.TableBodySizes>
            <S.TableBodySizes>
              {Object.values(sizes).map((size) => (
                <S.TextSpacing key={ size }>{size}</S.TextSpacing>
              ))}
            </S.TableBodySizes>
            <S.TableBodySizes>
              {Object.values(sizes).map((quantity) => (
                <S.TextSpacing
                  key={ quantity }
                >
                  {`R$ ${(quantity * price).toFixed(2)}`}
                </S.TextSpacing>
              ))}
            </S.TableBodySizes>
            <S.TableBodySizes>
              0.0
            </S.TableBodySizes>
            <S.TableBodySizes>
              {`R$ ${Object.values(sizes).reduce((cur, acc) => {
                const total = (cur + acc);
                return total;
              }, 0) * price}`}
            </S.TableBodySizes>
          </tr>
        ))}
      </tbody>
    </S.ProductOrderContainer>
  );
}
