import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const {reviews, restaurantId, deleteReview} = this.props 
    console.log("reviews component", this.props)
    const relatedReviews = reviews.filter(review => review.restaurantId === restaurantId)
    return (
      <ul>
        {relatedReviews.map(review=> <li><Review review={review} deleteReview={deleteReview}/></li>)}
      </ul>
    );
  }
};

export default Reviews;