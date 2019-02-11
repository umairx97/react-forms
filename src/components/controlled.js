import React, { Component } from "react";

class Controlled extends Component {
  state = {
    name: "",
    lastname: ""
  };

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handlelastnameChange = event => {
    this.setState({
      lastname: event.target.value
    });
  };

  onshandler = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onshandler}>
          <div className="form_element">
            <label> Enter Name</label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </div>

          <div className="form_element">
            <label> Enter Lastname</label>
            <input
              type="text"
              value={this.state.lastname}
              onChange={this.handlelastnameChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Controlled;
