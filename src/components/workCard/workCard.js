import React from 'react';
import {Card} from 'react-bootstrap';
import "./workCard.css";

const workCard = (props) => {
    return(
         <Card className="workCard">
             <Card.Body>
                 <Card.Title>
                    {props.companyName}
                 </Card.Title>
                 <Card.Subtitle>
                     {props.jobTitle}
                 </Card.Subtitle>
                 <Card.Text>
                     List of things you did at work
                     List of things you did at work
                     List of things you did at work
                     List of things you did at work
                     List of things you did at work
                     List of things you did at work
                     List of things you did at work
                 </Card.Text>
             </Card.Body>
         </Card>
    )
};

export default workCard;