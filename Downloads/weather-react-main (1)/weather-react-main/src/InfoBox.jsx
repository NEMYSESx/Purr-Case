import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import WbSunnyIcon from '@mui/icons-material/WbSunny';
// import WaterDropIcon from '@mui/icons-material/WaterDrop';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
import "./InfoBox.css"

export default function InfoBox({info}){

  let Rain_url = "https://plus.unsplash.com/premium_photo-1666717576644-5701d3406840?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxyYWluJTIwZGF5fGVufDB8fDB8fHww";

  let Hot_url = "https://images.unsplash.com/photo-1541119638723-c51cbe2262aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VubnklMjBkYXl8ZW58MHx8MHx8fDA%3D";

  let Cold_url="https://images.unsplash.com/photo-1612476176796-37ee1a146c3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZCUyMGRheXxlbnwwfHwwfHx8MA%3D%3D";

    return(
        <div className='InfoBox' >
          <div  className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?Rain_url:(info.temp>20?Hot_url:Cold_url)}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {/* {info.humidity>80?<WaterDropIcon/>:(info.temp>20?<WbSunnyIcon/>:<AcUnitIcon/>)} */}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p>Temparature = {info.temp}&deg;C</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>The weather can be described as {info.weather} and it feelslike {info.feelslike}&deg;C</p>
          
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    )

}