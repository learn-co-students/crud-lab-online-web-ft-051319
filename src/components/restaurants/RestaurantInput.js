import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ""
  }

  handleOnChange(event){
    
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit(event){
    event.preventDefault()
    let restaurant = {
      text: this.state.text
    }
    this.props.addRestaurant(restaurant)
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" value={this.state.text} onChange={(event) => this.handleOnChange(event)}/>
          <input type="submit" value="Add Restaurant"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
