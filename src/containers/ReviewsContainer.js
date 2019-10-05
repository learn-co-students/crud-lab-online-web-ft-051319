import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import {connect} from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    debugger;
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurant={this.props.restaurant}/>
        <Reviews deleteReview={this.props.deleteReview} restaurant={this.props.restaurant} reviews={this.props.restaurant.reviews}/>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  addReview: (review,id) => dispatch({type: "ADD_REVIEW", text: review , restaurantId: id}),
  deleteReview: id => dispatch({type: "DELETE_REVIEW", restaurantId: id})
})

export default connect(null, mapDispatchToProps)(ReviewsContainer)
