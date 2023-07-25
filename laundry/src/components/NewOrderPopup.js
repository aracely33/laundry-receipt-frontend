import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";
const conceptos = [
  { concepto: "Lavado", precioUnitario: 10 },
  { concepto: "Planchado", precioUnitario: 15 },
  { concepto: "Tintorería", precioUnitario: 20 },
];

export default function NewOrderPopup(props) {
  const { newPlaceLink, newPlaceTitle } = props;
  const currentDate = new Date().toLocaleString();
  const [tableData, setTableData] = useState([]);

  const [selectedConcept, setSelectedConcept] = useState("");
  const [unitPrice, setUnitPrice] = useState(0);
  const [selectedQuantity, setSelectedQuantity] = useState(0);

  const [orderNumber, setOrderNumber] = useState(0);
  //console.log(tableData);
  const handleConceptChange = (e) => {
    const selectedConcept = e.target.value;
    console.log(selectedConcept);

    const updatedTableData = conceptos.map((concepto) => ({
      ...concepto,
      seleccionado: concepto.concepto === selectedConcept,
    }));

    console.log(updatedTableData);
    setTableData(updatedTableData);
    setSelectedConcept(selectedConcept);
  };
  const handleQuantityChange = (e) => {
    console.log(e.target.value);
    const quantity = parseInt(e.target.value);
    setSelectedQuantity(quantity);
    /*setSelectedQuantity(parseInt(e.target.value));
    const updatedTableData = tableData.map((data) => ({
      ...data,
      cantidad: selectedQuantity,
    }));
    console.log(updatedTableData);
    setTableData(updatedTableData);
    setSelectedQuantity(selectedQuantity);*/
  };
  const handleAddConcept = (evt) => {
    evt.preventDefault();
    const newConcept = {
      concepto: selectedConcept,
      precioUnitario: conceptos.find(
        (concepto) => concepto.concepto === selectedConcept
      ).precioUnitario,
      cantidad: selectedQuantity,
      seleccionado: true,
    };

    setTableData([...tableData, newConcept]);

    setSelectedConcept("");
    setSelectedQuantity(0);
  };

  function handleSubmit(e) {
    e.preventDefault();
    setOrderNumber((prevOrderNumber) => prevOrderNumber + 1);
    props.onAddPlaceSubmit({ newPlaceTitle, newPlaceLink, currentDate });
    props.setNewPlaceLink("");
    props.setNewPlaceTitle("");
  }
  return (
    <PopupWithForm
      title="Nueva orden"
      action="Guardar"
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name="newOrder"
      inputs={[
        {
          type: "text",
          placeholder: "Nombre del cliente",
          name: "newPlaceCaption",
          id: "popup__input_new-place-title",
          minLength: "2",
          maxLength: "30",
          onChange: props.onNewPlaceTitleChange,
          value: newPlaceTitle,
        },
        {
          type: "url",
          placeholder: "Enlace a la imagen",
          name: "newPlace",
          id: "popup__input_new-place-pic",
          onChange: props.onNewPlaceLinkChange,
          value: newPlaceLink,
        },
      ]}
    >
      <p className="form__date">Fecha : {currentDate} </p>
      <p className="form__orders-number">Numero de órden:{orderNumber} </p>
      <select value={selectedConcept} onChange={handleConceptChange}>
        <option value="">Selecciona</option>
        {conceptos.map((concepto, index) => (
          <option key={index} value={concepto.concepto}>
            {concepto.concepto}
          </option>
        ))}
      </select>
      <input
        type="number"
        value={selectedQuantity}
        onChange={handleQuantityChange}
      />
      <button onClick={handleAddConcept}>Agregar</button>
      <table>
        <thead>
          <tr>
            <th>Concepto</th>
            <th>Precio Unitario</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.concepto}</td>
              <td>{data.precioUnitario}</td>
              <td>{data.cantidad}</td>
              <td>
                {Number.isNaN(data.precioUnitario * data.cantidad)
                  ? 0
                  : data.precioUnitario * data.cantidad}
              </td>
              <td>{data.seleccionado ? "Seleccionado" : "na"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </PopupWithForm>
  );
}
