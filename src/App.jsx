
import './App.css'
import Datos from './Datos'
function App() {
 const pokemones=[
  {
    pokemon:'Aegislash',
    tipo:'Acero',
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/681.png"
  },
  
  {
    pokemon:'Chandelure',
    tipo:'Fuego/Fantasma',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png '
  },
  {
    pokemon:'Haxorus',
    tipo:'Dragon',
    imagen:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/612.png"
  },
  {
    pokemon:'Lapras',
    tipo:'Hielo',
    imagen:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png"
  },
  {
    pokemon:'Lucario',
    tipo:'Lucha',
    imagen:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png"
  },
  {
    pokemon:'Magikarp',
    tipo:'Agua',
    imagen:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png"
  },

      

 ]

  return (
   <Datos pokemones={pokemones}/>
  )
}

export default App
