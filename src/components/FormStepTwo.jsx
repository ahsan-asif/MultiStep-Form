import React from "react";
import Heading from '../utils/Heading'
import SubHeading from '../utils/SubHeading';
import vector1 from '../assets/images/Vector1.png';


const FormStepTwo = (props) => {
  let vacancyDetail = {};
  // let data={};
  vacancyDetail = props.formData.vacancy;

  const jobDescription = () => {
    if (vacancyDetail.id === 1) {
      return (
        <fieldset id='1' className=''>
        <Heading>Job Description</Heading>
          <SubHeading>We would like to get to know graphic Desingning.</SubHeading>
          <div className='form-group'>
            <fieldset className='questions'>
              <div className='row mb-2'>
                <div className='col-12'>
                <h5 className='job-description-title'>Job Role</h5>
                  <p className='vacancies-description'>
                    We are looking for a high performing software engineer to
                    join our team. Our ideal candidate must be able to tackle
                    the daily challenges of a fast paced startup environment
                    while leading design and development of web applications.
                    This lead-level role includes a primary function of frontend
                    development and a secondary function of supporting our
                    backend development team.
                  </p>
                </div>
                <div className='col-12'>
                  <h5 className='job-description-title'>Job Responsibilities</h5>
                  <ul className="jobDescriptionList">
                    <li>
                      Take on a lead role in the design and development of web
                      applications used by our customers daily
                    </li>
                    <li>
                      Take on a lead role in the design and development of web
                      applications used by our customers daily
                    </li>
                    <li>
                      Take on a lead role in the design and development of web
                      applications used by our customers daily
                    </li>
                    <li>
                      Take on a lead role in the design and development of web
                      applications used by our customers daily
                    </li>
                  </ul>
                </div>
                <div className='col-12'>
                <h5 className='job-description-title'>Qualifications</h5>
                  <ul className="jobDescriptionList">
                    <li>
                      Take on a lead role in the design and development of web
                      applications used by our customers daily
                    </li>
                    <li>
                      Take on a lead role in the design and development of web
                      applications used by our customers daily
                    </li>
                    <li>
                      Take on a lead role in the design and development of web
                      applications used by our customers daily
                    </li>
                  </ul>
                </div>
              </div>
              <div className='form-group outer-btn-box'>
                <button
                  type='button'
                  className='next back'
                  onClick={() => {
                    props.screenBacked();
                  }}
                  style={{marginTop: "50px"}}
                >
                  Back
                </button>
                <button
                  type='button'
                  className='next'
                  onClick={() => {
                    props.screenChanged();
                  }}
                >
                  Next
                </button>
              </div>
            </fieldset>
          </div>
        </fieldset>
      );
    }
    if (vacancyDetail.id === 2) {
      return (
        <fieldset id='2' className=''>
          <h2 className="comp-heading">Job Description</h2>
          <SubHeading>We would like to get to know about Content Writing .</SubHeading>
          <div className='form-group build-section'>
            <fieldset className='questions'>
              <div className='row mb-2'>
                <div className='col-12'>
                <h5 className='job-description-title'>Job Role</h5>
                  <p className='vacancies-description'>
                    We are looking for a high performing software engineer to
                    join our team. Our ideal candidate must be able to tackle
                    the daily challenges of a fast paced startup environment
                    while leading design and development of web applications.
                    This lead-level role includes a primary function of frontend
                    development and a secondary function of supporting our
                    backend development team.
                  </p>
                </div>
                <div className='col-12'>
                <h5 className='job-description-title'>Job Responsibilities</h5>
                  <ul className="jobDescriptionList">
                    <li>
                      Take on a lead role in the design and development of web
                      applications used by our customers daily
                    </li>
                    <li>
                      Take on a lead role in the design and development of web
                      applications used by our customers daily
                    </li>
                    <li>
                      Take on a lead role in the design and development of web
                      applications used by our customers daily
                    </li>
                    <li>
                      Take on a lead role in the design and development of web
                      applications used by our customers daily
                    </li>
                  </ul>
                </div>
                <div className='col-12'>
                <h5 className='job-description-title'>Qualifications</h5>
                  <ul className="jobDescriptionList">
                    <li>
                      Take on a lead role in the design and development of web
                      applications used by our customers daily
                    </li>
                    <li>
                      Take on a lead role in the design and development of web
                      applications used by our customers daily
                    </li>
                    <li>
                      Take on a lead role in the design and development of web
                      applications used by our customers daily
                    </li>
                  </ul>
                </div>
              </div>
              <div className='form-group outer-btn-box'>
                <button
                  type='button'
                  className='next back'
                  onClick={() => {
                    props.screenBacked(1);
                  }}
                  style={{marginTop: "50px"}}
                >
                  Back
                </button>
                <button
                  type='button'
                  className='next'
                  onClick={() => {
                    props.screenChanged(1);
                  }}
                >
                  Next
                </button>
              </div>
            </fieldset>
          </div>
        </fieldset>
      );
    }
    if (vacancyDetail.id === 3) {
      return (
        <fieldset id='3' className=''>
          <h2 className="comp-heading">Job Description</h2>
          <SubHeading>We would like to get to know about Web Developing.</SubHeading>
          <div className='form-group build-section'>
            <fieldset className='questions'>
              <div className='row mb-2'>
                <div className='col-12'>
                <h5 className='job-description-title'>Job Role</h5>
                  <p className='vacancies-description'>
                    We are looking for a high performing software engineer to
                    join our team. Our ideal candidate must be able to tackle
                    the daily challenges of a fast paced startup environment
                    while leading design and development of web applications.
                    This lead-level role includes a primary function of frontend
                    development and a secondary function of supporting our
                    backend development team.
                  </p>
                </div>
                <div className='col-12'>
                <h5 className='job-description-title'>Job Responsibilities</h5>
                  <ul className="jobDescriptionList">
                    <li>
                      Take on a lead role in the design and development of web
                      applications used by our customers daily
                    </li>
                    <li>
                      Take on a lead role in the design and development of web
                      applications used by our customers daily
                    </li>
                    <li>
                      Take on a lead role in the design and development of web
                      applications used by our customers daily
                    </li>
                    <li>
                      Take on a lead role in the design and development of web
                      applications used by our customers daily
                    </li>
                  </ul>
                </div>
                <div className='col-12'>
                <h5 className='job-description-title'>Qualifications</h5>
                  <ul className="jobDescriptionList">
                    <li>
                      Take on a lead role in the design and development of web
                      applications used by our customers daily
                    </li>
                    <li>
                      Take on a lead role in the design and development of web
                      applications used by our customers daily
                    </li>
                    <li>
                      Take on a lead role in the design and development of web
                      applications used by our customers daily
                    </li>
                  </ul>
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
                  Back
                </button>
                <button
                  type='button'
                  className='next'
                  onClick={() => {
                    props.screenChanged("workExprience",{});
                  }}
                >
                  Next
                </button>
              </div>
            </fieldset>
          </div>
        </fieldset>
      );
    }
  };
  return <>{jobDescription()}</>;
};
export default FormStepTwo;
