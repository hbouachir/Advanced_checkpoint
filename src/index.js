import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductTable from './ProductTable';
import * as serviceWorker from './serviceWorker';

const products=[
  {category:"Clothes",
     price:50,
    name:"skirt"},
    {category:"Electronics",
      price:30,
     name:"mp3"},
    {category:"Electronics",
      price:500,
     name:"TV"},
    {category:"Clothes",
      price:60,
     name:"jeans"},
    {category:"Electronics",
      price:1500,
     name:"PC"}]


ReactDOM.render(
  <React.StrictMode>
    <ProductTable tab={products} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
