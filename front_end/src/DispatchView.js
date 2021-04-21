import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Request from './Request';
import ResponderCreator from './ResponderCreator'
import './App.css';
import './index.css';
import { Select } from 'react-dropdown-select'
import { Jumbotron, Table } from 'react-bootstrap'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Summary from './Summary'

toast.configure()
const DispatchView = (props) => {
    console.log(props.currentResponderAssignment, "hidie ho")

    const [responderValue, changeResponderValue] = useState(props.currentResponderAssignment)

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
                <Select options={props.responderList} values={[{ value: responderValue, label: responderValue }]} onChange={(choice) => {
                    changeResponderValue(choice[0].value)
                    console.log(choice, "inside select")
                    props.setCurrentResponderAssignment(choice)
                }} />


                <br />

                <button className='btn-light' onClick={() => props.assignResponder(props.currentResponderAssignment)}

                >Assign to Mission</button>
                {/* onChange={(choice) => this.setCurrentSelection(choice)}  */}
                <br />
___________________________________<br />
                <button className='btn-light' onClick={() => props.toggleAddResponderButton()


                }
                >New Responder</button>
                <br />
                <div hidden={!props.toggleAddResponder}>
                    <ResponderCreator
                        addResponder={props.addResponder}

                    />
                </div>
                ___________________________________<br />
                <button className='btn-light' onClick={() => props.toggleSummaryButton()}>Summary</button>
                <div hidden={!props.toggleSummary} >
                    <Summary
                        requests={props.requests}
                        responderList={props.responderList}
                        toggleSummary={props.toggleSummary}
                    /></div>
            </div>

        </div>);

}

DispatchView.propTypes = {
    requests: PropTypes.array,

}

export default DispatchView;
