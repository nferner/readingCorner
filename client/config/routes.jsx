import React from 'react';
import { BrowserRouter as Router,
          Route,
          Link
        } from 'react-router-dom';
import Main from '../components/main.jsx';
import Home from '../components/home.jsx';
import Register from '../components/regiLogin/register.jsx';
import Login from '../components/regiLogin/login.jsx';
import Parents from '../components/parents/parentsPage.jsx';
import User from '../components/user/user.jsx';

const Routes = () => {
  return (
    <Router>
      <div>
        <ul id="navBarList">
          <li className="link"><Link to="/home">Home </Link>
          </li>
          <li className="link">
            <Link to="/register">Register</Link>
          </li>
          <li className="link">
            <Link to="/login">Login</Link>
          </li>
          <li className="link">
            <Link to="/parentsPage">Parents</Link>
          </li>
          <li className="link">
            <Link to="/user">User</Link>
          </li>
        </ul>

        <hr/>

        <Route path="/" component={Main}/>
        <Route path="/home" component={Home}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <Route path="/parentsPage" component={Parents}/>
        <Route path="/user" component={User}/>
      </div>
    </Router>
  );
}

export default Routes;
