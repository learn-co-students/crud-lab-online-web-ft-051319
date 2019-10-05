import React, { Component } from 'react';
import {connect} from 'react-redux';

class RestaurantInput extends Component {

  state={
    text: ''
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = event =>{
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form className="restaurant-details" onSubmit={this.handleOnSubmit}>
          <label>Restaurant Name: </label>
          <input type="text" name="text" value={this.state.text} onChange={this.handleOnChange}/>
          <input type="submit" value="Add New Restaurant"/>
        </form>
      </div>
    );
  }
};


export default RestaurantInput;
