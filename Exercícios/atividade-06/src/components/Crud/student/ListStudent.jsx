import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import StudentTableRow from "./StudentTableRow";
import FirebaseContext from "../../../utils/FirebaseContext";
import FirebaseService from "../../../services/FirebaseStudentServices";


const ListStudentPage = () => 
    <FirebaseContext.Consumer>
        {(firebase) => <ListStudent firebase={firebase} />}
    </ FirebaseContext.Consumer>

function ListStudent(props) {

    const [students, setStudents] = useState([])

    useEffect(
        () => {
            FirebaseService.list(
                props.firebase.getFirestoreDb(),
                (students)=>{
                    setStudents(students)
                }
            )
        }
        ,
        [students]
    )

    function deleteStudentById(_id){
        let studentsTemp = students
        for(let i = 0; i < studentsTemp.length; i++)
            if(studentsTemp[i]._id === _id)
                studentsTemp.splice(i, 1)
        
        setStudents([...studentsTemp])
    }

    function generateTable() {
        if (!students) return;
        return students.map((student, i) => {
            return <StudentTableRow student={student} key={i} />;
        });
    };


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

export default ListStudentPage;