import React, {Component} from 'react';
class Example extends Component
{
    render ()
    {
        return(
            <h1> Hello, my name is {this.props.name} </h1>
        );
    }
}
export default Example;