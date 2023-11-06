import { useContext } from 'react';
import AddProducts from '../components/AddProductsClosedGrid';
import Header from '../components/Header/Header';
import SlidePhotos from '../components/Main/SlidePhotos';
import ProductBasicInfos from '../components/ProductBasicInfos/ProductBasicInfos';
import ProductSizesClosedGrid from '../components/ProductSizes/ProductSizesClosedGrid';
import ProductSizesOpenGrid from '../components/ProductSizes/ProductSizesOpenGrid';
import ProductTools from '../components/ProductTools/ProductTools';
import { ProductContext } from '../context/product-context';
import * as S from './style';

export default function App() {
  const { isOpenGrid } = useContext(ProductContext);

  return (
    <S.PageBody>
      <S.MobileContainer>
        <Header />
        <SlidePhotos />
        <ProductTools />
        <ProductBasicInfos />
        {isOpenGrid ? <ProductSizesOpenGrid /> : <ProductSizesClosedGrid />}
        <AddProducts />
      </S.MobileContainer>
    </S.PageBody>

  );
}
