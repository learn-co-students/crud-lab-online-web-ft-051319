import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  
   
  render() {
    return(
      <div>
      <ul>
       {this.props.restaurants.map(restaurant =>  <li><Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant}/></li>)}
      </ul>
      </div>
    );
  }
};

export default Restaurants;