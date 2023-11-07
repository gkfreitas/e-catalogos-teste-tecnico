import HeaderSummaryOrder from '../components/HeaderSummaryOrder/HeaderSummaryOrder';
import OrderBasicInfos from '../components/OrderBasicInfos/OrderBasicInfos';
import ProductOrder from '../components/ProductOrder/ProductOrder';
import * as S from './style';

export default function SummaryOrder() {
  return (
    <S.PageBody>
      <S.PageContainer>
        <HeaderSummaryOrder />
        <OrderBasicInfos />
        <ProductOrder />
      </S.PageContainer>
    </S.PageBody>
  );
}
