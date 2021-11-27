import React from "react"
import { NavLink } from "react-router-dom"
import CarCounter from "../Atom/CarCounter"

const MainMenu = () => (
    <header className="main-header">
      <div className="ed-grid s-grid-5 lg-grid-4">
        <div className="s-cols-4 lg-cols-1 s-cross-center">
            <a href="/">
                <img className="main-logo" src="https://ed.team/images/logo/logo.svg" alt="Logo EDteam"/>
            </a>
        </div>
        <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
          <nav className="main-menu" id="main-menu">
            <ul>
                <li><NavLink exact="true" to="/" className="activo"> Inicio </NavLink></li>
                <li><NavLink to="/cursos" className="activo"> Cursos </NavLink></li>
                <li><NavLink to="/formulario" className="activo"> Formulario </NavLink></li>
                <li><NavLink to="/usuarios" className="activo"> Usuarios </NavLink></li>
                <CarCounter/>
            </ul>
          </nav>
          <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
        </div>
      </div>
    </header>
)

export default MainMenu