import Header from '../components/Header';
import ProductTools from '../components/ProductTools';
import SlidePhotos from '../components/SlidePhotos';

export default function App() {
  return (
    <div className="max-w-[390px] max-h-[844px] mx-auto bg-[#E8FCFF]">
      <Header />
      <SlidePhotos />
      <ProductTools />
    </div>
  );
}
