import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FirebaseService from "../../../services/FirebaseStudentService";


const StudentTableRow = (props) => {
  const { id, name, course, ira } = props.student;
  
  function deleteStudent(){
    if(window.confirm(`Deseja Exluir o Elemento de ID: ${_id}?`)){
        FirebaseService.delete(
            props.firestore,
            (ok)=>{if(ok) console.log('Excluído')},
            _id
        )
    } 
    }
  }

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{course}</td>
      <td>{ira}</td>
      <td>
        <Link to={`/editStudent/${id}`} className="btn btn-warning">
          Editar
        </Link>
      </td>
      <td>
        <button className="btn btn-danger">Apagar</button>
      </td>
    </tr>
  );
};

export default StudentTableRow;