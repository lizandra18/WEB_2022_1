import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProfessorTableRow from "./ProfessorTableRow";
import FirebaseContext from "../../../utils/Firebasecontext";
import FirebaseProfessorService from "../../../services/FirebaseProfessorService";

const ListProfessor = () => 
    <FirebaseContext.Consumer>
        {(firebase) => <ListProfessor firebase={firebase} />}
    </FirebaseContext.Consumer>
  
function ListProfessor(props) {
    if (!professors) return;
    return professors.map((professor, i) => {
      return <ProfessorTableRow professor={professor} key={i} />;
    });
  }

  useEffect(
    ()=> {
        FirebaseProfessorService.list(
            props.firebase.getFirestoreDb(),
            (professors) => setProfessors(professors)
        )
    }
    ,
    [professors]   
    
  )

  function deleteProfessorById(_id){
    let professorTemp = professors
    for(let a = 0; a < professorTemp.length; a++)
        if(professorTemp[a]._id === _id)
            professorTemp.splice(a, 1)

    setProfessors([...professorTemp])

  }

  function generateTable() {
    if(!professors) return
    return professor.map(
        (professor, i) => {
            return <ProfessorTableRow
                        professor={professor}
                        key{i}
                        firebase={props.firebase.getFirestoreDb()}
                        />
        }
    )
  }

  return (
    <div>
      <h2> Listar Professores </h2>
      <table className="table table-striped">
        <thead>
          <th>ID</th>
          <th>Nome</th>
          <th>Universidade</th>
          <th>Titulação</th>
          <th> colSpan="2"</th>
        </thead>
        <tbody>{generateTable()}</tbody>
      </table>
    </div>
  );

export default ListProfessorPage;