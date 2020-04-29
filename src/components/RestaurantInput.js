import React, { Component } from 'react';
import { addRestaurant } from '../actions/restaurants';
import { connect } from 'react-redux';

export class RestaurantInput extends Component {

  state = {
    name: '',
    location: ''
  }

  handleOnChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  
  // handleOnLocationChange = event => {
  //   debugger
  //   this.setState({
  //     location: event.target.value
  //   });
  // }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state)
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnChange(event)}
            id="name"
            placeholder="restaurant name" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnChange(event)}
            id="location"
            placeholder="location" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...dispatch.restaurants,
    addRestaurant: (restaurant) => dispatch(addRestaurant(restaurant))
  }
}

export default connect(null, mapDispatchToProps)(RestaurantInput)
