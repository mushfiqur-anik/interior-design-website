import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./Contact.css"

const Contact = () => {
    return (
        <div className="contact">
            <Container >
                <Row className="text-center"> 
                    <Col sm={6} xs={12}> 
                         <h1> Get in touch ! </h1>
                         <p>
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                         </p>
                     </Col>
                     
                    <Col sm={6} xs={12}>
                         <div className="contactContent"> Address: 1234 Interior Road, 3H21JK </div>
                         <div className="contactContent"> Email: galaxyinterior@info.com  </div>
                         <div className="contactContent"> Phone: 541 292 0139 </div>
                        <div className="contactContent">  
                             <i className="fab fa-linkedin"></i>
                             <i class="fab fa-facebook-square"></i>
                             <i className="fab fa-twitter-square"></i>
                         </div>
                    </Col>
                </Row>
            </Container>
            <div className="text-center"> Copyrights @2021</div>
        </div>
    )
}

export default Contact
