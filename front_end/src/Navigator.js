import React from 'react'
import PropTypes from 'prop-types'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


// Documentation for Navs: https://react-bootstrap.github.io/components/navs/

// Documentation for Tabs: https://react-bootstrap.github.io/components/tabs/

const Navigator = props => {
    return (
        <div>
            <Tab.Container id="tabs" defaultActiveKey="first">
                <Row>
                    <Col>
                        <Nav variant="tabs" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first"><strong>Submit Request</strong></Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col>
                        <Nav variant="tabs" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="second"><strong>Responder View</strong></Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col>
                        <Nav variant="tabs" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="third"><strong>Dispatcher View</strong></Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

Navigator.propTypes = {

}

export default Navigator




