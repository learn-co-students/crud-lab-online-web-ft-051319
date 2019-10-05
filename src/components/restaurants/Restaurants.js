import React, { Component } from 'react';
import Restaurant from './Restaurant'
import {connect} from 'react-redux'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map(res=><Restaurant restaurant={res} deleteRestaurant={this.props.deleteRestaurant} />)}
      </ul>
    );
  }
};

export default Restaurants;
