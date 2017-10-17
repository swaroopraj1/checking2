import React, { Component } from 'react';
//import injectTapEventPlugin from 'react-tap-event-plugin';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


//import logo from './logo.svg';
import logo from './abc.gif'
import abcd from './Swaroop.jpg'
import xyz from './wonderwoman.jpg'
import './App.css';
import Form from './matui.js';
import Converter from './liftingup.js';


// import Example from './todayoct3.js'
// import Welcome from './oct3.js';
import Watch from './oct4one.js';
import Toggle from './oct4two.js';
import LoginComponent from './oct5one.js';
import EmailComponent from './oct5two.js';
import SplitPaneComponent from './composition.js';
import MyBlog from './Router.js'
// import DetailsComponent from './oct6one.js';

//injectTapEventPlugin();



class App extends Component {
 
  // state = {
  //   fields: {}
  // };

  // onChange = updatedValue => {
  //   this.setState({
  //     fields: {
  //       ...this.state.fields,
  //       ...updatedValue
  //     }
  //   });
  // };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Swaroop's Reactor!</h1>
        </header>
          {/* <p className="App-intro">
          Testing under process!!!
          <p>You wont get the page right now. Don't worry, we will keep you posted ;)</p>
        </p>

        <Example name = "Swaroop"/>
        <Welcome name = "Seshi"/>
        <Welcome name = "Pavan"/>
        <Welcome/>    */}
        <Watch/>
        <Toggle/>
        <LoginComponent/>
        <EmailComponent newMessages= {["one","two","three","four"]}/>
        {<Form/>}
        {/* <DetailsComponent details= {details}/>  */}

        {/* <MuiThemeProvider>
        <div className="App">
          <Form onChange={fields => this.onChange(fields)} />
          <p>
            {JSON.stringify(this.state.fields, null, 2)}
          </p>
        </div>
      </MuiThemeProvider> */}
      <Converter/>
      <SplitPaneComponent/>
      <MyBlog/>
     
      
     
        


       

        <img src={abcd} className="App-abcd" alt="abcd" />
        <footer className="App-footer">
        <img src={xyz} className="App-xyz" alt="xyz" />
        <h1 className="App-title">Footer is here!</h1>
        </footer>
      </div>
    

    );
  }
}

export default App;
