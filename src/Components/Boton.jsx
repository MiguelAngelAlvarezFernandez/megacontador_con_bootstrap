import { useState } from "react";

function Boton(props) {

let [Contador, setContador] = useState(0)
function manexadorBoton () {
setContador(Contador+1)
props.YDespuesDeContar()
console.log(Contador)
}

  return (
    <button onClick={manexadorBoton} className="btn btn-outline-primary"> {props.NombreBoton} {props.Contador && <span className="badge badge-pill badge-dark">{Contador}</span>}</button>
  );
}

export default Boton;
