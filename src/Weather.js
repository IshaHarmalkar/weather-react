import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);
  let [descp, setDescp] = useState("");
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);

  const [city, setCity] = useState("");

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const apiKey = "c8a77112b2faf6684bb4b21a0aa778ae";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios
      .get(url)
      .then((response) => {
        setTemperature(response.data.main.temp);
        setDescp(response.data.weather[0].description);

        setHumidity(response.data.main.humidity);
        setWind(response.data.wind.speed);

        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }

  // function showTemperature(response) {
  //   // alert(response.data.main.temp);
  //   setTemperature(response.data.main.temp);
  //   <div>
  //     <ul>
  //       <li>`Temperature = ${temperature}`</li>
  //     </ul>
  //   </div>;
  // }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a city.."
          onChange={handleCityChange}
        />
        <button type="submit">Search</button>
      </form>

      {temperature !== null ? (
        <ul>
          <li>Temperature: {temperature}°C.</li>
          <li>Description: {descp}</li>
          <li>Humidity:{humidity}%</li>
          <li>Wind:{wind}km/h</li>
        </ul>
      ) : (
        <p>Enter a city to get the weather.</p>
      )}
    </div>
  );
}
