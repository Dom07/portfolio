import React from 'react';
import { Jumbotron, Image } from 'react-bootstrap';
import dp from '../../images/dp.jpg'

const jumbotron = (props) => {
    return (
        <div>
            <Jumbotron style={{display: "flex", justifyContent: "center", alignContent: "center", marginTop: "80px"}}>
                <div>
                    <Image src={dp} style={{ width: "150px", height: "150px" }} roundedCircle />
                </div>
                <div style={{padding: "25px"}}>
                    <h1>Hello, world!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                </div>
            </Jumbotron>
        </div>
    )
};

export default jumbotron;