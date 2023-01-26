import React, { Component } from "react";
import "./mainCSS/main.css";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SearchCityForm from "./SearchCityForm.js";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      citySearched: '',
      cityData: '',
      mapData: '',
      lat: '',
      lon: '',
      displayMap: false,
      displayError: false,
      errorMessage: '',
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

      this.setState({
          error: false,
          displayMap: true,
          cityData: cityData.data[0],
          lat: cityData.data[0].lat,
          lon: cityData.data[0].lon,
        },
        () =>{
          this.getMapData();
        }
      );
    } catch (error) {
      this.setState({
        displayMap: false,
        displayError: true,
        errorMessage: error.response.status + ': ' + error.response.data.error 
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
    console.log(this.state.errorMessage);
    return (
      <main>
        <Row>
          <Col>
            <SearchCityForm 
            searchCityAPI={this.searchCityAPI}
            handleCityInput={this.handleCityInput}
            error={this.state.displayError}
            errorMessage={this.state.errorMessage}
            />
          </Col>
        </Row>

        
          {this.state.displayMap && 
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
          }
     
      </main>
    );
  }
}

export default Main;
