import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {
 
   handleDelete = () => {
    
     this.props.deleteRestaurant(this.props.restaurant.id)
  }
  
  render() {
   
    const {restaurant}  = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <button id={restaurant.id} onClick={this.handleDelete}> X </button>
          <ReviewsContainer restaurant={this.props.restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
