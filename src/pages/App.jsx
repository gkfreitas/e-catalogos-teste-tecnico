import { useContext } from 'react';
import AddProducts from '../components/AddProductsClosedGrid';
import Header from '../components/Header/Header';
import SlidePhotos from '../components/Main/SlidePhotos';
import ProductBasicInfos from '../components/ProductBasicInfos';
import ProductSizesClosedGrid from '../components/ProductSizesClosedGrid';
import ProductSizesOpenGrid from '../components/ProductSizesOpenGrid';
import ProductTools from '../components/ProductTools/ProductTools';
import { ProductContext } from '../context/product-context';

export default function App() {
  const { isOpenGrid } = useContext(ProductContext);

  return (
    <div className="w-[390px] h-[844px] mx-auto bg-[#E8FCFF] relative">
      <Header />
      <SlidePhotos />
      <ProductTools />
      <ProductBasicInfos />
      {isOpenGrid ? <ProductSizesOpenGrid /> : <ProductSizesClosedGrid />}
      <AddProducts />
    </div>
  );
}
