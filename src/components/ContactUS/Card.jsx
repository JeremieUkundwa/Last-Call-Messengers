import React from "react";
import "./contactUs.css"
function Card(props){
    return(
        <div>
            <div className="card-body">
                <div className="card-body-img">
                    <img src={props.img} alt="leaders-img" />
                </div>
                <div className="card-body-info">
                    <p>{props.name}</p>
                    <p>{props.tel}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;