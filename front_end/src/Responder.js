import Request from './Request';
import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'react-dropdown-select';

const Responder = (props) => {
    return (<div key={"responderdiv" + props.current}> 


        <div className = "divPadding">
            <br />
            <h1>  {props.selectedResponderView} { (props.selectedResponderView == "Responder Table") ? "" : " Missions"} </h1>  
        
            <Select className='dropDown' options={ props.responderList }  values={[{value:props.current, label: props.current}]} onChange={(choice) => props.setCurrentSelection(choice) }></Select>
           

            <div class="container">

            <table class="table table-bordered table-hover table-color w-100 p-4"align= 'center' >
                <thead class='thead-dark'>
                    <tr>

            {/* <th class="dispatch-table">Select</th> */}
                    <th>Location</th>
                    <th>Callsign</th>
                    <th>Priority</th>
                    <th>Special Equipment</th>
                    <th>Patient Type</th>
                    <th>Security</th>
                    <th>Marking</th>
                    <th>Nationality</th>
                    <th>NBC</th>
                    <th>Complete</th>
            </tr>

        

            </thead>
            <tbody class='table-not-required'>

            {props.requests.map(
                (request, i) => {
                    if (request.responder === props.current && !request.completed) {
                        return (<Request key={"" + request.id + i + request.responder + request.completed} requestObject={request} completeClick={props.completeClick} 
                        />
                        )
                    }
                }
                )}
        </tbody>
        </table>
        </div>
        </div>
    </div>);
}






Responder.propTypes = {
    requests: PropTypes.array,
    completeClick: PropTypes.func,
    current: PropTypes.string,
}

export default Responder;
