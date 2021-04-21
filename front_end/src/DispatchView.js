import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Request from './Request';
import ResponderCreator from './ResponderCreator'
import './App.css';
import { Select } from 'react-dropdown-select'
import { Jumbotron, Table } from 'react-bootstrap'


const DispatchView = (props) => {
console.log(props.currentResponderAssignment, "hidie ho")

const [responderValue,  changeResponderValue] = useState(props.currentResponderAssignment)
    return (
       
        <div class="bg-light">
            <br />
            <h1>Dispatcher View Table</h1>
            <br />
            <table class="dispatch-table bg-white">
                <thead>
                    <tr class="dispatch-table">
                    
                        <th class="dispatch-table" scope="col">Select</th>
                        <th class="dispatch-table" scope="col">Location</th>
                        <th class="dispatch-table" scope="col">Callsign</th>
                        <th class="dispatch-table" scope="col">Priority</th>
                        <th class="dispatch-table" scope="col">Special Equipment</th>
                        <th class="dispatch-table" scope="col">Patient Type</th>
                        <th class="dispatch-table" scope="col">Security</th>
                        <th class="dispatch-table" scope="col">hlzMarking</th>
                        <th class="dispatch-table" scope="col">Nationality</th>
                        <th class="dispatch-table" scope="col">NBC</th>
                    
                    </tr>
                </thead>
                <tbody>
                
                {props.requests.map(
                    (request, index) => {
                        if (request.responder === "") {
                            return (
                                <Request
                                    key={index}
                                    requestObject={request}
                                    currentMissionAssignment={props.currentMissionAssignment}
                                    setCurrentMissionAssignment={props.setCurrentMissionAssignment}
                                    completeClick={props.completeClick}
                                />
                            )
                        }
                    }
                )}
                </tbody>
            </table>
            <br />
            <h5>RESPONDERS</h5>
            <Select options={props.responderList}  values={[{value:responderValue, label: responderValue}]} onChange={(choice) =>{
            changeResponderValue(choice[0].value)  
            console.log(choice, "inside select")  
            props.setCurrentResponderAssignment(choice)}} />

            
            <br/>
           
            <button onClick={() => { props.assignResponder(props.currentResponderAssignment) }}>Assign to Mission</button>
            {/* onChange={(choice) => this.setCurrentSelection(choice)}  */}
            <br />
___________________________________<br />
<button onClick={ ()=>props.toggleAddResponderButton()}>Add Responder</button>   
            <br/>
            <div hidden={!props.toggleAddResponder}>
<ResponderCreator 
          addResponder={props.addResponder}

        />
        </div>

        </div>);

}

DispatchView.propTypes = {
    requests: PropTypes.array,

}

export default DispatchView;
