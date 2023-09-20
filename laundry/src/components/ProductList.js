import React from "react";
import {data} from "./data";
import Product from "./Product";

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
        item.id === product.id ? {...item, quantity: item.quantity + 1} : item
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
          <Product
            onAddProduct={onAddProduct}
            key={product?.id}
            product={product}
          ></Product>
        ))}
      </div>
    </>
  );
}
export default ProductList;
