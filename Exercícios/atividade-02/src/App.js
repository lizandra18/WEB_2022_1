import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/Crud/Home";
import About from "./components/Crud/About";

import CreateStudent from "./components/Crud/Student/CreateStudent";
import EditStudent from "./components/Crud/Student/EditStudent";
import ListStudent from "./components/Crud/Student/ListStudent";

import CreateProfessor from "./components/Crud/Professor/CreateProfessor";
import ListProfessor from "./components/Crud/Professor/ListProfessor";
import EditProfessor from "./components/Crud/Professor/EditProfessor";

//import Page1 from "./components/Aula/Page1";
//import Page2 from "./components/Aula/Page2";

function App() {
  function studentDropDown() {
    return (
      <li class="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Estudante
        </a>
        <ul className="Dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li className="navitem">
            <Link to="/createStudent" className="nav-link">
              Criar Estudante
            </Link>
          </li>
          <li className="navitem">
            <Link to="/listStudent" className="nav-link">
              Listar Estudante
            </Link>
          </li>
        </ul>
      </li>
    );
  }

  function professorDropDown() {
    return (
      <li class="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Professor
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li className="navitem">
            <Link to="/createProfessor" className="nav-link">
              Criar Professor
            </Link>
          </li>
          <li className="navitem">
            <Link to="/listProfessor" className="nav-link">
              Listar Professor
            </Link>
          </li>
        </ul>
      </li>
    );
  }

  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link to={"/"} className="navbar-brand" style={{ paddingLeft: 10 }}>
          Universidade Federal do Ceará
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedontainer">
          <ul className="navbar-nav mr-auto">
            <li className="navitem">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="navitem">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            {studentDropDown()}
            {professorDropDown()}
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="createStudent" element={<CreateStudent />} />
        <Route path="listStudent" element={<ListStudent />} />
        <Route path="editEstudent/:id" element={<EditStudent />} />

        <Route path="createProfessor" element={<CreateProfessor />} />
        <Route path="listProfessor" element={<ListProfessor />} />
        <Route path="editProfessor/:id" element={<EditProfessor />} />
      </Routes>
    </div>
  );
}

export default App;
