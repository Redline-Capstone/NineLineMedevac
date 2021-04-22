import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Request from './Request';
import ResponderCreator from './ResponderCreator'
import './App.css';
import './index.css';
import { Select } from 'react-dropdown-select'
// import { Jumbotron, Table } from 'react-bootstrap'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Summary from './Summary'

toast.configure()
const DispatchView = (props) => {
    // console.log(props.currentResponderAssignment, "hidie ho")

    const [responderValue, changeResponderValue] = useState(props.currentResponderAssignment)

    function toastMe(){
        toast.warning('Please select a mission and a responder!', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000
        })
    }

    return (
        <div className = "divPadding">
            <br />
            <h1>Dispatcher View Table</h1>
            <br />

        <div className="container">
<table className="table w-100 table-not-required table-bordered table-hover my-custom-scrollbar table-wrapper-scroll-y">
                <thead className='thead-dark'>
                    <tr>
                        <th class="sticky-header">Select</th>
                        <th class="sticky-header">Location</th>
                        <th class="sticky-header">Callsign</th>
                        <th class="sticky-header">Priority</th>
                        <th class="sticky-header">Special Equipment</th>
                        <th class="sticky-header">Patient Type</th>
                        <th class="sticky-header">Security</th>
                        <th class="sticky-header">Marking</th>
                        <th class="sticky-header">Nationality</th>
                        <th class="sticky-header">NBC</th>

                    
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
                            } else return ""
                        }
                        )}
                </tbody>

            </table>
            <h5>RESPONDERS</h5>
            <Select className= 'dropDown' options={props.responderList}  values={[{value:responderValue, label: responderValue}]} onChange={(choice) =>{
            changeResponderValue(choice[0].value)  
            // console.log(choice, "inside select")  
            props.setCurrentResponderAssignment(choice)}} />

            
            <br/>
           
            <button className= 'btn-light' disabled={!props.currentResponderAssignment || !props.currentMissionAssignment} onClick={() =>  {
                props.currentResponderAssignment ? props.assignResponder(props.currentResponderAssignment): toastMe()
                }} >Assign to Mission</button>
            {/* onChange={(choice) => this.setCurrentSelection(choice)}  */}
            <br />

            <br />
                <button className='btn-light' hidden={props.toggleAddResponder} onClick={() => props.toggleAddResponderButton()


                }
                >New Responder</button>
                <br />
                <div hidden={!props.toggleAddResponder}>
                    <ResponderCreator
                        addResponder={props.addResponder}

                    />
                </div>
            <br />
                <button className='btn-light' onClick={() => props.toggleSummaryButton()}>Summary</button>
                <div hidden={!props.toggleSummary} >
                    <Summary
                        requests={props.requests}
                        responderList={props.responderList}
                        toggleSummary={props.toggleSummary}
                    />
                </div>
            </div>
            </div>
        
        );

}

DispatchView.propTypes = {
    requests: PropTypes.array,

}

export default DispatchView;
