import React from 'react';
import { BrowserRouter as Router, Route, Link,  } from "react-router-dom";
import Create from './Create';
import Home from './Home';
function Header() {
    return (
        <Router>

 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">React JS + Laravel</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
      <Link to="/"className="nav-link">Home</Link>

      </li>
      <li className="nav-item">
      <Link to="/create"className="nav-link">Create</Link>

      </li>
    </ul>
</div>
 </nav>
 <Route path="/"component={Home}/>
 <Route path="/create" component={Create}/>
        </Router>
    );
}

export default Header;

