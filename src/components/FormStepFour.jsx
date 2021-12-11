import React, {useState, useEffect} from "react";
import Heading from "../utils/Heading";
import SubHeading from "../utils/SubHeading";

const FormStepFour = (props) => {
  const [personalData, setpersonalData] = useState({
    fullName: "",
    email: "",
    phone: "",
    cv: "",
    aboutIntro: "",
  });
  console.log(personalData);
  return (
    <fieldset className=''>
      <div className='row'>
        <div className='col-12'>
              <Heading> Personal Details </Heading>
              <SubHeading>Enter Details</SubHeading>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <form>
            <div className='row'>
              <div className='col-12 form-group form-check prsnl-col'>
                <label htmlFor='fullName' style={{fontWeight: "600"}}>
                  Your Full Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter Name'
                  name='fullName'
                  id='fullName'
                  value={personalData.fullName}
                  onChange={(e) =>
                    setpersonalData({...personalData, fullName: e.target.value})
                  }
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-6 form-group form-check prsnl-col'>
                <label htmlFor='' style={{fontWeight: "600"}}>
                  Your Email Address
                </label>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Enter Email'
                  name='email'
                  id='email'
                  value={personalData.email}
                  onChange={(e) =>
                    setpersonalData({...personalData, email: e.target.value})
                  }
                />
              </div>
              <div className='col-6 form-group form-check'>
                <label htmlFor='' style={{fontWeight: "600"}}>
                  Phone (Optional)
                </label>
                <input
                  type='tel'
                  className='form-control'
                  placeholder='+92|'
                  name='phone'
                  id='phone'
                  value={personalData.phone}
                  onChange={(e) =>
                    setpersonalData({...personalData, phone: e.target.value})
                  }
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-12 form-group form-check prsnl-col'>
                <label htmlFor='' style={{fontWeight: "600"}}>
                  Upload Your CV
                </label>
                <input
                  type='file'
                  className='form-control'
                  placeholder='Upload File'
                  name='cv'
                  id='cv'
                  value={personalData.cv}
                  onChange={(e) =>
                    setpersonalData({...personalData, cv: e.target.value})
                  }
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-12 form-group form-check prsnl-col'>
                <label htmlFor='' style={{fontWeight: "600"}}>
                  Tell us about youself
                </label>
                <textarea
                  rows='6'
                  className='form-control'
                  placeholder='Describe yourself in a couple of sentences.'
                  name='aboutIntro'
                  id='aboutIntro'
                  value={personalData.aboutIntro}
                  onChange={(e) =>
                    setpersonalData({
                      ...personalData,
                      aboutIntro: e.target.value,
                    })
                  }
                ></textarea>
              </div>
            </div>
          </form>
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
            props.screenChanged("personaInformation", personalData);
          }}
        >
          Next
        </button>
      </div>
    </fieldset>
  );
};

export default FormStepFour;
