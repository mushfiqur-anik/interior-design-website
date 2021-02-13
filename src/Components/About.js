import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import "./About.css"

const About = () => {
    return (
        <div className="about" className="text-center">
            <h1> This is the about section </h1>
            <p> 
LOREM IPSUM GENERATOR
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

<h3> Words from board of directors </h3>

<Container className="text-center"> 
    <Row> 
        <Col> 
          <Image width="200" height="200" roundedCircle src="https://images.unsplash.com/photo-1567141600768-881ed715e2ef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"/> 
          <h4> Mushfiqur </h4>
          <p> orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l</p>
        
         </Col>
         <Col> 
          <Image width="200" height="200" roundedCircle src="https://images.unsplash.com/photo-1567141600768-881ed715e2ef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"/> 
          <h4> Mushfiqur </h4>
          <p> orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l</p>
        
         </Col>
         <Col> 
          <Image width="200" height="200" roundedCircle src="https://images.unsplash.com/photo-1567141600768-881ed715e2ef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"/> 
          <h4> Mushfiqur </h4>
          <p> orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l</p>
        
         </Col>
    </Row>

</Container>


        </div>
    )
}

export default About
