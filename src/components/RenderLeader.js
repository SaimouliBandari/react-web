import React from "react";
import {Media} from "reactstrap"

function RenderLeader(props){
    return(
        <Media className='d-flex mt-1 mb-1'>
            <Media left className='me-5'>
             <Media object src={props.leader.image} alt={props.leader.name}/>
            </Media>
            <Media body >
                <Media heading>
                    <h3>{props.leader.name}</h3>
                    <h5>{props.leader.designation}</h5>
                </Media>
                <p className='leader-discrip'>{props.leader.description}</p>
            </Media>
        </Media>
    );
};

export default RenderLeader;