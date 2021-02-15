import React from 'react'
import AboutCompany from "./AboutCompany"
import AboutDirectors from "./AboutDirectors"
import {Container} from "react-bootstrap"
import "./About.css"

const About = () => {
    return (
        <Container className="about">
            <AboutCompany />
            <AboutDirectors />

        </Container>
    )
}

export default About
