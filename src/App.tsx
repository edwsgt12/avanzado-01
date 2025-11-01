
import './App.css'
import CardDetail from './components/CardDetail'

import Carta from './components/Carta'

function App (){

  const mostrarCard = (numero:number,pinta:string) =>{
    alert(`Carta de numero ${numero} y de pinta${pinta}`)

  }

  return(
    <div className="App">
    <CardDetail
    ataque={160}
    nombre="Aullifuego"
    defensa={100}
    descripcion="Aullifuego, es un lobo de tipo fuego, que con sus 6 colas y sus rugidos quema todo a su paso"
    imagen="https://static.wikia.nocookie.net/espokemon/images/b/bb/Growlithe.png/revision/latest/smart/width/250/height/250?cb=20080909112200"
    tipo= "Fuego"
    numero={300}/>
    </div>
  )
}

export default App