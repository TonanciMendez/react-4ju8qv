import React, { useState, useEffect } from 'react';
import './style.css';
//Nuevo
import View from './View';
import Text from './Text';
//Importar api
import API from './API';

const imgSource =
  'https://2.bp.blogspot.com/-hxOnOdySElI/XGBp-jJiyLI/AAAAAAAAVwo/htTzaQ4rOuQcQtK9WcjwXd__sKW_TVR4gCLcBGAs/s1600/Logo%2BQueen2.png';

function sumar(a, b) {
  return a + b;
}
function Example() {
  const [valores, setValores] = useState({
    /**
     * Metodos del componente
     */

    A: undefined,
    B: undefined,
  });
  const [personajes, setPersonajes] = useState([]);

  //Arreglo de personajes
  const capturarCambios = (event, propiedad) => {
    setValores({
      ...valores,
      [propiedad]: +event.target.value,
    });
  };
  const imprimirValores = () => {
    const resultado = sumar(valores.A, valores.B);
    alert(resultado);
    console.log(valores);
  };
  const final = () => {
    console.log('Final de componente');
  };
  const cargarPersonajes = () => {
    API.getCharacters().then((data) => {
      /*const mayusculas = data.map((personaje)=>{
        console.log(personaje)
        return{
          ...personaje,
          name:personaje.name.toUpperCase()
        }
      })*/
      //const recortados = data.splice(5, 1);
      setPersonajes(data);
    });
  };
  const inicio = () => {
    console.log('Inicio el componente');
    cargarPersonajes();
    //Final del componente -> Componet Will Unmount
    return final;
  };
  //inicio del componente->component Did Mount
  useEffect(inicio, []);
  return (
    <>
      <View>
        <input
          value={valores.A}
          onChange={(event) => capturarCambios(event, 'A')}
          type="number"
          placeholder="Escribe a"
        />
        <input
          value={valores.B}
          onChange={(event) => capturarCambios(event, 'B')}
          type="number"
          placeholder="Escribe b"
        />
        <button onClick={imprimirValores} type="button">
          Aplicar
        </button>
      </View>
      <img className="image" src={imgSource} alt="" />
      <View>
        {personajes.map((personaje) => (
          <>
            <Text key={personaje.char_id}>{personaje.name}</Text>
            <img className="image" src={personaje.img} />
          </>
        ))}
      </View>
    </>
  );
}
export default Example;
