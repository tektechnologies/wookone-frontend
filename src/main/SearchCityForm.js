import React, { Component } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";


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
          onChange={this.props.handleCityInput}
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
        <Button variant="success" type="submit">Search</Button>
      </form>
    );
  }
}

export default SearchCityForm;
