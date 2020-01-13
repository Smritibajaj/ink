import React , { Component } from 'react';
import logo from '../Vector.png';
import '../stylesheets/Header.scss';
import AppBar from '@material-ui/core/AppBar';
import { Switch, Route, Link } from "react-router-dom";
import Home from './Home';
import Security from './Security';
import Blog from './Blog';
export default class Header extends Component{
  render(){
    return(
      <div>
      <AppBar color="inherit" position="relative" className="header">
        <div className="App App-row">
          <div className="App App-row">
            <img src={logo} />
            <h6 className="Logo-text">Inkredo</h6>
          </div>

          <div className="App App-row">
          <Link to={`/home`}><div>HOME</div></Link>
          <Link to={`/api`}><div>API</div></Link>
          <Link to={`/careers`}><div>CAREERS</div></Link>
          <Link to={`/blog`}><div>BLOG</div></Link>
          <Link to={`/security`}><div>SECURITY</div></Link>
          </div>
          <div className="App-row">
            <button>Login</button>
            <button>Signup</button>
          </div>
        </div>
      </AppBar>
      </div>
    )
  }
}