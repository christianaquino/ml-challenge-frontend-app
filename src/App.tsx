import { StrictMode } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import SearchResult from './pages/SearchResult';
import ItemDetails from './pages/ItemDetails';
import SearchContextProvider from './providers/SearchContextProvider';

import './App.scss';

function App() {
  return (
    <SearchContextProvider>
      <div className="layout">
        <StrictMode>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/items" element={<SearchResult />} />
              <Route path="/items/:id" element={<ItemDetails />} />
            </Routes>
          </BrowserRouter>
        </StrictMode>
      </div>
    </SearchContextProvider>
  );
}

export default App;
