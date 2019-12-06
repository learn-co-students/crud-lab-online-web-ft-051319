import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: '',
    restaurantId: this.props.restaurantId
  }

  handleOnChange= ({target}) => {
    this.setState({
      text: target.value,
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addReview(this.state);
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" value={this.state.text} onChange={this.handleOnChange}/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
