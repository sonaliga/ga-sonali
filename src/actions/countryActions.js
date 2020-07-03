import {API_KEY} from '../configs/configs';

export const countryAction = async (name) => {
  const res = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
  const data = await res.json();
  return data;
};

export const getCountryWeather = async (city) => {
  const res = await fetch(
    `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`,
  );
  const data = await res.json();
  return data;
};
