import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Services from "./Components/Services"
import About from "./Components/About"

function App() {
  return (
    <div className="App">
      <Home/>
      <Services />
      <About />
    </div>
  );
}

export default App;
