const item = (props) => {
  return (
    <a
      href="#"
      className="list-group-item list-group-item-action list-group-item-dark" // sintaxe do react as classes devem ser chamadas de classname
    >
      {props.texto}
      {props.children}
    </a>
  );
};
export default item;
