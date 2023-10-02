import products from "../products";

import React from "react";
import ProductItem from "./ProductItem";

const ProductsLists = () => {
  const productsLists = products.map((product) => {
    return <ProductItem key={product.id} product={product} />;
  });
  return <div className="card-frame">{productsLists}</div>;
};

export default ProductsLists;

/*
ALTERNATIVE 1

const ProductsLists = () => {
  const productsLists = products.map((product) => {
    return (
      <ProductItem product={product}/>
    );
  });
  return <div className="card-frame">{productsLists}</div>;
};

export default ProductsLists;

*/
