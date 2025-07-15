import React from 'react'
import Card from '@mui/material/Card';
import './InfoBox.css'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export const InfoBox = ({info}) => {
 const INIT_URL= "https://images.unsplash.com/photo-1604424288891-7f0871867e09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGF6ZSUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
const COLD_URL="https://images.unsplash.com/photo-1640955788205-46267ab3b3cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww"
const HOT_URL="https://media.istockphoto.com/id/1465636556/photo/sun-in-the-sky.jpg?s=612x612&w=0&k=20&c=452sspuuvzp5LNz8xEGHJezxOq3e8z3jVuq4T7vgZ9c="
const RAIN_URL="https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww" 
return (
    <div className='Info-box'>

<div className='card-container'>
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={
            info.humidity > 80 
            ?RAIN_URL 
            : info.temp>15
            ?HOT_URL 
            : COLD_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}
         {
            info.humidity > 80 
            ?<ThunderstormIcon/>
            : info.temp>15
            ?<WbSunnyIcon/> 
            : <AcUnitIcon/>}
      
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p> Temperature= {info.temp}&deg;C</p>
          <p> Humidity= {info.humidity}</p>
          <p> Min Temp= {info.tempMin}&deg;C</p>
          <p> Max Temp= {info.tempMax}&deg;C</p>
          <p> The weather can be described as  <i><b>{info.weather}</b></i>  and feels like {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>

    </div>
  )
}
