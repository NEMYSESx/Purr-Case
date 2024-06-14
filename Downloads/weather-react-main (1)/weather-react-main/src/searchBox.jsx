import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css";
import { colors } from '@mui/material';
export default function SearchBox({updateInfo}){
    let URL = "http://api.openweathermap.org/data/2.5/weather"
    const KEY = "156e0e92c2471af060de2bf887a806c5"
    let [city,setcity] = useState("");
    let [error,seterror] = useState(false);

    let handleChange = (event) =>{
        setcity(event.target.value)
    }

    

    let getWeatherInfo = async() =>{
        try{

        let response = await fetch(`${URL}?q=${city}&appid=${KEY}&units=metric`)
        let jsonResponse = await response.json();
    
        let result ={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelslike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description

        }
        return result;
    }catch(err){
        throw err;
    }
    

    }

    let handlesubmit = async(event) =>{
        try{

        event.preventDefault();
        setcity("")
        let newInfo=  await getWeatherInfo();
        updateInfo(newInfo);
        seterror(false);
        }catch(err){

            seterror(true)

        }

    }


    return(
        <div className='SearchBox'>
            <form onSubmit={handlesubmit}>
            <h1>Weather App by Prince</h1>
                <TextField id="outlined-basic" label="city name" value={city} variant="outlined" required  onChange={handleChange}/>
                <br></br>
                <br></br>
                <Button variant="contained" type = "submit">
        search
      </Button>
      <br></br>
      <br></br>
<div>
{error && <p style= {{color :"red"}}>"No such place exists in my API"</p>}

</div>
      
                
            </form>
        </div>
    )
}