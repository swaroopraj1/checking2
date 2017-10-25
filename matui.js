import React from "react";
import TextField from "material-ui/TextField";
//import RaisedButton from "material-ui/RaisedButton";

export default class Form extends React.Component {
  state = {
    firstName: "Swaroop",
    lastName: "Gudipalli",
    username: "swaroopgudipalli",
    email: "swaroopgudipalli@gmail.com ",
    password: "Swaroop*123"
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: ""
    });
    this.props.onChange({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <form>
        <h1> This shouldnt be displaying like this! &#x2639; </h1>
        <TextField
        name="firstName"
        hintText="First name"
        floatingLabelText="First name"
        value={this.state.firstName}
        onChange={e => this.change(e)}
        floatingLabelFixed
      />
      <br />
      <TextField
        name="lastName"
        hintText="Last Name"
        floatingLabelText="Last Name"
        value={this.state.lastName}
        onChange={e => this.change(e)}
        floatingLabelFixed
      />
      <br />
      <TextField
        name="username"
        hintText="Username"
        floatingLabelText="Username"
        value={this.state.username}
        onChange={e => this.change(e)}
        floatingLabelFixed
      />
      <br />
      <TextField
        name="email"
        hintText="Email"
        floatingLabelText="Email"
        value={this.state.email}
        onChange={e => this.change(e)}
        floatingLabelFixed
      />
      <br />
      <TextField
        name="password"
        hintText="Password"
        floatingLabelText="Password"
        value={this.state.password}
        onChange={e => this.change(e)}
        type="password"
        floatingLabelFixed
      />
      <br />
      <button type="button" onclick={e=> this.onSubmit(e)} primary>Submit!</button>
    
        {/* {<RaisedButton label= "Submit" onClick={e=> this.onSubmit(e)} primary/>} */}
       
      </form>
    );
  }
}