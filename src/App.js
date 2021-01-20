import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact.js';
import Portfolio from './pages/Portfolio';
import Footer from "./components/Footer";
import Header from './components/Header';
// import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Header />
      <Switch>
        <Route path='/' exact component={About} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/portfolio' component={Portfolio} />
      </Switch>
        <Footer /> 
      </Router> 
    </>
  );
}

export default App;
