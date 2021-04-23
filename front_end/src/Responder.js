import Request from './Request';
import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'react-dropdown-select';

const Responder = (props) => {
    return (<div key={"responderdiv" + props.current} className = "divPadding"> 


        <div >
            <br />
            <h1>  {props.selectedResponderView} { (props.selectedResponderView === "Responder Table") ? "" : " Missions"} </h1>  
            <br></br>
            <Select className='dropDown' options={ props.responderList }  values={[{value:props.current, label: props.current}]} onChange={(choice) => props.setCurrentSelection(choice) }></Select>
            <br></br>

            <div className="container">

            <table className="table w-100 table-not-required table-bordered table-hover responder-scrollbar table-wrapper-scroll-y table-border-color">
                <thead className='thead-dark'>
                    <tr>

            {/* <th className="dispatch-table">Select</th> */}
                    <th class="sticky-header">Location</th>
                    <th class="sticky-header">Callsign</th>
                    <th class="sticky-header">Priority</th>
                    <th class="sticky-header">Special Equipment</th>
                    <th class="sticky-header">Patient Type</th>
                    <th class="sticky-header">Security</th>
                    <th class="sticky-header">Marking</th>
                    <th class="sticky-header">Nationality</th>
                    <th class="sticky-header">NBC</th>
                    <th class="sticky-header">Complete</th>
                    </tr>

        

            </thead>
            <tbody className='table-not-required'>

            {props.requests.map(
                (request, i) => {
                    if (request.responder === props.current && !request.completed) {
                        if (request.responder !== "") {
                        return (<Request
                             key={"" + request.id + i + request.responder + request.completed} 
                             requestObject={request} 
                             completeClick={props.completeClick} 
                             handoffClick={props.handoffClick} 
                        />
                        )
                    } else return ""
                }}
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
    handoffClick: PropTypes.func,
}

export default Responder;
