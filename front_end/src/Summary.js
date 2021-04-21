import { Component } from 'react'
import { Select } from 'react-dropdown-select'
import Request from './Request'
import BaseMap from './BaseMap'

export default class Summary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentSummary: ""

        };

    }

    updateCurrentSummary(choice) {
        this.setState({ currentSummary: choice[0].value })
    }

    render() {
        var temp = this.props.requests
        temp.sort((a, b) => {
            let fa = a.responder.toLowerCase(),
                fb = b.responder.toLowerCase();
            if (fa < fb) { return -1; }
            if (fa > fb) { return 1; }
            return 0;
        })

        return (
            <div>
                <h1>SUMMARY</h1>
                <Select className= 'dropDown' options={this.props.responderList.concat({label:"All", value:"All"})} onChange={(choice) => { this.updateCurrentSummary(choice) }}></Select>

                {/* BO CODE */}
                {/* {this.state.currentSummary ?
                    temp.map(
                        (request, index) => {
                            if (this.state.currentSummary != 'All') {
                                if (request.responder === "") {
                                    return (
                                        <Request
                                            key={index}
                                            requestObject={request}
                                            setCurrentMissionAssignment={this.props.setCurrentMissionAssignment}
                                            completeClick={this.props.completeClick}
                                        />
                                    )
                                }
                            }
                        }
                    ) : ""} */}
                {/* TABLE CODE */}

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

                            {temp.map(
                                (request, index) => {
                                    console.log("if staet", this.state.currentSummary, request.responder, request.completed)
                                    if ( (this.state.currentSummary === 'All' || this.state.currentSummary === request.responder) && request.responder !== "" && request.completed === true) {
                                        return (
                                            <Request
                                                key={index}
                                                requestObject={request}
                                            // currentMissionAssignment={props.currentMissionAssignment}
                                            // setCurrentMissionAssignment={props.setCurrentMissionAssignment}
                                            // completeClick={props.completeClick}
                                            />
                                        )
                                    }
                                }
                            )}
                        </tbody>
                    </table>
                    <BaseMap class="flex-right"
                        requests={this.props.requests}
                        summary={true}
                    />
                </div>
            </div>


        );
    }
}