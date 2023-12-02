import React, { useEffect, useState } from 'react';
import WeatherList from "../WeatherList/WeatherList";
import "./FormCity.css";



const FormCity = () => {
  const [city, setCity] = useState("Madrid"); // Para guardar el dato a buscar

  const handleSubmit = e => {
    e.preventDefault();
    setCity(e.target.city.value) // Modificando el estado de city
  };


  return (
    <>  
      <section>
        <form onSubmit={handleSubmit}>
          <label htmlFor='city' >Introduce la ciudad que quieres buscar</label>
          <input type="text" placeholder="Madrid" name="city"/>
          <button type='submit'>BUSCAR</button>
        </form>
      </section>
      <section>
        <WeatherList citySearch={city}/>
      </section>
    </>

  );
};

export default FormCity;
