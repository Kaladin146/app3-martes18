function Datos(props){
    return(
        <div className="datos-container">
            {
              props.pokemones.map((datosPokemones)=>(
                <div>
                  <div>
                    <h1>{datosPokemones.pokemon}</h1> 
                    <h1>{datosPokemones.tipo}</h1>
                  </div>
                    <div>
                      <img src={datosPokemones.imagen}></img>
                    </div>
                   
                </div>    

              ))     
            }
        </div>
       
    )
}
export default Datos;