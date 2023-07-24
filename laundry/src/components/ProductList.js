import React from "react";
import { data } from "./data";

function ProductList({ allProducts, setAllProducts }) {
  const onAddProduct = () => {
    console.log("holi");
  };

  return (
    <>
      <div className="container-items">
        {data.map((product) => (
          <div key={product.id} className="item">
            <figure className="item__figure">
              <img
                className="item__image"
                src={product.img}
                alt={product.nameProduct}
              />
            </figure>
            <div className="info-product">
              <h2>{product.nameProduct}</h2>
              <p className="info-product__price">{product.price}</p>
              <button
                onClick={onAddProduct}
                className="info-product__btn-add-cart"
              >
                Añadir al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default ProductList;
