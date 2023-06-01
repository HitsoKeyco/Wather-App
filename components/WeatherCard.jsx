import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react'
import { Button, Form, FormControl} from 'react-bootstrap';

const WeatherCard = ({ weather, temp, handleSubmit }) => {

    const [iscelcius, setIscelcius] = useState(true)


    const handleChangeTemp = () => {
        setIscelcius(!iscelcius)
    }






    return (
        <article className='App'>
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