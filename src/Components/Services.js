import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import "./Services.css"

const Services = () => {
    return (
       <Container className="text-center">
           <h2> Services </h2>
           
           <Row> 
               <Col xs={6}>  <p> <Image width="280" height="280" src="https://images.unsplash.com/photo-1574197634772-f0de0d41a02e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" fluid/>  </p> </Col>
               <Col xs={6}>  <p fluid> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </Col>
           </Row>

           <Row>
                <Col xs={6}>  <p fluid> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </Col> 
                <Col xs={6}>  <p> <Image width="280" height="280" src="https://images.unsplash.com/photo-1574197634772-f0de0d41a02e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" fluid/> </p> </Col>
           </Row>

           <Row> 
               <Col xs={6}>  <p> <Image width="280" height="280" src="https://images.unsplash.com/photo-1574197634772-f0de0d41a02e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" fluid/> </p> </Col>
               <Col xs={6}>  <p fluid> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </Col>
           </Row>
       </Container>
    )
}

export default Services
