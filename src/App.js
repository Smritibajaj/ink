import React from "react";
import './App.scss';
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router styles={{position:'relative'}}>
      <Header />
        <Home />
        <Footer />
    </Router>
  );
}