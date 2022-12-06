import React, { useState, useEffect } from 'react';
import './style.css';
import Car from './car/Car.js';

export default function App() {
  //Esta es una variable que representaría al arreglo de objetos JSON que se podrían recuperar desde una API Rest.
  const personajesDesdeAPI = [
    {
      nombre: 'LA MAQUINA',
      modelo: ' Ferrari 250 GTO ',
      imagen: 'https://img.remediosdigitales.com/48f260/ferrari-250-gto-gris-01/1366_2000.jpg',
      descripcion: 'EL LEVANTA NENAS MAS BONITO DE LOS AÑOS 80.',
      sonido: 'RUN-RUN-RAAAA',
      anio: '1980',
    },
    {
      nombre: 'JAGUARCITO',
      modelo: 'International L-170',
      imagen:
        'https://www.enterprise.com/content/dam/ecom/utilitarian/common/exotics/us-refresh/car-thumbnails/thumbnail-2021-jaguar-xf-2048x1360.png',
      descripcion: 'El CARRO MAS DE CARO DEL MUNDO .',
      sonido: 'RAAAAAAAAAA',
      anio: '2020',
    },
  ];


  const [personajes, setPersonajes] = useState([]);

  //Un useEffect con dependencia de arreglo vacío [], siempre se dispara una vez al iniciar el componente.
  useEffect(() => {
   
    setPersonajes(personajesDesdeAPI);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {
        //dibujar por cada personaje en la lista de personajes un componente Car.
        personajes.map((personaje) => (
          <Car
            nombre={personaje.nombre}
            modelo={personaje.modelo}
            imagen={personaje.imagen}
            descripcion={personaje.descripcion}
            sonido={personaje.sonido}
            anio={personaje.anio}
          />
        ))
      }
    </div>
  );
}
