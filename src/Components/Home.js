import React from 'react'
import "./Home.css"
import Navbar from "./Navbar"


const Home = () => {
    return (
        <div className="home">
            {<Navbar />}
            
            <div className="content"> 
               <h1> Interior </h1> 
               <h3> When home feels like home </h3>
             </div>

        </div>
    )
}

export default Home
