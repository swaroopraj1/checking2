import React, {Component} from 'react';
class Watch extends Component
{
    constructor(Props)
{
    super(Props);
    this.state= {date: new Date() };
}
ComponentDidMount() {
    this.timerID = setInterval(
        () => this.tick(),
        1000
      );

}
ComponentDidUnMount() {
    clearInterval(this.timerID);
}
tick() {
    this.setState({
        date:new Date()
    });
}
render()
{
    return <div>
        <h1> Hammayyya print ayyindi. Phew!! </h1>
        <h2>Current time is {new Date().toLocaleTimeString()}.</h2>
        <h2> Hello! today's Date is {this.state.date.toLocaleDateString()} </h2>
        </div>
}
}
export default Watch;