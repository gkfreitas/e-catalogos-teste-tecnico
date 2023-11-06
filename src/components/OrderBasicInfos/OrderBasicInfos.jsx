import * as S from './style';

export default function OrderBasicInfos() {
  const mockOrderLeft = ['Razão social', 'CNPJ', 'N° Pedido',
    'Data Pedido', 'Transportadora', 'Cond. Pagamento', 'Data Entrega (mensal)'];

  const mockOrderRight = ['Murilo e Sarah Alimentos ME', '02.822.854/0001-89',
    '02.822.854/0001-89', '06/11/2023'];
  return (
    <S.OrderContainer>
      {
        mockOrderLeft.map((order, i) => (
          <S.CardContainer key={ order }>
            <S.CardLeft>
              {order}
            </S.CardLeft>
            <S.CardRight
              style={ {
                backgroundColor: mockOrderRight[i] ? '#89EEFE' : '#FE8989',
              } }
            >
              {mockOrderRight[i]}
            </S.CardRight>
          </S.CardContainer>
        ))
      }
    </S.OrderContainer>
  );
}
