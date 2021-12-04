import React, {useState} from "react";
import {vacancies} from "../assets/Sample Data/data";

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
      <h2>Vacancies</h2>
      <p style={{fontFamily: "Source Sans Pro", fontWeight: "600"}}>
        Let's estimate the cost of your site.
      </p>
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
