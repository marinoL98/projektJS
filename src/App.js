import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Prva from './components/prva';
import Druga from './components/druga';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      
  <Router>
      <Route exact path="/" component={Prva}></Route>
      <Route  path="/druga" component={Druga}></Route>
      <Link to ="/druga"class="link1">DRUGA</Link>
      
      </Router>

      
      
      <Footer>
        
      
      
      </Footer>
</div>
  );
}

export default App;
