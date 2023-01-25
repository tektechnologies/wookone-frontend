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
      this.setState = {
        citySearched: event.target.value,
      }
    }
  render() {
   
    return (
      <main>
      <form>
        <label>
          Search For City
          <input type="text" onInput={this.handleInput}/>
        </label>
      </form>
      </main>
    )
  }
}


export default Main;