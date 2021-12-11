import React from 'react';

const Heading = (props) => {
    return ( 
        <h2 className="comp-heading">{props.children}</h2> 
    );
}
 
export default Heading;