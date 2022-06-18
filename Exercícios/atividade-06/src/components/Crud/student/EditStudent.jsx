import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import FirebaseContext from "../../../utils/FirebaseContext";
import FirebaseService from "../../../services/FirebaseStudentServices";

const EditStudentPage = () => 
    <FirebaseContext.Consumer>
        {(firebase) => <EditStudent firebase={firebase} />}
    </FirebaseContext.Consumer>

function EditStudent(props){
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [ira, setIra] = useState(0);
    const params = useParams();
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault()

        const updateStudent = {name, course, ira}

        FirebaseService.update(
            props.firebase.getFirestoreDb(),
            (ok)=>{if(ok) navigate('/listStudent')},
            params.id,
            updatedStudent
        )
    } 
 

    useEffect(() => {
        FirebaseService.retrieve_promisse(
            props.firebase.getFirestoreDb(),
            (students)=>{
                setName(students.name)
                setCourse(students.course)
                setIRA(students.ira)
            },
            params.id
        )
    },
    [params.id]
)

  return (
    <div>
      <h2> Editar Estudantes </h2>
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
          <label>Curso</label>
          <input
            type="text"
            className="form-control"
            value={course ?? ""}
            name="course"
            onChange={(event) => setCourse(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>IRA</label>
          <input
            type="text"
            className="form-control"
            value={ira ?? 0}
            name="ira"
            onChange={(event) => setIra(event.target.value)}
          />
        </div>
        <div className="form-group" style={{ paddingTop: 10 }}>
          <input
            type="submit"
            value="Editar Estudante"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default EditStudentPage;