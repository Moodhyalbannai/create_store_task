import products from "../products";

import React from "react";
import ProductItem from "./ProductItem";

const ProductsLists = () => {
  const productsLists = products.map((product) => {
    return <ProductItem key={product.id} props={product} />;
  });
  return <div className="card-frame">{productsLists}</div>;
};

export default ProductsLists;

/*
ALTERNATIVE 1

const ProductsLists = () => {
  const productsLists = products.map((product) => {
    return (
      <ProductItem props={product}/>
    );
  });
  return <div className="card-frame">{productsLists}</div>;
};

export default ProductsLists;

*/
