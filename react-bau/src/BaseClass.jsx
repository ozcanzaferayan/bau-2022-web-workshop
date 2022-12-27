import React, { useState } from "react";

const BaseClass = (props) => {
  const [sayi, setSayi] = useState(0);
  function handleChangeSayi(event) {
    setSayi(event.target.value);
    console.log(sayi);
  }
  return (
    <>
      <label htmlFor="number1">{props.text} </label>
      <input
        type="number"
        name={props.name}
        id={props.name}
        value={sayi}
        onChange={handleChangeSayi}
      />
      <br />
      <span>
        {props.text}:{sayi}
      </span>
    </>
  );
};

export default BaseClass;
