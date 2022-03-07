import React from "react";
import {FaFilePdf,FaBook} from "react-icons/fa";

function Publication(){
    return(
        <div className="publication-style">
            <nav>
                <a href=""><FaFilePdf />Evangilical Publications</a>
                <a href=""><FaBook />SOP Books</a>
            </nav>
        </div>
    )
}

export default Publication;