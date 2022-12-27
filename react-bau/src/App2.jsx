import MyTextInput from "./BaseClass";
import Sayi1Class from "./Sayi1Class";

function App() {
  function sayilariBul(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form id="myForm" action="" method="POST" onSubmit={sayilariBul}>
        <Sayi1Class />
        <br />
        <Sayi2Class />
        <br />
        <input type="submit" value="Bul" />
      </form>
    </div>
  );
}

export default App;
