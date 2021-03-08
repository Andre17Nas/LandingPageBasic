import React from  'react'
import Routes from  './routes'
// npm install --save yarreact-router-hash-link
import Menu from './components/menu'
import Product from './components/product'
import Features from './components/features'
import Reviewss from './components/reviewss'
import Newsletter from './components/newsletter'
import Footer from './components/footer'

function App() {
  return (
    <>
      <Menu/>
      <Routes/> 
      <Product/>
      <Features/>
      <Reviewss/>
      <Newsletter/>
      <Footer/>
    </>
  );
}

export default App;
