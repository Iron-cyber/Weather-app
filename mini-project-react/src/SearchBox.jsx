
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';

export const SearchBox = ({updateInfo}) => {
    let[error,setError]=useState(false);
    const [city, setCity] = useState('');
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const API_KEY = '8cafb8ff2a4c270551fd8599cafd5bc7';

    const getWeatherInfo = async (cityName) => {
        try {
            const response = await fetch(`${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - City not found`);
            }
            const jsonResponse = await response.json();
           // console.log(jsonResponse);
            let result = {
                city:city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity:jsonResponse.main.humidity,
                feelsLike:jsonResponse.main.feels_Like,
                weather:jsonResponse.weather[0].description,
             } ;
        console.log (result);
        return result;
        } catch (error) {
            throw(error)
           // console.error('Error fetching weather data:', error.message);
        }
        
    
    };

    const handleChange =  (evt) => {
        setCity(evt.target.value);
    };

    const handleSubmit = async(evt) => {
      try{
        evt.preventDefault();
       console.log(city);
       setCity("");
       let newInfo =   await getWeatherInfo(city);
       updateInfo(newInfo);
      }catch(error){
        setError(true)
      }
    };

    return (
        <div className="search-box">
        <form onSubmit={handleSubmit}>
           
                <h3>Search For The Weather</h3>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    value={city}
                    onChange={handleChange}
                />
                <br />
                <br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
            {error &&<p style={{color:"red"} }>No such place exists</p> }
        </form>
        </div>
    );
};



