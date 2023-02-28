import { useEffect, useState } from "react";
import Boton from "./Components/Boton";

function App() {

  let [valorActual, setvalorActual]= useState (0)
  let [Cronometro, setCronometro] = useState (false)

  function Aumentar () {
    let novoValor = valorActual+1
    setvalorActual(novoValor)
  }

  function Disminuir () {
    let novoValor = valorActual-1
    setvalorActual(novoValor)
  }

  function Resetear () {
    let novoValor = 0
    setvalorActual(novoValor)
  }

  function ActivarCronometro () {
    setCronometro(!Cronometro) /*Así niego cronómetro, de forma
                               si empieza siendo false pasa a true al
                               pulsar y viceversa lo que permite tener
                               en un solo botón el inicio y stop del
                               Cronometro */ 
  }

  useEffect (
  () => { 
    let CodCronometro
    if (Cronometro) {CodCronometro = setTimeout(Aumentar, 1000)}
    return ()=>{clearTimeout(CodCronometro)}
  }, 
  [Cronometro, valorActual] ) 
  


  return (
    <main className="container">
      <h1 className="row d-flex flex-row justify-content-center alig-items-center">MEGACONTADOR</h1>
      <p className="row d-flex flex-row justify-content-center alig-items-center"> {valorActual}</p>
      <div className="row d-flex flex-row justify-content-center alig-items-center m-3">
      <span className="col d-flex flex-row justify-content-center alig-items-center"><Boton  NombreBoton="+" YDespuesDeContar={Aumentar} Contador/></span>
      <span className="col d-flex flex-row justify-content-center alig-items-center"><Boton NombreBoton="-" YDespuesDeContar={Disminuir} Contador/></span>
      </div>
      <div className="row d-flex flex-row justify-content-center alig-items-center">
      <Boton NombreBoton="Reset" YDespuesDeContar={Resetear}/>
      {Cronometro===false && <Boton NombreBoton="Cronometro ON" YDespuesDeContar={ActivarCronometro}/>}
      {Cronometro===true && <Boton NombreBoton="Cronometro OFF" YDespuesDeContar={ActivarCronometro}/>}
      </div>
    </main>
  );
}

export default App;
