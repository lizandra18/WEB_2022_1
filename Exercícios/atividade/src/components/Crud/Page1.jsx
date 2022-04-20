import React from "react";
import { Link } from "react-router-dom";

function Page1() {
    return (
        <div>
            <h2>Página Page 1</h2>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </div>
    )
}

export default Page1