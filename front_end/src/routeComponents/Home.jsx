import { Container,Jumbotron } from 'react-bootstrap';


var sectionStyle = {
    backgroundImage:`url(https://1.bp.blogspot.com/-McdZweoTlAQ/WxQdvQAIy_I/AAAAAAAA9Tg/-jJjF50Ig3Eug4i8fpqrj38oISudKDzlwCLcBGAs/s1600/medical-evacuation-medevac-documentary-mp4.jpg)` , 
    backgroundRepeat: 'no-repeat' , //your welcome #w3schools ftw
    backgroundSize: '100%' ,
    backgroundPosition: "center top",
    height: "400px" ,
    width: '101%' ,
    marginLeft: 'auto',
    marginRight: 'auto',
    align: "center", 
    
  }

const Home = () => {

    return (
        <Jumbotron fluid-max>
      <div className="Container" scroll-behaviour= 'smooth'> 
        
            <div claclassNamess="row">
              <div className="col-md-8 col-xs-8">
                {/* <img src="..."></img> */}
              </div>
            </div>
          </div>
          <Container>
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
        </Jumbotron>
    );
}

export default Home