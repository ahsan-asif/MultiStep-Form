import React from "react";

const FormStepFive = (props) => {
  return (
    <fieldset className=''>
      <h2>Submit Application</h2>
      <p>Please make sure that all the details you entered are correct.</p>
      <div className='form-group country-tabs row'>
        <div className='col-12'>
          <h5 className="vacancies-title">Terms & Conditions</h5>
          <p>
            We are looking for a high performing software engineer to join our
            team. Our ideal candidate must be able to tackle the daily
            challenges of a fast paced startup environment while leading design
            and development of web applications. This lead-level role includes a
            primary function of frontend development and a secondary function of
            supporting our backend development team. We are looking for a high
            performing software engineer to join our team. Our ideal candidate
            must be able to tackle the daily challenges of a fast paced startup
            environment while leading design and development of web
            applications. This lead-level role includes a primary function of
            frontend development and a secondary function of supporting our
            backend development team.
          </p>
          <div className='form-group'>
            <div className='form-check terms_dv'>
              <input
                className='form-check-input checkbox'
                type='checkbox'
                name='terms_check'
                id='terms_check'
                value='Clicked'
                required='required'
              />
              <label
                className='form-check-label terms_check'
                htmlFor='terms_check'
              >
                I agree to T&C
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className='form-group outer-btn-box'>
        <button
          type='button'
          className='next back'
          onClick={() => {
            props.screenBacked();
          }}
        >
          BACK
        </button>
        <button
          type='button'
          className='next'
          onClick={() => {
            props.screenChanged();
          }}
        >
          SUBMIT
        </button>
      </div>
    </fieldset>
  );
};
export default FormStepFive;
