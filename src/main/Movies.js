import React from 'react'

 class Movies extends React.Component {


  render() {
    console.log(this.props.movies);
    return (
      <div>Movies</div>
    )
  }
}

export default Movies;