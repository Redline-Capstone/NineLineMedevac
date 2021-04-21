import React from 'react';
import PropTypes from 'prop-types';
import Request from './Request';
import ResponderCreator from './ResponderCreator'
import './App.css';
import { Select } from 'react-dropdown-select'
import { Jumbotron, Table } from 'react-bootstrap'
import BaseMap from "./BaseMap"

const DispatchView = (props) => {


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
            <Select options={props.responderList} onChange={(choice) => props.setCurrentResponderAssignment(choice)} />
            <br />

            <button onClick={() => { props.assignResponder(props.currentResponderAssignment) }}>Assign to Mission</button>
            {/* onChange={(choice) => this.setCurrentSelection(choice)}  */}
            <br />
___________________________________<br />
            <button onClick={() => props.toggleAddResponderButton()}>Add Responder</button>
            <br />
            <div hidden={!props.toggleAddResponder}>
                <ResponderCreator
                    addResponder={props.addResponder}

                />
            </div>
            <br />
___________________________________<br />
            <button onClick={() => props.toggleSummaryButton()}>Summary</button>
            <div hidden={!props.toggleSummary} >
                <h5> SUMMARY </h5>
                <div class="d-flex justify-content-center">
                    <table class="table table-bordered table-hover table-color w-50 p-4 flex-left">

                        <thead>
                            <tr class="dispatch-table">
                                <th class="dispatch-table" scope="col">Location</th>
                                <th class="dispatch-table" scope="col">Callsign</th>
                                <th class="dispatch-table" scope="col">Priority</th>
                                <th class="dispatch-table" scope="col">Special Equipment</th>
                                <th class="dispatch-table" scope="col">Patient Type</th>
                                <th class="dispatch-table" scope="col">Security</th>
                                <th class="dispatch-table" scope="col">hlzMarking</th>
                                <th class="dispatch-table" scope="col">Nationality</th>
                                <th class="dispatch-table" scope="col">NBC</th>
                                <th class="dispatch-table" scope="col">Responder</th>
                            </tr>
                        </thead>
                        <tbody>

                            {props.requests.map(
                                (request, index) => {
                                    if (request.responder !== "" && request.completed === true) {
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
                    <BaseMap class="flex-right"
                        requests={props.requests}
                        summary={true}
                    />
                </div>
            </div>
        </div>);

}

DispatchView.propTypes = {
    requests: PropTypes.array,

}

export default DispatchView;
