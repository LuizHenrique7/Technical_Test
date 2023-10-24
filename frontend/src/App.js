import './App.css';
import React from 'react';
import ProductList from './components/ProductList';
import RegisterButton from "./components/RegisterButton";



function App() {
  return (
    <div className="App">
      <header className="App-header">
          <ProductList/>
          <RegisterButton/>
      </header>
    </div>
  );
}

export default App;
