import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import SearchResult from './pages/SearchResult';
import ProductDetails from './pages/ProductDetails';

import './index.scss';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div className="layout">
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<SearchResult />} />
          <Route path="/items/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </div>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
