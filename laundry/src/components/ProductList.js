import React from "react";
import { data } from "./data";

function ProductList({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) {
  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);

      return setAllProducts([...products]);
    }

    setTotal(total + product.price * product.quantity);

    setCountProducts(countProducts + product.quantity);

    setAllProducts([...allProducts, product]);
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
              <p className="info-product__price">${product.price}</p>
              <button
                onClick={() => onAddProduct(product)}
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
