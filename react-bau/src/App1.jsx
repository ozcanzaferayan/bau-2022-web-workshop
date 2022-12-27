import { useState } from "react";

function App() {
  const [sayi1, setSayi1] = useState(0);
  const [sayi2, setSayi2] = useState(0);
  function handleChangeSayi1(event) {
    setSayi1(event.target.value);
  }
  function handleChangeSayi2(event) {
    setSayi2(event.target.value);
  }
  function sayilariBul(event) {
    event.preventDefault();
    console.log("Sayı 1: " + sayi1);
    console.log("Sayı 2: " + sayi2);
  }

  function renderText() {
    return "Sayı 1 büyük";
  }

  const myElement = <p>MyElement</p>;
  return (
    <div>
      <form id="myForm" action="" method="POST" onSubmit={sayilariBul}>
        <label htmlFor="number1">Sayı 1: </label>
        <input
          type="number"
          name="number1"
          id="number1"
          value={sayi1}
          onChange={handleChangeSayi1}
        />{" "}
        <br />
        <span>Sayı1: {sayi1}</span>
        <br />
        <label htmlFor="number2">Sayı 2: </label>
        <input
          type="number"
          name="number2"
          value={sayi2}
          onChange={handleChangeSayi2}
        />{" "}
        <br />
        <span>Sayı2: {sayi2}</span>
        <br />
        <input type="submit" value="Bul" />
      </form>
    </div>
  );
}

export default App;
