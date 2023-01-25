import React, { Component } from "react";
import "./mainCSS/main.css";
import axios from "axios";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      citySearched: "",
      cityData: {},
    };
  }

  handleInput = (event) => {
    this.setState({
      citySearched: event.target.value,
    });
  };

  searchCityAPI = async (event) => {
    event.preventDefault();
    let searchCityURL = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.citySearched}&format=json`;
    let cityData = await axios.get(searchCityURL);
    this.setState({
      cityData: cityData.data[0],
    });
  };

  render() {
    console.log('asdfasdf',this.state.cityData);

    // let cityDataRender = this.state.cityData.map((city, index) => {
    //   return <li key={index}>{city.display_name}</li>;
    // });

    return (
      <main>
        <form onSubmit={this.searchCityAPI}>
          <label>
            Search For City:
            <input type="text" onInput={this.handleInput} />
          </label>
          <button>Search</button>
        </form>


        {/* <ul>{cityDataRender}</ul> */}
      </main>
    );
  }
}

export default Main;
