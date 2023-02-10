import React from "react";
import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import "../mainCSS/main.css";

class Weather extends React.Component {
  render() {
    // console.log("weather data: ", this.props.weather);
    return (
      <>
        <h2>Weather:</h2>
        {this.props.weather.map((weatherCast, index) => {
          return (
            <div key={index} className="float">

            
            <Card  style={{width: '12rem'}}  bg={'success'}>
              <CardHeader>{weatherCast.time}</CardHeader>
              <Card.Body>
                <Card.Title>{weatherCast.forecast}</Card.Title>
              </Card.Body>
            </Card>
            </div>
          );
        })}
      </>
    );
  }
}

export default Weather;
