import React from 'react'

class SplitPaneComponent extends React.Component {
    render() {
        return (
            <div>
            <p> Composition Oct 12 2017</p>
            <p>&#8595;</p>
            {this.props.left}
            {this.props.right}
            {this.props.up}
            {this.props.down}
            {<LeftComponent/>}
            {<RightComponent/>}
            {<UpComponent />}
            {<DownComponent />}
            </div>
        );
    }
}
function LeftComponent (props) {
    return (
        <div className='blue'>
            Welcome 
            </div>
    );
}
function RightComponent (props) {
    return (
        <div className="red">
            to 
            </div>
    );
}
function UpComponent (props) {
    return (
        <div className='brown'>
            my
            </div>
    );
}
function DownComponent (props){
    return(
        <div className='silver'>
            World
            </div>
    );
}




export default SplitPaneComponent