import React from 'react';
import { Card } from 'react-bootstrap';

const skillCard = (props) => {
    const skillList = props.skills.map(item => <div>{item}</div>)
    return (
        <Card style={{ width: '18rem' }}>
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