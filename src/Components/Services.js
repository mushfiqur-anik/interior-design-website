import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import "./Services.css"

const Services = () => {
    return (
       <Container className="text-center">
           <h2> 
               Our Services
               <hr className="line"/>  
            </h2>
           
           <Row> 
               <Col xs={6}> 
                     <p> <Image width="320" height="320" src="https://images.unsplash.com/photo-1544457070-4cd773b4d71e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1443&q=80" fluid/>  </p>
               </Col>
               <Col xs={6}>  
                     <h1 className="h"> Header </h1>
                     <p fluid> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
               </Col>
           </Row>

           <Row>
               <Col xs={6}>  
                     <h1 className="h"> Header </h1>
                    <p fluid> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
                </Col>
               <Col xs={6}>  
                     <p> <Image width="320" height="320" src="https://images.unsplash.com/photo-1600493504091-8fb1555d2e14?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" fluid/> </p>
               </Col>
           </Row>

           <Row> 
               <Col xs={6}> 
                     <p> <Image width="320" height="320" src="https://images.unsplash.com/photo-1522107177-01884fcfa2bb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" fluid/>  </p>
               </Col>
               <Col xs={6}>  
                     <h1 className="h"> Header </h1>
                     <p fluid> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
               </Col>
           </Row>
       </Container>
    )
}

export default Services
