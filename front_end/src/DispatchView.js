import React from 'react';
import PropTypes from 'prop-types';
import Request from './Request';
import ResponderCreator from './ResponderCreator'
import './App.css';
import './index.css';
import { Select } from 'react-dropdown-select'
import { Jumbotron, Table } from 'react-bootstrap'


const DispatchView = (props) => {


    return (
        <div>
            <br />
            <h1>Dispatcher View Table</h1>
            <br />
        <div class="container">
            <table class="table table-bordered tableMod table-hover table-color w-50 p-4" >
                <thead class='thead-dark'>
                    <tr>
                        <th>Select</th>
                        <th>Location</th>
                        <th>Callsign</th>
                        <th>Priority</th>
                        <th>Special Equipment</th>
                        <th>Patient Type</th>
                        <th>Security</th>
                        <th>hlzMarking</th>
                        <th>Nationality</th>
                        <th>NBC</th>
                        
                    
                    </tr>
                </thead>
                <tbody class='table-not-required'>
                
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
            <Select options={props.responderList} onChange={(choice) => props.setCurrentResponderAssignment(choice)} />
            <br/>
           
            <button onClick={() => { props.assignResponder(props.currentResponderAssignment) }}>Assign to Mission</button>
            {/* onChange={(choice) => this.setCurrentSelection(choice)}  */}
            <br />
___________________________________<br />
<button onClick={ ()=>props.toggleAddResponderButton()}>New Responder</button>   
            <br/>
            <div hidden={!props.toggleAddResponder}>
<ResponderCreator 
          addResponder={props.addResponder}
          
          />
        </div>
</div>

        </div>);

}

DispatchView.propTypes = {
    requests: PropTypes.array,

}

export default DispatchView;
