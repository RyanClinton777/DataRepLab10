import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Content } from './components/Content';
//react-bootstrap stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';
//react-bootstrap components
//only import components being used
import {Navbar, Nav }from 'react-bootstrap';
//Router for navigation
//can use aliases for imports with 'as'
//Switch contain Routes which link to Components based on the URL path, which is changed using Nav.Link
//Route: <Route path='/' component={Content} ></Route> if URL path is /, show Content component - exact keyword self-explanatory
//BrowserRouter contains all of this
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



//converted from function to class, added render() to comply with Component
//Renders Navbar, which can switch between components
class App extends React.Component {
  //Classes that extend Component must implement render()
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Content</Nav.Link>
              <Nav.Link href="/read">Header</Nav.Link>
              <Nav.Link href="/create">Footer</Nav.Link>
            </Nav>
          </Navbar>

          <Switch>
            <Route path='/' component={Content} exact ></Route>
            <Route path='/read' component={Header} ></Route>
            <Route path='/create' component={Footer} ></Route>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
