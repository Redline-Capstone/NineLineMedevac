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
            <div class="justify-content-center">
                <h1>SUMMARY</h1>

                <Select className= 'dropDown' options={this.props.responderList.concat({label:"All", value:"All"})} onChange={(choice) => { this.updateCurrentSummary(choice) }}></Select>

                <div class="d-flex justify-content-center">
                    <div class="flex-left">
                        <table class="table table-bordered table-hover table-color w-100 p-4 table-wrapper-scroll-y my-custom-scrollbar">

                            <thead class='thead-dark'>
                                <tr>
                                    <th>Location</th>
                                    <th>Callsign</th>
                                    <th>Priority</th>
                                    <th>Special Equipment</th>
                                    <th>Patient Type</th>
                                    <th>Security</th>
                                    <th>Marking</th>
                                    <th>Nationality</th>
                                    <th>NBC</th>
                                    <th>Responder</th>
                                </tr>                            </thead>
                            <tbody class='table-not-required'>

                                {temp.map(
                                    (request, index) => {
                                        // console.log("if staet", this.state.currentSummary, request.responder, request.completed)
                                        if ((this.state.currentSummary === 'All' || this.state.currentSummary === request.responder) && request.responder !== "" && request.completed === true) {
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
                        </table></div>
                    <BaseMap key={"summaryMap"+this.state.currentSummary} 
                    class="flex-right"
                    currentSummary={this.state.currentSummary}
                        requests={this.props.requests}
                        summary={true}
                    />
                </div>
            </div>


        );
    }
}