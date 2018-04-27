import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// dependencies
import { Route, Link, Redirect, Switch } from 'react-router-dom'
// components
import Navbar from './components/Global/Navbar/Navbar'
import HomePage from './components/Pages/Home/HomePage'
import ProjectsPage from './components/Pages/Projects/ProjectsPage/ProjectsPage'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main>
          <Route path='/home' render={() => <HomePage />}/>
          <Route path='/projects' render={() => <ProjectsPage />}/>
          {/* <Route path='/about' render={() => <AboutPage />}/> */}
        </main>
      </div>
    );
  }
}

export default App;