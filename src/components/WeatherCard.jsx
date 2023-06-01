import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap';

// import d01 from './imagen/imagen3.jpg';

const WeatherCard = ({ weather, temp, handleSubmit }) => {

    const [iscelcius, setIscelcius] = useState(true)


    const handleChangeTemp = () => {
        setIscelcius(!iscelcius)
    }

    const imgWeather = {
        d01: './img/01d.jpg',
        n01: './img/01n.jpg',
        d02: './img/02d.jpg',
        n02: './img/02n.jpg',
        d03: './img/03d.jpg',
        n03: './img/03n.jpg',
        d04: './img/04d.jpg',
        n04: './img/04n.jpg',
        d09: './img/09d.jpg',
        n09: './img/09n.jpg',
        d10: './img/10d.jpg',
        n10: './img/10n.jpg',
        d11: './img/11d.jpg',
        n11: './img/11n.jpg',
        d13: './img/13d.jpg',
        n13: './img/13n.jpg',
        d50: './img/50d.jpg',
        n50: './img/50n.jpg'
    };

    let asigImg = '';

    
    if (weather.weather[0].icon === '01d') {
        asigImg = imgWeather.d01;
    } else if (weather.weather[0].icon === '01n') {
        asigImg = imgWeather.n01;
    } else if (weather.weather[0].icon === '02d') {
        asigImg = imgWeather.d02;
    } else if (weather.weather[0].icon === '02n') {
        asigImg = imgWeather.n02;
    } else if (weather.weather[0].icon === '03d') {
        asigImg = imgWeather.d03;
    } else if (weather.weather[0].icon === '03n') {
        asigImg = imgWeather.n03;
    } else if (weather.weather[0].icon === '04d') {
        asigImg = imgWeather.d04;
    } else if (weather.weather[0].icon === '04n') {
        asigImg = imgWeather.n04;
    } else if (weather.weather[0].icon === '09d') {
        asigImg = imgWeather.d09;
    } else if (weather.weather[0].icon === '09n') {
        asigImg = imgWeather.n09;
    } else if (weather.weather[0].icon === '10d') {
        asigImg = imgWeather.d10;
    } else if (weather.weather[0].icon === '10n') {
        asigImg = imgWeather.n10;
    } else if (weather.weather[0].icon === '11d') {
        asigImg = imgWeather.d11;
    } else if (weather.weather[0].icon === '11n') {
        asigImg = imgWeather.n11;
    } else if (weather.weather[0].icon === '13d') {
        asigImg = imgWeather.d13;
    } else if (weather.weather[0].icon === '13n') {
        asigImg = imgWeather.n13;
    } else if (weather.weather[0].icon === '50d') {
        asigImg = imgWeather.d50;
    } else if (weather.weather[0].icon === '50n') {
        asigImg = imgWeather.n50;
    }

    const divStyle = {
        backgroundImage: `url(${asigImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.3s ease'
    };

    console.log(weather)

    return (
        <article className='App' style={divStyle}>
            <header className='title'>
                <h1 className='title_app'>Weather App</h1>
            </header>
            <section className='temp'>
                <div className="left">
                    <h3>{weather?.weather[0].description}</h3>
                    <img className='img_300px' src={weather && `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="img" />
                </div>
                <div className="right">

                    <ul>
                        <li><span className='title_description'>Wind Speed: </span><span>{weather?.wind.speed} m/s</span></li>
                        <li><span className='title_description'>Clouds: </span><span>{weather?.clouds.all} %</span></li>
                        <li><span className='title_description'>Pressure: </span><span>{weather?.main.pressure} hPa</span></li>
                    </ul>
                    <div className="info_temp">
                        <h4 className='temp_show'>{iscelcius ? `${temp?.celsius} °C` : `${temp?.farenheit} °F`}</h4>
                        <button className='button_change_temp' onClick={handleChangeTemp}>Change to {iscelcius ? '°F' : '°C'}</button>
                    </div>
                </div>
            </section>

            <section className='name'>
                <h2 className='nameh3'>{weather?.name}, {weather?.sys.country}</h2>
            </section>

            <Form action="formSearch" onSubmit={handleSubmit}>
                <FormControl type="text" id="inputValue" placeholder="...algun lugar?" />
                <Button className='button_search' type="submit">Search</Button>
            </Form>

            <section className='img_700px'>
                <img src={weather && `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="img" />
            </section>



        </article>
    )
}

export default WeatherCard