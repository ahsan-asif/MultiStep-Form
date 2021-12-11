import React, {useState} from "react";
import {vacancies} from "../assets/Sample Data/data";
import Heading from '../utils/Heading';
import SubHeading from '../utils/SubHeading';


const FormStepOne = (props) => {
  const [status, setStatus] = useState(false);
  const [selectVacancy, setSelectVacancy] = useState({});

  let data = vacancies();
  const selectedItem = (vacancy) => {
    setSelectVacancy(vacancy);
    setStatus(true);
  };
  return (
    <fieldset className=''>
      <Heading>Vacancies</Heading>
      <SubHeading>
        Let's estimate the cost of your site.
        </SubHeading>
      {data.map((item) => (
        <div
          id={item.id}
          className={`form-group vacancies-box ${
            item.id === selectVacancy.id && status ? "active_vacancy" : ""
          }`}
          key={item.id}
          onClick={() => selectedItem(item)}
        >
          <h5 className='vacancies-title'>{item.title}</h5>
          <p className='vacancies-description'>{item.description}</p>
        </div>
      ))}
      <div className='form-group outer-btn-box'>
        <button
          type='button'
          className={`next ${status ? "" : "opacity"}`}
          onClick={() => {
            props.screenChanged("vacancy", selectVacancy);
          }}
          disabled={!status ? "disabled" : ""}
        >
          Next
        </button>
      </div>
    </fieldset>
  );
};
export default FormStepOne;
