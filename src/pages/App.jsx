import { useContext } from 'react';
import AddProductsOpenGrid from '../components/AddProcutsOpenGrid';
import AddProductsClosedGrid from '../components/AddProductsClosedGrid';
import Header from '../components/Header';
import ProductBasicInfos from '../components/ProductBasicInfos';
import ProductSizesClosedGrid from '../components/ProductSizesClosedGrid';
import ProductSizesOpenGrid from '../components/ProductSizesOpenGrid';
import ProductTools from '../components/ProductTools';
import SlidePhotos from '../components/SlidePhotos';
import { ProductContext } from '../context/product-context';

export default function App() {
  const { isOpenGrid } = useContext(ProductContext);
  return (
    <div className="max-w-[390px] h-[844px] mx-auto bg-[#E8FCFF]">
      <Header />
      <SlidePhotos />
      <ProductTools />
      <ProductBasicInfos />
      {isOpenGrid ? <ProductSizesOpenGrid /> : <ProductSizesClosedGrid />}
      {isOpenGrid ? <AddProductsOpenGrid /> : <AddProductsClosedGrid />}
    </div>
  );
}
