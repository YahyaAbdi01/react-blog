import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Components/Create';

function App() {
  return (
    
    <Router>
    <div className="App">

    <NavBar/>

    <div className='content'>

<Switch>



<Route  path="/Create">
<Create/>
</Route>




</Switch>
    </div>
    </div>
    </Router>




  );
}

export default App;
