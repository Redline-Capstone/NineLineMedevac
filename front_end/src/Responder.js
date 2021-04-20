import Request from './Request';
import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'react-dropdown-select';

const Responder = (props) => {
    return (<div key={"responderdiv" + props.current}> 
    <Select options={ props.responderList } onChange={(choice) => props.setCurrentSelection(choice) }/>
        <h5>  Responder Table</h5>  
        <table class="responder-table">
            <tr class="responder-table">
            {/* <th class="dispatch-table">Select</th> */}
                    <th class="responder-table">Location</th>
                    <th class="responder-table">Callsign</th>
                    <th class="responder-table">Priority</th>
                    <th class="responder-table">Special Equipment</th>
                    <th class="responder-table">Patient Type</th>
                    <th class="responder-table">Security</th>
                    <th class="responder-table">hlzMarking</th>
                    <th class="responder-table">Nationality</th>
                    <th class="responder-table">NBC</th>
                    <th class="responder-table">Complete</th>
            </tr>
        
            {props.requests.map(
                (request, i) => {
                    if (request.responder === props.current && !request.completed) {
                        return (<Request key={"" + request.id + i + request.responder + request.completed} requestObject={request} completeClick={props.completeClick} />

                        )
                    }
                })}
        </table>
    </div>);
}






Responder.propTypes = {
    requests: PropTypes.array,
    completeClick: PropTypes.func,
    current: PropTypes.string,
}

export default Responder;
