import React, {useEffect, useState} from "react";
import FormStepOne from "./FormStepOne";
import FormStepTwo from "./FormStepTwo";
import FormStepThree from "./FormStepThree";
import FormStepFour from "./FormStepFour";
import FormStepFive from "./FormStepFive";
import Success from "./Success";
import FormTabs from "./FormTabs";
// import {tabData} from "../assets/Sample Data/data";

const FormSteps = () => {
  const [stepCount, setStepCount] = useState(1);
  const [formData, setFormData] = useState({
    vacancy: {},
    workExprience: {},
    personaInformation: {},
  });
  const [tabItems, setTabItems] = useState([
    {
      id: 1,
      name: "New Vacancies",
      status: false,
    },
    {
      id: 2,
      name: "Job Description",
      status: false,
    },
    {
      id: 3,
      name: "Work Exprience",
      status: false,
    },
    {
      id: 4,
      name: "Personal Details",
      status: false,
    },
    {
      id: 5,
      name: "Submit Application",
      status: false,
    },
  ]);
  const screenChanged = (type = "", data = {}) => {
    setStepCount((prev) => prev + 1);
    setFormData((prev) => {
      return {...prev, [type]: {...data}};
    });
    console.log("kld", data);
  };
  const screenBacked = (index) => {
    setStepCount((prev) => prev - 1);
  };
  return (
    <div className='container'>
      <div className='row mt-5 mb-5'>
        <div className='col-md-12 col-lg-4 col-12'>
          <FormTabs stepCount={stepCount} tabItems={tabItems} />
        </div>
        <div className='col-md-12 col-lg-8 col-12'>
          <div id='form-element'>
            <div id='multiform'>
              {(stepCount === 1 && (
                <FormStepOne
                  screenChanged={screenChanged}
                  screenBacked={screenBacked}
                />
              )) ||
                (stepCount === 2 && (
                  <FormStepTwo
                    screenChanged={screenChanged}
                    screenBacked={screenBacked}
                    formData={formData}
                  />
                )) ||
                (stepCount === 3 && (
                  <FormStepThree
                    screenChanged={screenChanged}
                    screenBacked={screenBacked}
                  />
                )) ||
                (stepCount === 4 && (
                  <FormStepFour
                    screenChanged={screenChanged}
                    screenBacked={screenBacked}
                  />
                )) ||
                (stepCount === 5 && (
                  <FormStepFive
                    screenChanged={screenChanged}
                    screenBacked={screenBacked}
                  />
                )) ||
                (stepCount === 6 && (
                  <Success
                    screenChanged={screenChanged}
                    screenBacked={screenBacked}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSteps;
