import React, { Component } from 'react';
import './mainCSS/main.css';


 class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      citySearched: "",
    };
  }

   handleInput = (event) => {
      this.setState({
        citySearched: event.target.value,
      });
    }

    searchCityAPI = async (event) => {
      event.preventDefault();
      
      let searchCityURL = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.citySearched}&format=json`;
      
      console.log("🚀 ~ file: Main.js:24 ~ Main ~ searchCityAPI= ~ searchCityURL", searchCityURL);
      // let cityData = await axios.get(searchCityURL);

      // this.setState({

      // });
    }




  render() {
    console.log('city input in state', this.state.citySearched);
    return (
      <main>
      <form onSubmit={this.searchCityAPI}>
        <label>
          Search For City: 
          <input type="text" onInput={this.handleInput}/>
        </label>
        <button>Search</button>
      </form>
      </main>
    )
  }
}
   


export default Main;