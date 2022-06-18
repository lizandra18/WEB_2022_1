import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FirebaseProfessorService from "../../../services/FirebaseProfessorService";

const ProfessorTableRow = (props) => {
  const { id, name, university, degree } = props.professor;
  
  function deleteProfessor() {
    if(window.confirm(`Excluir o elemento de Id: ${_id}?`)){
        FirebaseProfessorService.delete(
            props.firebase,
            ()=>{console.log('Excluído')},
            _id
        )
    }
  }

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{university}</td>
      <td>{degree}</td>
      <td>
        <Link to={`/editProfessor/${id}`} className="btn btn-warning">
          Editar
        </Link>
      </td>
      <td>
        <button className="btn btn-danger">Apagar</button>
      </td>
    </tr>
  );
};

export default ProfessorTableRow;