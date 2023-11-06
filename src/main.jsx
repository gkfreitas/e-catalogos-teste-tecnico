import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import ReactDOM from 'react-dom/client';
import CategoryContextProvider from './context/category-context';
import ProductContextProvider from './context/product-context';
import App from './pages/App';
import SummaryOrder from './pages/SummaryOrder';
import './styles/index.css';

const routerApp = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  }, {
    path: 'order',
    element: <SummaryOrder />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductContextProvider>
    <CategoryContextProvider>
      <RouterProvider router={ routerApp } />

    </CategoryContextProvider>
  </ProductContextProvider>,
);
