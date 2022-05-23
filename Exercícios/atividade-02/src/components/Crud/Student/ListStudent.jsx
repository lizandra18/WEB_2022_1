import React from "react";
import { students } from "./data";
import StudentTableRow from "./StudentTableRow";

const ListStudent = () => {
  function generateTable() {
    if (!students) return;
    return students.map((student, i) => {
      return <StudentTableRow student={student} key={i} />;
    });
  };

  axios.get('http://localhost:3001/students')
  .then(
    (res)=>{
      this.setState({students:res.data})
    }
  )
  .cath(
    (error)=>{
      console.log(error)
    }
 )

  return (
    <div>
      <h2> Listar Estudantes </h2>
      <table className="table table-striped">
        <thead>
          <th>ID</th>
          <th>Nome</th>
          <th>Curso</th>
          <th>Ira</th>
          <th> colSpan="2"</th>
        </thead>
        <tbody>{generateTable()}</tbody>
      </table>
    </div>
  );
};

export default ListStudent;
