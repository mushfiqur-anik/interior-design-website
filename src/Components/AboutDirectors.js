import React from 'react'
import "./AboutDirectors.css"
import { Container, Row, Col, Image } from 'react-bootstrap'

const AboutDirectors = () => {
    return (
        <>
         <h3 className="aboutDirHeader"> Words from our board of directors</h3>

        <Row> 
           
            <Col> 
              <Image width="200" height="200" roundedCircle src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987"/> 
              <h4 className="directorName"> Bill Gates </h4>
              <p className="directorWords"> orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l</p>
              <p className="directorSocial"> 
                     <i className="fab fa-linkedin"></i>
                     <i class="fab fa-facebook-square"></i>
                     <i className="fab fa-twitter-square"></i>
              </p>
            
             </Col>
             <Col> 
              <Image width="200" height="200" roundedCircle src="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg"/> 
              <h4 className="directorName"> Sundar Pichai </h4>
              <p className="directorWords"> orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l</p>
              <p className="directorSocial"> 
                     <i className="fab fa-linkedin"></i>
                     <i class="fab fa-facebook-square"></i>
                     <i className="fab fa-twitter-square"></i>
              </p>
            
             </Col>
             <Col> 
              <Image width="200" height="200" roundedCircle src="https://images.macrumors.com/t/RqQ0xugCz3nnDfgCqMmlYR1B3wo=/1600x0/filters:quality(90)/article-new/2016/08/cook_hero.png"/> 
              <h4 className="directorName"> Tim Cook </h4>
              <p className="directorWords"> orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l</p>
              <p className="directorSocial"> 
                     <i className="fab fa-linkedin"></i>
                     <i class="fab fa-facebook-square"></i>
                     <i className="fab fa-twitter-square"></i>
              </p>
            
             </Col>
        </Row>
        </>
    )
}

export default AboutDirectors
