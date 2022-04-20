import React from "react";
import { useParams, Link } from "react-router-dom";

function Page2() {
    return (
        <div>
            Página Page 2<h3>Nome: {useParams.nome}</h3>
            <h3>Matrícula: {useParams.id}</h3>
            <Link to="/">Voltar para página Home</Link>
        </div>
    )
}

export default Page2