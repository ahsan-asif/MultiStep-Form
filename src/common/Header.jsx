import React from 'react';
import logo from '../assets/images/logo.png'

const Header = () => {
    return ( 
        <div className="contianer-fluid">
            <div className="row">
                <div className="col-12">
                    <div style={style.header}>
                    <img style={{width:'82px'}}
                     src={logo} alt="logo"  />
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default Header;

const style={
    header:{
        backgroundColor:'#fff',
        height:'82px',
        textAlign:'center',
        lineHeight:'82px',
        marginBottom:'60px'
    }
}