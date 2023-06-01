import { API_KEY } from "../constants";

export const fetchLocationId = async (city) => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/find?q=${city}&appid=${API_KEY}
`
  );
  const data = await response.json();
  return data.list[0].id;
};
export const fetchWeather = async (woeid) => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?id=${woeid}&appid=${API_KEY}`
  );
  const data = await response.json();

  const {
    name: location,
    weather,
    main: { temp: temperature },
  } = data;

  return {
    location,
    weather: weather[0].main,
    temperature: temperature - 273.15, // Convert temperature from Kelvin to Celsius
  };
};
