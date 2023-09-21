import React from "react";
import InfoTooltip from "./InfoToolltip";
import Product from "./Product";

export default function Summary(props) {
  console.log(props);
  const [infoToolOpen, setInfoToolOpen] = React.useState(false);
  const [confirm, setConfirm] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleCloseInfoTool = () => {
    setInfoToolOpen(false);
    setConfirm(false);
  };

  const handleOpenInfoTool = () => {
    setInfoToolOpen(true);
    setConfirm(true);
  };

  return (
    <>
      <div className="summary">
        <h2 className="text text_clear-tone">Please confirm your products</h2>

        <div className="container-items container-items_summary">
          {props.allProducts?.map((product) => {
            return (
              <Product
                onAddProduct={false}
                key={product.id}
                product={product}
              ></Product>
            );
          })}
        </div>
        <div className="cart-total ">
          <p className="text text_clear-tone">Total: ${props.total}</p>
          <p className="text text_clear-tone">
            Cantidad de Productos: {props.countProducts}
          </p>
          <button
            onClick={handleOpenInfoTool}
            className="buy-button buy-botton_border text"
          >
            Confirmar
          </button>
        </div>
      </div>

      <InfoTooltip
        error={error}
        confirm={confirm}
        infoToolOpen={infoToolOpen}
        handleClose={handleCloseInfoTool}
      ></InfoTooltip>
    </>
  );
}
