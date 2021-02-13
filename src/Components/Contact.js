import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Contact = () => {
    return (
        <div>
            <Container>
                <Row> 
                    <Col sm={6} xs={12}> 
                    <h1> Get in touch ! </h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                        
                    </p>
                    
                     </Col>
                    <Col sm={6} xs={12}>
                    <div> Address: </div>
                    <div> Email: </div>
                    <div> Phone: </div>
                    <div> Social Media : </div>
                    
                    </Col>
                </Row>

            </Container>

            <div className="text-center"> Copyrights @2021</div>
            
        </div>
    )
}

export default Contact
