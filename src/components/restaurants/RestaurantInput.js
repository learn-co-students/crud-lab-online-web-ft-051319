import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ""
  }

  handleOnKeyDown(event){
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" value={this.state.text} onKeyPress={(event) => this.handleOnKeyDown(event)}/>
          {this.state.text}
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
