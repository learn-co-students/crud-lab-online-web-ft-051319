import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    const restaurantReviews = this.props.reviews.filter(r => r.restaurantId === this.props.restaurant.id)
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addReview={this.props.addReview} />
        <Reviews reviews={restaurantReviews} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: review => dispatch({type: 'ADD_REVIEW', review}),
    deleteReview: id => dispatch({type: 'DELETE_REVIEW', id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
