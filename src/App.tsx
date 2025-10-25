
import './App.css'

import Carta from './components/Carta'

function App (){

  const mostrarCarta = (numero:number,pinta:string) =>{
    alert(`Carta de numero ${numero} y de pinta${pinta}`)

  }

  return(
    <div className="App">  
  <h1>Hola mundo</h1>
  <Carta numero={9} pinta={"♣"} mostrarCarta={mostrarCarta}/>
  <Carta numero={12} pinta={"♥"} mostrarCarta={mostrarCarta}/>
  <Carta numero={7} pinta={"♦"} mostrarCarta={mostrarCarta}/>
  <Carta numero={10} pinta={"♠"} mostrarCarta={mostrarCarta}/>
  </div>
  )
}

export default App