import React from "react";
import Product from "./components/Product";
import productData from "./data/productData";

const mappedProducts = productData.map((product) => (
  <Product key={product.id} name={product.name} available={product.available} />
));

function App7() {
  return <div className="product">{mappedProducts}</div>;
}

export default App7;
