
import { useEffect, useState } from 'react';
import './App.css'
import getApiKey from './utils/getApiKey';
import axios from 'axios'
import WeatherCard from '../components/WeatherCard';
import Loading from '../components/Loading';

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()
  const [search, setSearch] = useState()

  useEffect(() => {
    const success = pos => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      }
      setCoords(obj);
    };
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  {
    search ?
      useEffect(() => {
        const url2 = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${getApiKey()}`
        axios.get(url2)
          .then(res => {
            setWeather(res.data)
            const objTemp = {
              celsius: +(res.data.main.temp - 273.15).toFixed(0),
              farenheit: +((res.data.main.temp - 273.15) * 9 / 5 + 32).toFixed(0)
            }
            setTemp(objTemp)
          })
          .catch(err => console.log(err));
      }, [search])
      :
      useEffect(() => {
        if (coords) {
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${getApiKey()}`
          axios.get(url)
            .then(res => {
              setWeather(res.data)
              const objTemp = {
                celsius: +(res.data.main.temp - 273.15).toFixed(0),
                farenheit: +((res.data.main.temp - 273.15) * 9 / 5 + 32).toFixed(0)
              }
              setTemp(objTemp)
            })
            .catch(err => console.log(err));
        }
      }, [coords]);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.inputValue.value.trim();
    if (inputValue) {
      setSearch(inputValue);
    }
    e.target.inputValue.value = '';
  };

  console.log(search);

  return (
    <>
      {
        weather
          ? <WeatherCard
            weather={weather}
            temp={temp} handleSubmit={handleSubmit}
          />
          : <Loading />
      }
    </>
  )
}

export default App





