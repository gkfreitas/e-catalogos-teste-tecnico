import HeaderSummaryOrder from '../components/HeaderSummaryOrder/HeaderSummaryOrder';
import OrderBasicInfos from '../components/OrderBasicInfos/OrderBasicInfos';
import * as S from './style';

export default function SummaryOrder() {
  return (
    <S.PageContainer>
      <HeaderSummaryOrder />
      <OrderBasicInfos />
    </S.PageContainer>
  );
}
