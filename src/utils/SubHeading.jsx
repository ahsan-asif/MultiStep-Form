import React from 'react';

const SubHeading = (props) => {
    return ( 
        <p style={style.subHeading}>{props.children}</p> 
    );
}
 
export default SubHeading;

const style={
    subHeading:{
        fontFamily:'Source Sans Pro',
        fontWeight: "400",
        fontSize:'16px',
        lineHeight:'24px'
    }
}