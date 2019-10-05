import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state={
    text:''
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addReview(this.state.text, this.props.restaurant.id)
    this.setState({
      text:''
    })
  }

  render() {
    return (
      <div>
        <form className='review-details' onSubmit={this.handleOnSubmit}>
          <label>Review: </label>
          <input type="text" onChange={this.handleOnChange} value={this.state.text}/>
          <input type="submit" value="Submit Review" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
