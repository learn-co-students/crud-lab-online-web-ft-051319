import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviews = this.props.reviews.map(r => <Review key={r.id} review={r} deleteReview={this.props.deleteReview} />)
    return (
      <ul>
        Reviews
        {reviews}
      </ul>
    );
  }
};

export default Reviews;