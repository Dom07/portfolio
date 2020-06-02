import React from 'react';
import {Card} from 'react-bootstrap';
import ImageCarousel from './imageCarousel/imageCarousel';
import './projectCard.css';

const projectCard = (props) => {
    const techSkills = props.techs.map(item => <li>{item}</li>)
    return(
         <div className="content">
             <div className="image">
                {/* <ImageCarousel 
                    images={props.images}
                    width={props.width}
                    height={props.height}
                /> */}
                <p className="title">{props.title}</p>
                {/* {console.log(props.images)} */}
             </div>
             <div className="description">
                 {/* <h5>{props.title}</h5> */}
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