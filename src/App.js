import React, { Component } from 'react'
import NavBar from './Component/Navbar/NavBar'
import AboutMe from './Component/Introduction/AboutMe'
import Proficiance from './Component/Proficiances/Proficiance'
import Project from './Component/Project/Project'
import PerformanceRecord from './Component/Performance/PerformanceRecord.js'
import Interest from './Component/Interest/Interest';
import Skills from './Component/Skills/Skills'
import {Route} from 'react-router-dom';




export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <AboutMe/>
        <Proficiance/>
        <Skills/>
        <Project/>
        <PerformanceRecord/>
        <Interest/>
      </div>
    )
  }
}

