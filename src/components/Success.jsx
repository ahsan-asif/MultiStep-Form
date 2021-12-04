import React from "react";

const Success = (props) => {
  return (
    <div className='row'>
      <div className='col-12' style={{"text-align": "center"}}>
        <h3>That's It, You're Done!</h3>
        <img src='assets/img/7wcxc.png' alt="" className='mt-5' />
        <p style={{"text-align": "center"}} className='mt-5'>
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.{" "}
        </p>

        <div className='form-group'>
          <button
            type='button'
           onClick={()=>props.screenChanged(-5)}
            className='next dashboard-btn'
          >
            Go to dashboard
          </button>
        </div>
      </div>
    </div>
  );
};
export default Success;
