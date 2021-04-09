import React from 'react'
import AboutCompany from "./AboutCompany"
import AboutDirectors from "./AboutDirectors"
import {Container} from "react-bootstrap"
import "./About.css"
import Navbar from "./Navbar"

const About = () => {
    return (
        <>
         <Navbar />

         <Container className="about">
            <AboutCompany />
            <AboutDirectors />

        </Container>
        
        </>
       
    )
}

export default About
