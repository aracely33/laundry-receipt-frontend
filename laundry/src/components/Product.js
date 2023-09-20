import React from "react";

export default function Product(props) {
  return (
    <>
      <div className="item item_product">
        <figure className="item__figure item__figure_product">
          <img
            className="item__image"
            src={props.product?.img}
            alt={props.roduct?.nameProduct}
          />
        </figure>
        <div className="info-product">
          <h2 className="info-product__title text">
            {props.product?.nameProduct}
          </h2>
          <p className="info-product__price text">${props.product?.price}</p>
          {props.onAddProduct && (
            <button
              onClick={() => props.onAddProduct(props.product)}
              className="info-product__btn-add-cart text"
            >
              Añadir al carrito
            </button>
          )}
        </div>
      </div>
    </>
  );
}
