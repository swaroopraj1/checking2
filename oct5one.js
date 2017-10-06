import React from 'react';
class LoginComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {loggedin: true};
    }
    handlelogout= () => {
        this.setState({loggedin: false});
    }
    handlelogin = () => {
        this.setState({loggedin: true});
    }
    render() {
        let button= null;
        let title = null;
        if(this.state.loggedin) {
            button = <button onClick= {this.handlelogout}> Login
                </button>
        } else {
            button = <button onClick= {this.handlelogin}> Logout
                </button>
        }
        title = this.state.loggedin ? <h2>Click on the magical button to Login! </h2>:<h2>em ledu kada! inkem Logout kotti paduko</h2>

        return (
            <div>
                <h1> This is Today's Task! </h1>
                {title}
                {button}
            </div>
        )
    }
}
export default LoginComponent;
