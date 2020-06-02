import React from 'react';
import './projectCard.css';

const projectCard = (props) => {
    const techSkills = props.techs.map(item => <li>{item}</li>)
    return(
         <div className="content">
             <div className="image">
                <p className="title">{props.title}</p>
             </div>
             <div className="description">
                 <div className="details">
                    {props.description}
                 </div>
                 <h5 style={{marginTop: "10px"}}>Technologies Used</h5>
                 <div className="tech">
                    {techSkills}
                 </div>
             </div>
         </div>
    )
};

export default projectCard;