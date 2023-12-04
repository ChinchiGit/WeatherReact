import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";
import WeatherCard from "./WeatherCard/WeatherCard";
import "./WeatherList.css"
import ErrorMessage from './ErrorMessage/ErrorMessage';


const WeatherList = (citySearch) => {
  const [weather, setWeather] = useState([]); // Para guardar los posts
  const [fetchStatus, setFetchStatus] = useState()

    // equivale a un componentDidUpdate()
    useEffect(() => {
      async function fetchData() {
        try{
          // Petición HTTP
          const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${citySearch.citySearch}&cnt=8&appid=${import.meta.env.VITE_APIKEY}&units=metric&lang=es`)
          const json = res.data.list;  
          // Guarda en el array de posts el resultado. Procesa los datos
          setWeather(json);
          setFetchStatus(true);
        }catch(e){
          setWeather(); // No pintes nada 
          setFetchStatus(false);
        }
      }
  
      fetchData();
    }, [citySearch]); // componentDidUpdate


    const paintWeather = () => {
      if (fetchStatus==true){
        return weather.map((element) => (
          <WeatherCard
            key={uuidv4()}
            imagen={element.weather[0].icon} 
            temperatura={element.main.temp}
            sensacionTermica={element.main.feels_like}
            descripcion={element.weather[0].description.charAt(0).toUpperCase()+element.weather[0].description.slice(1)}
            fecha={element.dt_txt.slice(0,10)}
            hora={element.dt_txt.slice(11,)}
          />
        ));
      } else {
        return (
          <ErrorMessage
          />
        )
       
      } 
      
    };



  return (
    <>
      <section>
        <h3>Información meteorológica de {citySearch.citySearch.toUpperCase()} para las próximas 24 horas:</h3>
      </section>
      <section className='contenedorTarjetas'>
        {paintWeather()} 
      </section>
    </>
    )
};

export default WeatherList;
