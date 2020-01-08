import React , { Component } from 'react';
import logo from '../Vector.png';
import '../stylesheets/Header.scss';
import AppBar from '@material-ui/core/AppBar';
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
            <div>HOME</div>
            <div>API</div>
            <div>CAREERS</div>
            <div>BLOG</div>
            <div>SECURITY</div>
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