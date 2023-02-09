import React, { Component } from "react";
import "./mainCSS/main.css";
import axios from "axios";
import SearchCityForm from "./components/SearchCityForm.js";
import Weather from './components/Weather.js'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      citySearched: "",
      cityData: "",
      mapData: "",
      lat: "",
      lon: "",
      weather: [],
      displayMap: false,
      displayError: false,
      errorMessage: "",
    };
  }

  handleCityInput = (event) => {
    this.setState({
      citySearched: event.target.value,
    });
  };

  searchCityAPI = async () => {
    console.log(this.state.citySearched);
    try {
      let searchCityURL = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.citySearched}&format=json`;

      let cityData = await axios.get(searchCityURL);

      this.setState(
        {
          error: false,
          displayMap: true,
          cityData: cityData.data[0],
          lat: cityData.data[0].lat,
          lon: cityData.data[0].lon,
        },
        () => {
          this.getMapData();
        }
      );
      this.getWeatherData(cityData.data[0].lat, cityData.data[0].lon);
    } catch (error) {
      this.setState({
        displayMap: false,
        displayError: true,
        errorMessage: error.response.status + ": " + error.response.data.error,
      });
    }
    this.getMoviesData();
  };
  getMapData = async () => {
    let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.lat},${this.state.lon}&size=${window.innerWidth}x300&format=jpg&zoom=12`;
    let mapDataResponse = await axios.get(mapURL);
    this.setState({
      mapData: mapDataResponse.config.url,
    });
  };

  getWeatherData = async (lat, lon) => {
    try {
      let serverURL = `${process.env.REACT_APP_SERVER_LOCAL}/weather?lat=${lat}&lon=${lon}`;

      let weatherResults = await axios.get(serverURL);
      this.setState({
        weather: weatherResults.data
      })
    } catch (error) {
      this.setState({
      displayMap: false,
      displayError: true,
      errorMessage: error.response && error.response.status
      });
      
    }
  };

  getMoviesData = async () => {
    console.log('hit the movies function');
    // let serverURL = `${process.env.REACT_APP_SERVER_LOCAL}/movies?`;
    // let movieResults = await axios.get(serverURL);
    // console.log("🚀 ~ file: Main.js:88 ~ Main ~ getMoviesData= ~ movieResults", movieResults);

  };

  render() {
    // console.log(this.state.weather);
    return (
      <main>
       
          
            <SearchCityForm
              searchCityAPI={this.searchCityAPI}
              handleCityInput={this.handleCityInput}
              error={this.state.displayError}
              errorMessage={this.state.errorMessage}
            />
          
        

        {this.state.displayMap && (
          <>
            <ul>
              <li>City Name: {this.state.cityData.display_name}</li>
              <li>Latitude: {this.state.cityData.lat}</li>
              <li>Longitude: {this.state.cityData.lon}</li>
            </ul>

            <img
              src={this.state.mapData}
              alt={this.state.cityData.display_name}
            />

          <Weather weather={this.state.weather}/>

          </>
        )}
      </main>
    );
  }
}

export default Main;
