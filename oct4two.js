import React from 'react';
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {ToggleOn: true, ToggleOff: true};
        this.handleClick = this.handleClick.bind(this);
        this.handleClick1 = this.handleClick1.bind(this);
}
handleClick() {
    this.setState(prevState => ({
        ToggleOn: !prevState.ToggleOn 
    }));
}
handleClick1() {
    this.setState(prevState => ({
        ToggleOff: !prevState.ToggleOff
      }));
}
render() {
    return ( 
        <div>
            <h2> Idi unkoka program output "&#8595;"</h2>
        <button onClick={this.handleClick}>
            {this.state.ToggleOn ? 'PressMe!' : 'Emledle po'}
                </button>
                <br/> 
                <br/>
                <br/>
        <button onClick= {this.handleClick1}>
            {this.state.ToggleOff ? 'Cick here to win!': 'Bale win ayinav le'}
            </button>
        </div>
        );
    }
}
export default Toggle;