import React from "react";
import BuyCart from "./BuyCart";
import InfoTooltip from "./InfoToolltip";
import Product from "./Product";

export default function Summary(props) {
  return (
    <>
      <div>
        <h1 className="summary text">Please confirm your products</h1>
        {props.allProducts?.map((product) => {
          return (
            <Product
              onAddProduct={false}
              key={product?.id}
              product={product}
            ></Product>
          );
        })}

        <button className="buy-button text">Comprar</button>
      </div>
    </>
  );
}
