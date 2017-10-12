import React from 'react'

class Converter extends React.Component {
    constructor(props) {
        super(props)
        this.state= { scale:'c', temp:0}
    }
    handleCelcius = (e) => {
        this.setState({scale: 'c', temp:e.target.value})
    }
    handleFahrenheit = (e) => {
        this.setState({scale:'f', temp:e.target.value})
    }
    render() {
        const temp = this.state.temp;
        const scale = this.state.scale;
        const celcius = scale === 'f' ? convert(temp, toCelcius) : temp;
        const fahrenheit = scale === 'c' ? convert (temp, toFahrenheit) : temp; 
        return (
            <div>
                <hr/>
                <h2>Enter the temperature in Celcius</h2>
                <h2> &#8595; </h2>
                <InputTemperature  scale name= "Celcius" value = {celcius} func= {this.handleCelcius}/>
                <h2> Or you can even enter the temperature in Fahrenheit here </h2>
                <h2> &#8595; </h2>
                <InputTemperature scale name= "Fahrenheit" value = {fahrenheit} func= {this.handleFahrenheit}/>
            </div>
        )
    }
}
function convert (temp, convertfunction) {
    return convertfunction(temp)
}
function toCelcius (fahrenheit){
    return (fahrenheit-32)*5/9
}
function toFahrenheit (celcius) {
    return (celcius*9/5)+32
}



class InputTemperature extends React.Component {
    render() {
        return (
            <fieldset>  
                <input value= {this.props.value} onChange= {this.props.func}/>
            </fieldset>
        )
    }
}

export default Converter;
