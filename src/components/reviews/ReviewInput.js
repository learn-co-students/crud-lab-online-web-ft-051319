import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ""
  }

  handleOnChangeReview = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmitReview = (event) => {
    event.preventDefault()
    const review = {
      text: this.state.text,
      restaurantId: this.props.restaurantId
    }
    this.props.addReview(review)
    this.setState({
      text:""
    })
  }

  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitReview}>
          <input type="text" value={this.state.text} onChange={this.handleOnChangeReview}/>
          <input type="submit" value="Leave a Review"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
