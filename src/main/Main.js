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
      this.setState({
        error: false,
        cityData: cityData.data[0],
      });
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: `A Location error occurred: ${error.response.status}`,
      });
    }
  };

  render() {
    console.log("!!", this.state.cityData);

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
              <li>City Name: {this.state.cityData.display_name} </li>
              <li>Latitude: {this.state.cityData.lat} </li>
              <li>Longitude: {this.state.cityData.lon} </li>
            </ul>
            <image src={this.state.mapData} fluid />
          </>
        )}
      </main>
    );
  }
}

export default Main;
