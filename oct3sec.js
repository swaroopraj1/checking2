import React, {Component} from 'react';
class Time extends Component
{
    constructor(Props)
{
    super(Props);
    this.state= {date: new Date() };
}
render()
{
    return <div>
        <h2>Current time is {new Date().toLocaleTimeString()}.</h2>
        <h2> Hello! today's Date is {this.state.date.toLocaleDateString()} </h2>
        </div>
}
}
export default Time;