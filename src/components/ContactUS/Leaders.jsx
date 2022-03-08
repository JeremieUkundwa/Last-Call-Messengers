import React from "react";
import Card from "./Card";
import Contact from "./Contact";
import "./contactUs.css";
function Leaders() {
    return (
        <div className="contactUs-card">
            <div className="evangilist-card"> 
                <h2>Evangelists</h2>
                <Card
                    name={Contact[0].name}
                    tel = {Contact[0].tel}
                    img = {Contact[0].img}
                />
                <Card
                    name={Contact[1].name}
                    tel = {Contact[1].tel}
                    img = {Contact[1].img}
                />
                <Card
                    name={Contact[2].name}
                    tel = {Contact[2].tel}
                    img = {Contact[2].img}
                />
            </div>
            <div className="evangilist-card"> 
                <h2>Evangelists</h2>
                <Card
                    name={Contact[0].name}
                    tel = {Contact[0].tel}
                    img = {Contact[0].img}
                />
                <Card
                    name={Contact[1].name}
                    tel = {Contact[1].tel}
                    img = {Contact[1].img}
                />
                <Card
                    name={Contact[2].name}
                    tel = {Contact[2].tel}
                    img = {Contact[2].img}
                />
            </div>
            <div className="evangilist-card"> 
                <h2>Evangelists</h2>
                <Card
                    name={Contact[0].name}
                    tel = {Contact[0].tel}
                    img = {Contact[0].img}
                />
                <Card
                    name={Contact[1].name}
                    tel = {Contact[1].tel}
                    img = {Contact[1].img}
                />
                <Card
                    name={Contact[2].name}
                    tel = {Contact[2].tel}
                    img = {Contact[2].img}
                />
            </div>

        </div>
    )
}

export default Leaders;