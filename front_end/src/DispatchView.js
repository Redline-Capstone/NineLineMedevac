import React from 'react';
import PropTypes from 'prop-types';
import Request from './Request';
import ResponderCreator from './ResponderCreator'
import './App.css';
import { Select } from 'react-dropdown-select'
import { Jumbotron, Table } from 'react-bootstrap'

const DispatchView = (props) => {


    return (
        <div>
            _____________________________________
            <br />
            Dispatch Table
            <br />
        
            <table class="dispatch-table">
            
                <tr class="dispatch-table">
                
                    <th class="dispatch-table">Select</th>
                    <th class="dispatch-table">Location</th>
                    <th class="dispatch-table">Callsign</th>
                    <th class="dispatch-table">Priority</th>
                    <th class="dispatch-table">Special Equipment</th>
                    <th class="dispatch-table">Patient Type</th>
                    <th class="dispatch-table">Security</th>
                    <th class="dispatch-table">hlzMarking</th>
                    <th class="dispatch-table">Nationality</th>
                    <th class="dispatch-table">NBC</th>
                   
                </tr>
               
        
                
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
            </table>
            <br />
            <h5>RESPONDERS</h5>
            <Select options={props.responderList} onChange={(choice) => props.setCurrentResponderAssignment(choice)} />
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
