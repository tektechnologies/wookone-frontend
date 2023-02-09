import React from 'react'




 class Weather extends React.Component {


  render() {
    console.log('weather data: ',this.props.weather);
    return (
      <div>Weather</div>
    )
  }
}


export default Weather;