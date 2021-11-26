import React from 'react';
import "../styles/styles.scss"
import Form from "./Pages/Form"
import Courses from './Pages/Courses';
import Course from "./Pages/Course"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import MainMenu from './Organisms/MainMenu'
import History from './Pages/History'
import Home from './Pages/Home';
import Users from './Pages/Users';

const App = () => (
  <Router>
    <MainMenu />
    <Routes>
      <Route exact="true" path="/" element={ <Home/> } />
      <Route path="/cursos" element={ <Courses/> } />  
      <Route path="/cursos/:id" element={ <Course/> } />  
      <Route path="/historial/:valor" element={ <History/> } />  
      <Route path="/historial" element={ <History/> } />  
      <Route path="/usuarios" element={ <Users/> } />  
      <Route path="/formulario" element={ <Form name="Página de contacto" /> }/>
      <Route element={() => (
        <div className="ed-grid">
          <h1>Error 404</h1>
          <span>Página no encontrada</span>  
        </div>
      )} />  
    </Routes> 
  </Router>
)

export default App;
