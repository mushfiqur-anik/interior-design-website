import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Services from "./Components/Services"
import About from "./Components/About"
import Contact from "./Components/Contact"

function App() {
  return (
    <div className="App">
      <Home/>
      <Services />
      <About />
      <Contact />
    </div>
  );
}

export default App;
