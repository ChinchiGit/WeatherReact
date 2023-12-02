import React from "react";
import "./WeatherCard.css"

const WeatherCard = ({imagen, temperatura, sensacionTermica, descripcion, fecha, hora}) => {
  return(
    <article className="tarjeta">
      <div id="iconDiv">
        <img src={`https://openweathermap.org/img/wn/${imagen}@2x.png`} alt="Weather Icon" />
        <h2 id="descripcion">{descripcion}</h2>
      </div>
      <div id="datos">
        <h3>Temperatura: {temperatura}°</h3>
        <h3>Sensación térmica: {sensacionTermica}°</h3>
        <div className="fechaHora">
          <div id="fecha">
            <img src="/assets/images/calendar.png" alt="" />  
            <p>{fecha}</p>
          </div>
          <div id="hora">
            <img src="/assets/images/time.png" alt="" />
            <p>{hora}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default WeatherCard;
