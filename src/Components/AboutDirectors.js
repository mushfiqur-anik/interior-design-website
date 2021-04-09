import React from 'react'
import "./AboutDirectors.css"
import { Container, Row, Col, Image } from 'react-bootstrap'

const AboutDirectors = () => {
    return (
        <>
         <h3 className="aboutDirHeader"> Words from our board of directors</h3>

        <Row> 
           
            <Col> 
              <Image width="200" height="200" roundedCircle src="https://images.unsplash.com/photo-1579342293157-b72c38636008?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1957&q=80"/> 
              <h4 className="directorName"> Bill Smith </h4>
              <p className="directorWords"> orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l</p>
              <p className="directorSocial"> 
                     <a href="https://www.linkedin.com/">  <i className="fab fa-linkedin"></i> </a>
                     <a href="https://www.facebook.com/">   <i class="fab fa-facebook-square"></i> </a>
                     <a href="https://twitter.com/">  <i className="fab fa-twitter-square"></i> </a>
              </p>
            
             </Col>
             <Col> 
              <Image width="200" height="200" roundedCircle src="https://images.unsplash.com/photo-1579948480844-e8276cc0e754?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"/> 
              <h4 className="directorName"> James Andrews </h4>
              <p className="directorWords"> orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l</p>
              <p className="directorSocial"> 
                     <a href="https://www.linkedin.com/">  <i className="fab fa-linkedin"></i> </a>
                     <a href="https://www.facebook.com/">   <i class="fab fa-facebook-square"></i> </a>
                     <a href="https://twitter.com/">  <i className="fab fa-twitter-square"></i> </a>
              </p>
            
             </Col>
             <Col> 
              <Image width="200" height="200" roundedCircle src="https://images.unsplash.com/photo-1551914076-92a0efd48740?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"/> 
              <h4 className="directorName"> Timmy Jones </h4>
              <p className="directorWords"> orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l</p>
              <p className="directorSocial"> 
                     <a href="https://www.linkedin.com/">  <i className="fab fa-linkedin"></i> </a>
                     <a href="https://www.facebook.com/">   <i class="fab fa-facebook-square"></i> </a>
                     <a href="https://twitter.com/">  <i className="fab fa-twitter-square"></i> </a>
              </p>
            
             </Col>
        </Row>
        </>
    )
}

export default AboutDirectors
