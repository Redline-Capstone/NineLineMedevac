import './App.css';
import NineLineCreator from './NineLineCreator';
import Home from './routeComponents/Home'
import Responder from "./Responder";
import { Component } from 'react';
// import ResponderCreator from "./ResponderCreator";
import DispatchView from "./DispatchView";
// import { Dropdown,Container,Jumbotron } from 'react-bootstrap';
// import { Select } from 'react-dropdown-select';
// import Navigator from './Navigator';
import SWFlogo from './ThemedStyles/SF_logo_grayscale_dark_bg.png'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from "./routeComponents/Navigation";
import Footer from './routeComponents/Footer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

//with local repo
//const baseURL = "http://localhost:9090";
//with heroku
const baseURL = "https://frozen-retreat-75749.herokuapp.com";
// var sectionStyle = {
//   backgroundImage: `url(https://1.bp.blogspot.com/-McdZweoTlAQ/WxQdvQAIy_I/AAAAAAAA9Tg/-jJjF50Ig3Eug4i8fpqrj38oISudKDzlwCLcBGAs/s1600/medical-evacuation-medevac-documentary-mp4.jpg)` , 
//   backgroundRepeat: 'no-repeat' , //your welcome #w3schools ftw
//   backgroundSize: '100%' ,
//   backgroundPosition: "center top",
//   height: "400px" ,
//   width: '95%' ,
//   marginLeft: 'auto',
//   marginRight: 'auto',
//   align: "center", 
  
// }
// sectionStyle.background-size = 100%

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      requestList: [
        // { id: 1, location: "RC East", callSign: "SomeDude", patientUrgency: "Urgent", specialEquipment: "Jungle Penetrator", patientType: "litter", security: "N-none", hlzMarking:"smoke",nationality: "uniformed", nbc:"N-none",responder: "" },
        // { id: 2, location: "RC West", callSign: "SomeDude", patientUrgency: "Urgent", specialEquipment: "Jungle Penetrator", patientType: "litter", security: "N-none", hlzMarking:"smoke",nationality: "uniformed", nbc:"N-none",responder: "" },
        // { id: 3, location: "MSAB", callSign: "SomeDude", patientUrgency: "Urgent",  specialEquipment: "Jungle Penetrator", patientType: "litter", security: "N-none", hlzMarking:"smoke",nationality: "uniformed", nbc:"N-none",responder: "" },
        // { id: 4, location: "Al Asad AB", callSign: "SomeDude", patientUrgency: "Urgent",  specialEquipment: "Jungle Penetrator", patientType: "litter", security: "N-none", hlzMarking:"smoke",nationality: "uniformed", nbc:"N-none",responder: "DustOff 1" },
        // { id: 5, location: "Mission 7", callSign: "SmokeHound", patientUrgency: "Urgent Surgical",  specialEquipment: "Jungle Penetrator", patientType: "litter", security: "N-none", hlzMarking:"smoke",nationality: "uniformed", nbc:"N-none",responder: "" },
        // { id: 6, location: "Mission Zero", callSign: "SaveMe", patientUrgency: "Urgent",  specialEquipment: "Jungle Penetrator", patientType: "litter", security: "N-none", hlzMarking:"smoke",nationality: "uniformed", nbc:"N-none",responder: "DustOff 2" },
        // { id: 7, location: "MC", callSign: "done", patientUrgency: "none", responder: "DustOff 2", completed: true },
      ],
      responderList: [
        { value: "DustOff 1", label: "DustOff 1" },
        { value: "DustOff 2", label: "DustOff 2" }
        // { value: "Dispatch", label: "Dispatch" }
      ],
      // viewSelector: this.state.responderList.concat({ value: "Dispatch", label: "Dispatch" }),
      currentSelection: "",
      currentResponderAssignment: "",
      currentMissionAssignment: "",
      toggleNineLine: false,
      toggleDispatch: false,
      toggleResponder: false,
      toggleAddResponder: false,
      selectedResponderView: "Responder Table",
      toggleSummary: false,
    }
  }

  componentDidMount() {
    //Anything we want to run on application startup goes here.
    this.getRequests();
    this.getResponder();
  }

  getRequests() {
    //Our fetch request to the backend goes here, and we can call it later to update the state of the list after changes
    var url = baseURL+'/requests'

    // fetch( url , { method : "GET" } )
    // .then( response =>  response.json()  )
    // .then(  data => this.setState(  { requestList : data }  )  )

    //fetch request
    //then response => response.JSON()
    //then data => setState({requestList: data})

    this.goFetch(url, "GET", null, "requestList")
  }

  async getResponder(){
    var tempList = await this.goFetch(baseURL+"/responder", "GET" )
    var tempState = []
    for( var responder of tempList){
      tempState.push( { value: responder.name, label: responder.name} )
    }
    this.setState({responderList: tempState})
  }

  handleNewRequest(request) {
    //Sends POST Request to backend
    // console.log(request)
    //request.target.reset()
    const nineLine = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request)
    };
    fetch(baseURL+'/nineline', nineLine)
    .then(() => this.toggleNineLineButton())
    .then(() => this.getRequests())
    //setstate
    // let tempRequestList = this.state.requestList
    // request.complete = false;
    // request.responder = "";
    // request.id = 0; //need to make this match database
    // tempRequestList.push(request)
    // this.setState({requestList:tempRequestList})
    // this.goFetch("http://localhost:9090/nineline", "POST", request, "")

  }

  async completeButton(id) {
    //update db
    await this.goFetch(baseURL+"/requests/" + id, "PATCH", { completed: true }, "")
    // //update our data
    // var tempResponderList = this.state.responderList
    // //find my responder by id
    // var index = tempResponderList.findIndex( r => r.id == id)
    // //set him complete
    // tempResponderList.get(index).complete = true;

    // this.setState({responderList:tempResponderList})
    .then(() => this.getRequests())

  }

  addResponder(event) {
    var tempResponderList = this.state.responderList
    tempResponderList.push(event)
    this.setState({ responderList: tempResponderList })
    this.addedResponderAlert ()
    
    this.goFetch(baseURL+"/responder" , "POST", {id:0, name: event.value}, "")
    .then(this.setState({toggleAddResponder: !this.state.toggleAddResponder}))
  }

  //goFetch toUse:
  //give URL and Method of 'GET','PATCH','PUT'
  //If passing a body, give body object or leave {}
  //If using to set state, give state vairable name string or leave ""
  //if no state string, it will return the response body
  async goFetch(url, method, body, statekey) {
    var packet = { method: method, }
    if (body) {
      packet.body = JSON.stringify(body)
      packet.headers = { 'Content-Type': 'application/json' }
    }
    const response = await fetch(url, packet)
    // console.log("response", response)
    if (!response.ok) return false
    const data = await response.json() //JSON.stringify(response)//response.json() 
    // console.log("data", data)
    if (statekey) await this.setState({ [statekey]: data })
    else return await data //this.getRequests()
    return true
  }

  assignResponder(assignedResponder) {
    this.assignedMissionAlert()
    //Placeholder for our patch
    //Patches responder : assignedResponder
    // console.log(this.state.currentMissionAssignment)
    // console.log(assignedResponder)
    
    fetch(baseURL+'/requests/' + this.state.currentMissionAssignment.id, { method: 'PATCH', body: JSON.stringify({ responder: assignedResponder }), headers: { 'Content-Type': 'application/json' } })
    .then(() => this.getRequests()) // gets rid of race condition
    .then(() => this.setState({currentMissionAssignment: ""}))
    .then(() => this.setState({currentResponderAssignment: ""}))
  }

   assignedMissionAlert = () => {
    toast.success('Mission has been assigned!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000
    })
  }

  setCurrentSelection(choice) {
    this.setState({ currentSelection: choice[0].value })
    this.setState({ selectedResponderView: choice[0].value })
  }

  setCurrentResponderAssignment(choice) {
    // console.log(choice, "hiya")
    this.setState({ currentResponderAssignment: choice[0].value })
  }
    

  setCurrentMissionAssignment(choice) {
    this.setState({ currentMissionAssignment: choice })
    // console.log(choice);
    // console.log(this.state.currentMissionAssignment)
  }

  toggleNineLineButton(){
    this.setState({toggleNineLine:!this.state.toggleNineLine})
  }

  toggleDispatchButton(){
    this.setState({toggleDispatch:!this.state.toggleDispatch})
    this.getRequests()
  }

  toggleResponderButton(){
    this.setState({toggleResponder:!this.state.toggleResponder})
  }

  toggleAddResponderButton(){
    this.setState({toggleAddResponder:!this.state.toggleAddResponder})
  }

  toggleSummaryButton(){
    this.setState({toggleSummary:!this.state.toggleSummary})
  }

  addedResponderAlert = () => {
    toast.success('Responder has been added!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000
    })
}

  render() {
    return (

      <div className="App"  >
        <title>9 Line</title>
        <div style={{minHeight: 'max-content'}}>
        <Router>
          <Navigation />
          <Switch>
            <Route path="/home" exact component={() => <Home/>}></Route>
            <Route path="/" exact component={() => 
            <NineLineCreator
            handleNewRequest={this.handleNewRequest.bind(this)}
             />} />
            <Route path="/DispatchView" exact component={() =>
             <DispatchView  requests={this.state.requestList}
             setCurrentResponderAssignment={this.setCurrentResponderAssignment.bind(this)}
             responderList={this.state.responderList}
             assignResponder={this.assignResponder.bind(this)}
             currentResponderAssignment={this.state.currentResponderAssignment}
             currentMissionAssignment={this.state.currentMissionAssignment}
             setCurrentMissionAssignment={this.setCurrentMissionAssignment.bind(this)}
             addResponder={this.addResponder.bind(this)}
             toggleAddResponderButton={this.toggleAddResponderButton.bind(this)}
             toggleAddResponder={this.state.toggleAddResponder}
             toggleSummary = {this.state.toggleSummary}
             toggleSummaryButton = {this.toggleSummaryButton.bind(this)}
             onChange={(choice) => this.setCurrentSelection(choice)}                                             
            />} />
            <Route path="/Responder" exact component={() => 
            <Responder
            requests={this.state.requestList}
            completeClick={this.completeButton.bind(this)}
            current={this.state.currentSelection}
            onChange={(choice) => this.setCurrentSelection(choice)}
            responderList = { this.state.responderList } 
            setCurrentSelection = {this.setCurrentSelection.bind(this)}
            selectedResponderView =  {this.state.selectedResponderView}
            />} />
            
          </Switch>
          <Footer className= "white-text"><img className= "SWF-Logo"src={SWFlogo} align= "center" alt="SWF!"/></Footer>
        </Router>
      
      </div>
        {/* <Jumbotron fluid>
        <div class="Container"> 
            <div class="row">
              <div class="col-md-8 col-xs-8">
                {/* <img src="..."></img> */}
              
              


              {/* </div>
            </div>

          </div>
          
          <Container  >
            <div> 
            
            <h1>
            <strong className="title-main"> <img className= "AFC-Logo" src="https://1000logos.net/wp-content/uploads/2017/06/U.S.-Army-Logo.png" align="left"/>
                REDLINE MEDEVAC
              </strong>
              <img  className= "AFC-Logo"src='https://coders.army/assets/img/tech/AFC.png?h=c914384b26a11b63d203ccd8247ac508' align="right"/>
            </h1>

            </div>
            <p className="white-text"><strong>
              Medical Evacuation Application</strong></p>
            <p className="white-text"><strong>
            AFC Software Factory Capstone APR 2021
            </strong>
            </p>
          <div style={sectionStyle}></div>
          </Container>
        </Jumbotron> */} 

        {/* <Navigator /> */}

        <link rel="stylesheet" href="./styles/styles.scss"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" />

        {/* <button type ="button" className="btn-light btn-lg" onClick={()=> this.toggleNineLineButton()}><i class="fas fa-first-aid"></i>  Create New 9 Line <i class="fas fa-first-aid"></i>
        </button>{' '}
        {this.state.toggleNineLine?<NineLineCreator handleNewRequest={this.handleNewRequest.bind(this)} />:""}

        <hr /> */}

        {/* <button type ="button" className="btn-light btn-lg" onClick={()=> this.toggleDispatchButton()}> <i class="fas fa-notes-medical"></i> View Dispatch Controller <i class="fas fa-notes-medical"></i></button>{' '}
        {this.state.toggleDispatch?
            <DispatchView requests={this.state.requestList}
            setCurrentResponderAssignment={this.setCurrentResponderAssignment.bind(this)}
            responderList={this.state.responderList}
            assignResponder={this.assignResponder.bind(this)}
            currentResponderAssignment={this.state.currentResponderAssignment}
            currentMissionAssignment={this.state.currentMissionAssignment}
            setCurrentMissionAssignment={this.setCurrentMissionAssignment.bind(this)}
            addResponder={this.addResponder.bind(this)}
            toggleAddResponderButton={this.toggleAddResponderButton.bind(this)}
            toggleAddResponder={this.state.toggleAddResponder}
            onChange={(choice) => this.setCurrentSelection(choice)}
            />:""} */}


        

        {/* <hr />
        <button type ="button" className="btn-light btn-lg" onClick={()=> this.toggleResponderButton()}><i class="fas fa-helicopter fa-flip-horizontal"></i> Responder Controller <i class="fas fa-helicopter"></i></button>{' '}
        {
          this.state.toggleResponder ? */}
          
          {/* :
          "" */}
        {/* } */}
        {/* { this.state.toggleResponder ? <Responder
            requests={this.state.requestList}
            completeClick={this.completeButton.bind(this)}
            current={this.state.currentSelection}
            onChange={(choice) => this.setCurrentSelection(choice)}
          /> : ""} */}

        
      </div>
         
    );
  }

}


/*
//read me from back end----------------------

//Created by Joshua Schoonover and Rob Payne

CORS expecing port 3000
my port 9090

endpoints:
Dispatcher Controller:
Get /requests -get all
Get /requests/{id} -get by id, returns iterable<requests>
Patch /requests/{id} -patch by id, accepts responder (string), returns updated request

Responder Controller:
Get /responder/{name} - get all requests by responder id, returns iterable<requests>

Requester Controller:
Post /nineline - saves a nineline to the database, returns request

//--------------------------------------
NineLine:
    private String location;
    private String callSign;
    private String patientUrgency;
    private String specialEquipment;
    private String patientType;
    private String security;
    private String hlzMarking;
    private String nationality;
    private String nbc; //line9; //special

Request extends NineLine:
    private long id //table id
    private boolean completed
    private String responder //string for assigned responder


*/
 