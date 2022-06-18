import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import FirebaseContext from "../../../utils/FirebaseContext";
import FirebaseService from "../../../services/FirebaseStudentServices";

const CreateStudentPage = () => 
    <FirebaseContext.Consumer>
    {(firebase) =>  <CreateStudent firebase={firebase} />}
    </ FirebaseContext.Consumer>

function CreateStudent(props){
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [ira, setIra] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault()
        const newStudent = {course, ira, name}

    FirebaseService.create(
        props.firebase.getFirestoreDb(),
        (_id)=>{
            alert(`Aluno ${name} criado com sucesso com id ${_id}.`)
            navigate("/listStudent")
        },
        newStudent
    )
}

  return (
    <div>
      <h2> Criar Estudante </h2>
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
          <label>Curso</label>
          <input
            type="text"
            className="form-contol"
            value={course ?? ""}
            name="course"
            onChange={(event) => setCourse(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>IRA</label>
          <input
            type="text"
            className="form-contol"
            value={ira ?? 0}
            name="ira"
            onChange={(event) => setIra(event.target.value)}
          />
        </div>
        <div className="form-group" style={{ paddingTop: 10 }}>
          <input
            type="submit"
            value="Criar Estudante"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateStudentPage;