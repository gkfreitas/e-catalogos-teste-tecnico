import React from 'react';
import ReactDOM from 'react-dom/client';
import CategoryContextProvider from './context/category-context';
import ProductContextProvider from './context/product-context';
import App from './pages/App';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CategoryContextProvider>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </CategoryContextProvider>
  </React.StrictMode>,
);
