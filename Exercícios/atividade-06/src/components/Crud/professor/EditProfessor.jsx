import React, { useState, useEffect } from "react";
import { uLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import FirebaseContext from "../../../utils/FirebaseContext";
import FirebaseProfessorService from "../../../services/FirebaseProfessorService";

const EditProfessorPage = () =>
    <FirebaseContext.Consumer>
        {(firebase) => <EditProfessor}
    </FirebaseContext.Consumer>

function EditProfessor (props) {
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault()
    const updateProfessor = {name, university, degree}

    FirebaseProfessorService.update(
        props.firebase.getFirebaseDb(),
        (ok) => {if (ok) navigate('/ListProfessor')},
        params.id,
        updateProfessor
    )

  }

  useEffect(() => {

        FirebaseProfessorService.retrieve(
            props.firebase.getFirebaseDb(),
            (professor) => {
                setDegree(professor.degree)
                setUniversity(professor.university)
                setName(professor.name)
                },
                params.id
            )
        },
        [params.id]
  )  

  return (
    <div>
      <h2> Editar Professores </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome</label>
          <input
            type="text"
            className="form-control"
            value={name == null || name === undefined ? "" : name}
            name="name"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Universidade</label>
          <input
            type="text"
            className="form-control"
            value={university  ?? ""}
            name="university"
            onChange={(event) => setUniversity(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Titulação</label>
          <input
            type="text"
            className="form-control"
            value={degree ?? 0}
            name="degree"
            onChange={(event) => setDegree(event.target.value)}
          />
        </div>
        <div className="form-group" style={{ paddingTop: 10 }}>
          <input
            type="submit"
            value="Editar Professor"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default EditProfessorPage;