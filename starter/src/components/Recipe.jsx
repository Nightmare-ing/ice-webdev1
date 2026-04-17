import { useState } from "react";
import { Button, Card } from "react-bootstrap";

export default function Recipe(props) {
    return (
        <div>
            <img src={props.img.location} alt={props.img.description} />
            <h2>{props.name}</h2>
            <p>by {props.author}</p>
            <p>{props.keywords}</p>
        </div>
    );
}
