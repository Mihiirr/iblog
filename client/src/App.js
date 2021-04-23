import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Editblog from './pages/Editblog'
import Bloglist from './pages/Bloglist';
import Createblog from './pages/Createblog';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (<div className="App">
    
    <Navbar/>

    <Router>
      <Route exact path="/" component={Bloglist}/>
      <Route path="/edit/:id" component={Editblog}/>
      <Route path="/createblog" component={Createblog}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={SignUp}/>
    </Router>
    </div>
   );
}

export default App;
