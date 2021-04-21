import { Component } from 'react'

export default class Summary extends Component{
    constructor(props){
        super(props)
        this.state = {
            currentSummary:""

        };
        
    }

    updateCurrentSummary(choice){
        this.setState({currentSummary:choice})
    }

    render(){
        let temp = this.props.requests
        temp.sort((a,b) =>{
            let fa = a.responder.toLowerCase(),
                fb = b.responder.toLowerCase();
        
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        })
        return(
        <div>
            <h1>SUMMARY</h1>
            <Select options={this.props.responderList.concat("All")} onChange={(choice)=>{this.updateCurrentSummary(choice)}}></Select>
            {this.state.currentSummary?
            this.props.temp.map(
                    (request, index) => {
                        if(this.state.currentSummary != 'All'){
                            if (request.responder === "") {
                                return (
                                    <Request
                                    key={index}
                                    requestObject={request}
                                    setCurrentMissionAssignment={props.setCurrentMissionAssignment}
                                    completeClick={props.completeClick}
                                    />
                                    )
                                }
                            }}
                        ):""}
        </div>
        );}
}