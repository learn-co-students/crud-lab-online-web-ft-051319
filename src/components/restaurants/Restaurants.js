import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
   
  render() {
    console.log(this.props, "props")
    return(
      <ul>
        {this.props.restaurants.map(restaurant => <Restaurant key={restaurant.id} text={restaurant.text}/>)}
      </ul>
    );
  }
};

export default Restaurants;