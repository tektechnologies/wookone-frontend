import React, { Component } from "react";
import Alert from "react-bootstrap/Alert";


class SearchCityForm extends Component {

  searchCityValue = (event) => {
    event.preventDefault();
    this.props.searchCityAPI();
  };


  render() {
    return (
      <form onSubmit={this.searchCityValue}>
        <label>
          Search For City:
          <input 
          type="text" 
          onInput={this.props.handleInput}
          placeholder="Enter a City"
           />
        </label>
        {this.props.error && 
          <>
            <Alert variant="danger">
              <strong className="mr-auto">Error {' '}</strong>
              {this.props.errorMessage}, please try another search.
            </Alert>
          </>
        }
        <button>Search</button>
      </form>
    );
  }
}

export default SearchCityForm;
