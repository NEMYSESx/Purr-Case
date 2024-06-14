import SearchBox from "./searchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function Weather(){
    let [weatherInfo,setweatherInfo] = useState({
        city :"Mumbai",
        temp : 29.99,
        tempMin : 28.94,
        tempMax : 29.99,
        humidity :84,
        weather : "mist",
        feelslike: 36.99,
    });

    let updateInfo=(newInfo)=>{

        setweatherInfo(newInfo);

    }
    
    return(
        <div>

          

            <SearchBox updateInfo={updateInfo} />
            <InfoBox info = {weatherInfo} />

        </div>
    )
}