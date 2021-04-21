import { Component } from 'react'
import PropTypes from 'prop-types';
import { Dropdown, Container, Img } from 'react-bootstrap'
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import './index.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BaseMap from "./BaseMap"

toast.configure()
class NineLineCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            callSign: '',
            patientUrgency: '',
            specialEquipment: '',
            patientType: '',
            security: '',
            hlzMarking: '',
            nationality: '',
            nbc: '',
            showMap: true,

        }
        this.onChangeValue = this.onChangeValue.bind(this);
        this.handleUrgency = this.handleUrgency.bind(this);
        this.handleEquipment = this.handleEquipment.bind(this);
        this.handleType = this.handleType.bind(this);
        this.handleSecurity = this.handleSecurity.bind(this);
        this.handleMarking = this.handleMarking.bind(this);
        this.handleNationality = this.handleNationality.bind(this);
        this.handleNBC = this.handleNBC.bind(this);
    }


    onChangeValue(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleUrgency(e) {
        let patientUrgency = e.target.value;
        this.setState({ patientUrgency: e.target.value });
        console.log(patientUrgency);
    }
    handleEquipment(e) {
        let specialEquipment = e.target.value;
        this.setState({ specialEquipment: e.target.value });
        console.log(specialEquipment);
    }
    handleType(e) {
        let patientType = e.target.value;
        this.setState({ patientType: e.target.value });
        console.log(patientType);
    }
    handleSecurity(e) {
        let security = e.target.value;
        this.setState({ security: e.target.value });
        console.log(security);
    }
    handleMarking(e) {
        let hlzMarking = e.target.value;
        this.setState({ hlzMarking: e.target.value });
        console.log(hlzMarking);
    }
    handleNationality(e) {
        let nationality = e.target.value;
        this.setState({ nationality: e.target.value });
        console.log(nationality);
    }
    handleNBC(e) {
        let nbc = e.target.value;
        this.setState({ nbc: e.target.value });
        console.log(nbc);
    }
    mapPosition(loc){
        this.setState({location:loc})
    }
    CompleteNineline = () => {
        toast.success('Your Nine Line has been submitted!', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000
        })

        var pType = ""
        if (this.state.litterNumber > 0) { pType += this.state.litterNumber + " A - Litter " }
        if (this.state.litterNumber > 0 || this.state.ambulatoryNumber > 0) { pType += ", " }
        if (this.state.ambulatoryNumber > 0) { pType += this.state.ambulatoryNumber + " B - Ambulatory" }

        this.props.handleNewRequest(
            {
                location: this.state.location,
                callSign: this.state.callSign,
                patientUrgency: "" + this.state.urgencyNumber + " " + this.state.patientUrgency,
                specialEquipment: this.state.specialEquipment,
                patientType: pType,
                security: " " + this.state.security,
                hlzMarking: " " + this.state.hlzMarking,
                nationality: " " + this.state.nationality,
                nbc: " " + this.state.nbc,
            }
        )

    }
    notifyError = () => {
        toast.warn('submit first five lines', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,

        })
        toast.warn('submit first five lines', {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 3000,

        })
    }


    render() {
        return (
            <div class="title-main">
                <h1><strong>Nine Line Request</strong></h1>
                <div class={this.state.showMap?"d-flex justify-content-center":"flex-left"} >
                    <fieldset onChange={this.onChangeValue}>
                        <table class="table table-bordered table-hover table-color w-50 p-4">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Line</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Section</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="table-required">
                                    <th scope="row">1</th>
                                    <td>
                                        Location
                                </td>
                                    <td>
                                        <input class="form-control" required defaultValue="Line 1" value={this.state.location} name="location">
                                        </input><button
                                            onClick={() => this.setState({ showMap: !this.state.showMap })}>map</button>
                                    </td>
                                </tr>
                                <tr class="table-required">
                                    <th scope="row">2</th>
                                    <td>Call Sign</td>
                                    <td>
                                        <input class="form-control" required defaultValue="Line 2" value={this.state.callSign} name="callSign"></input><br />
                                    </td>
                                </tr>
                                <tr class="table-required">
                                    <th scope="row">3</th>
                                    <td>
                                        Patient Urgency
                                </td>
                                    <td>
                                        <input type="number" name="urgencyNumber" min={0} max={10} value={this.state.urgencyNumber} />
                                        <select value={this.state.patientUrgency} onChange={this.handleUrgency}>
                                            <option value='Select one'>Select One</option>,
                                        <option value='A – Urgent'>A – Urgent</option>,
                                        <option value='B – Urgent Surgical'>B – Urgent Surgical</option>
                                            <option value='C – Priority'>C – Priority</option>
                                            <option value='D – Routine'>D – Routine</option>
                                            <option value='E – Convenience'> E – Convenience </option>
                                        </select>
                                    </td>
                                </tr>
                                <tr class="table-required">
                                    <th scope="row">4</th>
                                    <td>
                                        Special Equipment
                                </td>
                                    <td>
                                        <select value={this.state.specialEquipment} onChange={this.handleEquipment}>
                                            <option value='Select one'>Select One</option>,
                                        <option value='A – None'>A – None</option>,
                                        <option value='B – Hoist'>B – Hoist</option>
                                            <option value='C – Extraction equipment'>C – Extraction equipment</option>
                                            <option value='D – Ventilator'>D – Ventilator</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr class="table-required">
                                    <th scope="row">5</th>
                                    <td>
                                        Patient Type
                                </td>
                                    <td>
                                        <input type="number" name="litterNumber" min={0} max={10} value={this.state.litterNumber} onChange={this.onChangeValue} />
                                        <span> A – Litter </span>
                                        <input type="number" name="ambulatoryNumber" min={0} max={10} value={this.state.ambulatoryNumber} onChange={this.onChangeValue} />
                                        <span> B – Ambulatory </span>
                                    </td>
                                </tr>
                                <tr class="table-not-required">
                                    <th scope="row ">6</th>
                                    <td>
                                        Security
                                </td>
                                    <td>
                                        <select value={this.state.security} onChange={this.handleSecurity}>
                                            <option value='Select one'>Select One</option>,
                                        <option value='N – No enemy troops in area'>N – No enemy troops in area</option>,
                                        <option value='P – Possible enemy troops in area (approach with caution)'>P – Possible enemy troops in area (approach with caution)</option>
                                            <option value='E – Enemy troops in area (approach with caution)'>E – Enemy troops in area (approach with caution)</option>
                                            <option value='X – Enemy troops in area (armed escort required)'>X – Enemy troops in area (armed escort required)</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr class="table-not-required">
                                    <th scope="row">7</th>
                                    <td>
                                        hlzMarking
                                </td>
                                    <td>
                                        <select value={this.state.hlzMarking} onChange={this.handleMarking}>
                                            <option value='Select one'>Select One</option>,
                                        <option value='A – Panels'>A – Panels</option>,
                                        <option value='B – Pyrotechnic signal'>B – Pyrotechnic signal</option>,
                                        <option value='C – Smoke signal'>C – Smoke signal</option>,
                                        <option value='D – None'>D – None</option>,
                                        <option value='E – Other'>E – Other</option>,
                                    </select>
                                    </td>
                                </tr>
                                <tr class="table-not-required">
                                    <th scope="row">8</th>
                                    <td>
                                        Nationality
                                </td>
                                    <td>
                                        <select value={this.state.nationality} onChange={this.handleNationality}>
                                            <option value='Select one'>Select One</option>,
                                        <option value='A – US Military'>A – US Military</option>,
                                        <option value='B – US Civilian'>B – US Civilian</option>,
                                        <option value='C – Non-US Military'>C – Non-US Military</option>,
                                        <option value='D – Non-US Civilian'>D – Non-US Civilian</option>,
                                        <option value='E – EPW'>E – EPW</option>,
                                    </select>
                                    </td>
                                </tr>
                                <tr class="table-not-required">
                                    <th scope="row">9</th>
                                    <td>
                                        NBC
                                </td>
                                    <td>
                                        <select value={this.state.nbc} onChange={this.handleNBC}>
                                            <option value='Select one'>Select One</option>,
                                        <option value='None'>None</option>,
                                        <option value='N – Nuclear'>N – Nuclear</option>,
                                        <option value='B – Biological'>B – Biological</option>,
                                        <option value='C – Chemical'>C – Chemical</option>,
                                    </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="btn-light" onClick={() => {

                            (this.state.location &&
                                this.state.callSign &&
                                this.state.patientUrgency &&
                                this.state.specialEquipment &&
                                (this.state.litterNumber > 0 || this.state.ambulatoryNumber > 0)) ?
                                this.CompleteNineline()
                                : alert = this.notifyError()
                        }
                        }
                        >Submit</button>
                    </fieldset>
                </div>
                <div hidden={this.state.showMap} class="flex-right">
                    <BaseMap setLocation = {this.mapPosition.bind(this) }/>
                </div>
            </div >
        );

    }

}


export default NineLineCreator;