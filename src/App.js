import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from './components/Main/Main';
import FilteredProducts from './components/FilterdProduct/FilteredProducts';
import SingleProduct from './components/FilterdProduct/SingleProduct';

// import ProductSection from './components/ProductSection';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       
        <Routes>
         <Route path='/' element={<Main></Main>}></Route>
          <Route path="/filteredProducts/:type" element={<FilteredProducts></FilteredProducts>}>  </Route>
          <Route path="/filteredProducts/:type/:id" element={<SingleProduct></SingleProduct>}>  </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
