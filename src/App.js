//import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Components/Create';
import BlogDetails from './Components/BlogDetails';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
function App() {
  
  return (
    <Router>

 <div className="App">

    <NavBar/>

    <div className='content'>

<Switch>

<Route exact path="/">
<Home/>
</Route>

<Route  path="/Create">
<Create/>
</Route>



<Route  path="/Blog-details/:id">
<BlogDetails/>
</Route>



<Route  path="*">
<NotFound/>
  </Route>






</Switch>
    </div>
    </div>
    </Router>

  );
}

export default App;
