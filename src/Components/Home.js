import "./Home.css"
import Navbar from "./Navbar"
import HomeContent from "./HomeContent"

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <HomeContent content="content" />
        </div>
    )
}

export default Home
