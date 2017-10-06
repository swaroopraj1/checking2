import React from 'react'
class EmailComponent extends React.Component {
    constructor(props) {
        super(props)
    }  
    render() {
        return (
            <div>
            <h1> idi unko task!</h1>
            <h2> No of Emails</h2>
            {this.props.newMessages.length> 0 && <h2> You have {this.props.newMessages.length} New Messages!
                </h2>}
        </div>
        )
    }
}
export default EmailComponent;
