import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';

import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<ProductList />} />
        <Route path="/details" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
