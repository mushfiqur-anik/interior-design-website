import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Services from "./Components/Services"
import About from "./Components/About"
import Contact from "./Components/Contact"
import {HashRouter as Router,  Route, Link, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} /> 
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
