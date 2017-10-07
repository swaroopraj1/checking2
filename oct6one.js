import React from 'react'
function Listitem(props) {
    return<li> {props.value}</li>
}
class DetailsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.Listitems= props.details.map(
            (detail, index) => <Listitem key = {detail.id} value = {index.toString()+ "-" + detail.name}/>
        );
    }
    render() {
        return ( <ul>
                {this.Listitems}
            </ul>
            );
    }
}
const details = [{
                        id: "abcd",
                        name: "Swaroop",
                        title: "That's my name"
                    },
                    {
                        id: "efgh",
                        name: "Raj",
                        title: "That's my second name"
                    },
                    {
                        id: "ijkl",
                        name: "Seshi",
                        title: "That;s my friends name"
                    },
                    {
                        id: "mnop",
                        name: "Pavan",
                        title: "That's my friends name"
                    }
                ];
export default DetailsComponent;