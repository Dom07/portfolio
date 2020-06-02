import React from 'react';
import { Card } from 'react-bootstrap';
import './skillCard.css';

const skillCard = (props) => {
    const skillList = props.skills.map(item => <div>{item}</div>)
    return (
        <Card className="skillCard">
            <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                    {skillList}
                </Card.Text>
            </Card.Body>
        </Card>
    )
};

export default skillCard;