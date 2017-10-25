import React,{Component} from 'react';
// const wash = {
//     main: {
//         display: 'flex',
//         justifyContent: '',
//         flexwrap: '',
    
//     },
//     item: {
//         width: '25%',
//         margin: '20px'

//     }
// }
class Assignment extends Component {
    render() {
        return(
            <div> 
                {/* washing={wash.main}> */}
                <img src="https://mobileimages.lowes.com/product/converted/887276/887276962993lg.jpg" alt="washing-1" width="400" height="370"/>
                <button type="button" onclick="alert('I am Samsung Washing Machine')">Samsung!</button>
                <img src="https://mobileimages.lowes.com/product/converted/048231/048231017497md.jpg" alt="washing-2" width="400" height="370"/>
                <button type="button" onclick="alert('I am LG washing Machine')">LG!</button>
                <img src="https://mobileimages.lowes.com/product/converted/887276/887276962887md.jpg" alt="washing-3" width="400" height="370"/>
                <button type="button" onclick="alert('I am Samsung 2 in 1')">Samsung!</button>
                <img src="https://mobileimages.lowes.com/product/converted/048231/048231017503lg.jpg" alt="washing-4" width="400" height="370"/>
                <button type="button" onclick="alert('I am LG new !')">LG-2!</button>
            </div>
        )
    }
} 
export default Assignment