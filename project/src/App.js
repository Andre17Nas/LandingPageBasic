import React from  'react'
import Routes from  './routes'
// npm install --save yarreact-router-hash-link
import Menu from './components/menu'
import Product from './components/product'
import Features from './components/features'

function App() {
  return (
    <>
      <Menu/>
      <Routes/> 
      <Product/>
      <Features/>
    </>
  );
}

export default App;
