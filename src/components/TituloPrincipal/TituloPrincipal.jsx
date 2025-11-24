import React from 'react'


//props = objeto (objeto que puede llamar funciones)

// Se puede llamar de 3 maneras, la más "profesional" y visualmente agradable es const TituloPrincipal = (props) dentro del "(props)", ponerle unos {} y llamar a saludo, quedando({saludo})

const TituloPrincipal = ({saludo, producto}) => {

  console.log (producto)

  return (
    <h2>{saludo}</h2>
  )
}

export default TituloPrincipal