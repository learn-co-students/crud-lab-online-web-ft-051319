import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    const restaurants = this.props.restaurants.map(r => {
      return <Restaurant key={r.id} restaurant={r} deleteRestaurant={this.props.deleteRestaurant} />
    })
    return(
      <ul>
        Restaurants Component
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;