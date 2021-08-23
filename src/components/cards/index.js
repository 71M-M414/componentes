import { useState } from "react";
import Button from "../Button/index";

const Card = () => {
  const [Valor, setValor] = useState(0);

  function Adicionar() {
    setValor(Valor + 1);
  }

  function Remover() {
    setValor(Valor - 1);
  }
  return (
    <div className="card">
      <div className="card-header">Featured</div>
      <div className="card-body">
        <Button className="btn btn-success" onClick={Adicionar}>
          add
        </Button>

        <Button className="btn btn-danger" onClick={Remover}>
          Remove
        </Button>
        <p className="card-text">{Valor}</p>
      </div>
    </div>
  );
};

export default Card;
