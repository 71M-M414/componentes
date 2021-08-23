import Item from "./components/item"; // Sempre que foi importar o componente o nome será em Maiusculo (cameo case)
import Card from "./components/cards/index";

const App = () => {
  return (
    // duas formas de acessar o props
    <>
      <h1>Minha primeira aplicação com React</h1>
      <ul>
        <li>
          <Item>item 01</Item>
        </li>
        <li>
          <Item texto="item 02" />
        </li>
        <li>
          <Item texto="item 03" />
        </li>
      </ul>
      <Card />
    </>
  );
};

export default App;
