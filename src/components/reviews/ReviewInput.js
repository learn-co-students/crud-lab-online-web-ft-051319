import React, { Component } from 'react';

class ReviewInput extends Component {
  state = {
    text: ''
  };

  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    
    const review = {
      text: this.state.text,
      restaurantId: this.props.restaurantId
    }
    this.props.addReview(review);
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        Review Input
        <form onSubmit={this.handleSubmit} >
          <input type="text" name="text" value={this.state.text} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
