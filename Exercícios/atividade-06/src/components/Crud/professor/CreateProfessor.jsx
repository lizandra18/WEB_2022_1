import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';

import Firebasecontext from '../../../utils/FirebaseContext';
import FirebaseProfessorService from '../../../services/FirebaseProfessorService';

const CreateProfessorPage = () =>
    <Firebasecontext.Consumer>
        {(firebase) => <CreateProfessor firebase={firebase} />}
    </Firebasecontext.Consumer>

function CreateProfessor(props) {
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault()
    const newProfessor = {name, university, degree}

    FirebaseProfessorService.create(
        props.firebase.getFirestoreDb(),
        (id) =>{
            alert(`Cria Professor`)
            NavigationPreloadManager("/listProfessor")
        },
        newProfessor
    )

  };

  return (
    <div>
      <h2> Criar Professor </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome</label>
          <input
            type="text"
            className="form-contol"
            value={name == null || name === undefined ? "" : name}
            name="name"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-grop">
          <label>Universidade</label>
          <input
            type="text"
            className="form-contol"
            value={university ?? ""}
            name="university"
            onChange={(event) => setUniversity(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Titulação</label>
          <input
            type="text"
            className="form-contol"
            value={degree ?? 0}
            name="degree"
            onChange={(event) => setDegree(event.target.value)}
          />
        </div>
        <div className="form-group" style={{ paddingTop: 10 }}>
          <input
            type="submit"
            value="Criar Professor"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateProfessorPage;