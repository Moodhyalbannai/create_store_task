import React from "react";

const ProductItem = (props) => {
  return (
    <div>
      <div className="card">
        <img src={props.product.image} alt={props.product.name} />
        <div className="titlePrice">
          <h3>{props.product.name}</h3>
          <p>{props.product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

// {
//   /* <div>
// <div className="card">
//   <img src={props.product.image} />
//   <div className="titlePrice">
//     <h3>{props.product.name}</h3>
//     <p>{props.product.price}</p>
//   </div>
// </div>
// </div>
// ); */
// }

/*
ALTERNATIVE 1

const ProductItem = (props) => {
  return (
    <div>
      <div className="card">
        <img src={props.product.image} />
        <div className="titlePrice">
          <h3>{props.product.name}</h3>
          <p>{props.product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;



*/
