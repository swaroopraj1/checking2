import React from 'react';
class LoginComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {loggedin: true};
    }
    handlelogout= () => {
        this.state({loggedin: true});
    }
    handlelogin = () => {
        this.state({loggedin: true});
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
        title = this.state.loggedin ? <h2>You are not logged in</h2>:<h2>Log in!</h2>

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
