import products from "../products";

import React from "react";
import ProductItem from "./ProductItem";

const ProductsLists = () => {
  const productsLists = products.map((product) => {
    return (
      <ProductItem
        image={product.image}
        name={product.name}
        price={product.price}
      />
    );
  });
  return <div className="card-frame">{productsLists}</div>;
};

export default ProductsLists;
