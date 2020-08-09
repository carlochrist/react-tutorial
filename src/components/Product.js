import React from "react";

function Product(props) {
  return (
    <div className="product">
      <h1>ID: {props.key}</h1>
      <h1>NAME: {props.name}</h1>
      <h1
        style={
          props.available === false ? { color: "red " } : { color: "green" }
        }
      >
        AVAILABILITY: {props.available}
      </h1>
    </div>
  );
}

export default Product;
