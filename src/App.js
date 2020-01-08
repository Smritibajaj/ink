import React, {Component} from "react";
import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
import Security from './components/Security';
import Footer from './components/Footer';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";

export default class App extends Component {
  render(){
    const { path } = this.props.match;
  return (
    <div>
      <Header />
      <div>
          <Switch>
            <Route path={`${path}home`} exact component={Home} />
            <Route path={`/security`} component={Security} />
          </Switch>
        </div>
        <Footer />
        </div>
  )
  }
  
}