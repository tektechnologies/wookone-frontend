import React, { Component } from "react";
import "./mainCSS/main.css";
import axios from "axios";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      citySearched: "",
      cityData: {},
      mapData: "",
      lat: "",
      lon: "",
    };
  }

  handleInput = (event) => {
    this.setState({
      citySearched: event.target.value,
    });
  };

  searchCityAPI = async (event) => {
    try {
      event.preventDefault();
      let searchCityURL = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.citySearched}&format=json`;
      let cityData = await axios.get(searchCityURL);
      this.setState(
        {
          error: false,
          cityData: cityData.data[0],
          lat: cityData.data[0].lat,
          lon: cityData.data[0].lon,
        },
        () => {
          this.getMapData();
        }
      );
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: `A Location error occurred: ${error.response.status}`,
      });
    }
  };

  getMapData = async () => {
    let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.lat},${this.state.lon}&size=${window.innerWidth}x300&format=jpg&zoom=12`;

    let mapDataResponse = await axios.get(mapURL);

    this.setState({
      mapData: mapDataResponse.config.url,
    });
  };

  render() {
    console.log(this.state.mapData);
    return (
      <main>
        <form onSubmit={this.searchCityAPI}>
          <label>
            Search For City:
            <input type="text" onInput={this.handleInput} />
          </label>
          <button>Search</button>
        </form>
        {this.state.error ? (
          <p>{this.state.errorMessage}</p>
        ) : (
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
          </>
        )}
      </main>
    );
  }
}

export default Main;
