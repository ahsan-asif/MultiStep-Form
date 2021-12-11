import React, {useState, useEffect} from "react";
import Heading from '../utils/Heading'
import SubHeading from '../utils/SubHeading';


const FormStepThree = (props) => {
  const [status, setStatus] = useState(true);
  const [jobFormStatus, setJobformStatus] = useState(false);
  const [projectFormStatus, setProjectformStatus] = useState(false);
  const [jobExpCollection, setjobExpCollection] = useState([]);
  const [projectExpCollection, setprojectExpCollection] = useState([]);
  const [allExperience, setallExperience] = useState({
    jobExp: "",
    projectExp: "",
  });

  const [jobExpData, setjobExpData] = useState({
    companyName: "",
    companyExpDuration: "",
    companyExpDetail: "",
  });
  const [projectExpData, setProjectExpData] = useState({
    projectName: "",
    projectYear: "",
    projectLink: "",
    projectDetail: "",
  });

  const displayComp = () => {
    setStatus(false);
  };

  const jobFormDisplay = () => {
    setJobformStatus(true);
    setProjectformStatus(false);
  };
  const projectFormDisplay = () => {
    setProjectformStatus(true);
    setJobformStatus(false);
  };

  useEffect(() => {
    setallExperience({...allExperience, jobExp: jobExpCollection});
  }, [jobExpCollection]);
  useEffect(() => {
    setallExperience({...allExperience, projectExp: projectExpCollection});
  }, [projectExpCollection]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (jobExpData.companyName !== "") {
      await setjobExpCollection([
        ...jobExpCollection,
        {...jobExpData, id: Date.now()},
      ]);
      var obj = {
        companyName: "",
        companyExpDuration: "",
        companyExpDetail: "",
      };
      setjobExpData(obj);
    } else {
      setprojectExpCollection([
        ...projectExpCollection,
        {...projectExpData, id: Date.now()},
      ]);
      setProjectExpData({
        projectName: "",
        projectYear: "",
        projectLink: "",
        projectDetail: "",
      });
    }
  };
  // Delete Experiences
  const removeJobExp = (job) => {
    let filterCollection = [...jobExpCollection];
    setjobExpCollection(filterCollection.filter((item) => item.id !== job.id));
  };
  const removeProjectExp = (project) => {
    let filterCollection = [...projectExpCollection];
    setprojectExpCollection(
      filterCollection.filter((item) => item.id !== project.id)
    );
  };
  return (
    <fieldset className=''>
      <Heading>Work Experience</Heading>
      <SubHeading className='vacancies-description'>
      Add work experience here
      </SubHeading>
      <div className='form-group country-tabs row'>
        <div className='col-12'>
          {status ? (
            <>
              <button
                type='button'
                style={{border: "2px dotted #A0A0A0",fontWeight:'600',marginTop:'10px',color:'#A0A0A0',fontSize:'14px'}}
                onClick={displayComp}
              >
                Add Experience
              </button>
              <h6 style={{textAlign: "center", marginTop: "20px",fontSize:'15px', fontWeight:'500'}}>
                {" "}
                Note: You can can select between adding a job experience or
                showingcasing projects you have worked on.
              </h6>
            </>
          ) : (
            <>
              {jobExpCollection
                ? jobExpCollection.map((job, index) => (
                    <div
                      key={index}
                      style={{
                        backgroundColor: "#fafafa",
                        padding: "10px 20px 20px 20px",
                        borderRadius: "10px",
                        marginBottom: "10px",
                        position: "relative",
                      }}
                    >
                      <div className='row'>
                        <div className='col-5'>
                          <p className="exp-title">Company Name</p>
                          <p className="exp-description">{job.companyName}</p>
                        </div>
                        <div className='col-5'>
                          <p className="exp-title" style={{float:'right'}}>{job.companyExpDuration}</p>
                        </div>
                        <div className='col-2'>
                          <p className="exp-title"
                            style={{
                              textAlign: "right",
                              color: "#800000",
                              cursor: "pointer",
                            }}
                            onClick={() => removeJobExp(job)}
                          >
                            <i className='fa fa-trash' aria-hidden='true'></i>
                          </p>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-12'>
                        <p className="exp-description">{job.companyExpDetail}</p>
                        </div>
                      </div>
                    </div>
                  ))
                : ""}
              {projectExpCollection
                ? projectExpCollection.map((project, index) => (
                    <div
                      key={index}
                      style={{
                        backgroundColor: "#fafafa",
                        padding: "10px 20px 20px 20px",
                        borderRadius: "10px",
                        marginBottom: "10px",
                        position: "relative",
                      }}
                    >
                      <div className='row'>
                        <div className='col-5'>
                          <p className="exp-title">Project Name</p>
                          <p className="exp-description">{project.projectName}</p>
                          <p className="exp-description">{project.projectLink}</p>
                        </div>
                        <div className='col-5'>
                          <p className="exp-title" style={{float:'right'}}>{project.projectYear}</p>
                        </div>
                        <div className='col-2'>
                          <p
                            style={{
                              textAlign: "right",
                              color: "#800000",
                              cursor: "pointer",
                            }}
                            onClick={() => removeProjectExp(project)}
                          >
                            <i className='fa fa-trash' aria-hidden='true'></i>
                          </p>
                        </div>
                      </div>

                      <div className='row'>
                        <div className='col-12'>
                          <p className="exp-description">{project.projectDetail}</p>
                        </div>
                      </div>
                    </div>
                  ))
                : ""}
              <h5 style={{fontWeight: "600", fontSize:'16px'}}>
                {jobExpCollection.length > 0
                  ? "Add More Experiences"
                  : "Select Type"}{" "}
              </h5>
              <div className='row'>
                <div className='col-6'>
                  <button
                    className='project_job_btn'
                    type='button'
                    style={{border: "1px solid #A0A0A0", fontSize:'16px', fontWeight:'600'}}
                    onClick={jobFormDisplay}
                  >
                    Job
                  </button>
                </div>
                <div className='col-6'>
                  <button
                    className='project_job_btn'
                    type='button'
                    style={{border: "1px solid #A0A0A0", fontSize:'16px', fontWeight:'600'}}
                    onClick={projectFormDisplay}
                  >
                    Project
                  </button>
                </div>
              </div>
              {jobFormStatus ? (
                <>
                  <form onSubmit={handleSubmit}>
                    <div className='row '>
                      <div className='col-6 form-group form-check'>
                        <label
                          htmlFor='companyName'
                          style={{fontWeight: "600"}}
                        >
                          Company Name
                        </label>
                        <input
                          className='form-control'
                          name='companyName'
                          id='companyName'
                          placeholder='Enter Company Name'
                          value={jobExpData.companyName}
                          onChange={(e) =>
                            setjobExpData({
                              ...jobExpData,
                              companyName: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div className='col-6 form-group form-check'>
                        <label
                          htmlFor='companyExpDuration'
                          style={{fontWeight: "600"}}
                        >
                          Time Worked
                        </label>
                        <input
                          name='companyExpDuration'
                          className='form-control'
                          placeholder='Enter Time Period'
                          value={jobExpData.companyExpDuration}
                          onChange={(e) =>
                            setjobExpData({
                              ...jobExpData,
                              companyExpDuration: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-12 form-group form-check'>
                        <label
                          htmlFor='companyExpDetail'
                          style={{fontWeight: "600"}}
                        >
                          How did you add value to their organization?
                        </label>
                        <textarea
                          rows='6'
                          name='companyExpDetail'
                          value={jobExpData.companyExpDetail}
                          className='form-control'
                          onChange={(e) =>
                            setjobExpData({
                              ...jobExpData,
                              companyExpDetail: e.target.value,
                            })
                          }
                          placeholder='Describe in bullet points on what you did at the company.'
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-12 text-center'>
                        <input
                          type='submit'
                          value='SAVE'
                          style={{
                            backgroundColor: "#3384FF",
                            color: "#fff",
                            padding: "15px 30px",
                            border: "none",
                            borderRadius: "100px",
                            marginTop: "20px",
                            fontWeight: "600",
                          }}
                        />
                      </div>
                    </div>
                  </form>
                </>
              ) : (
                ""
              )}
              {projectFormStatus ? (
                <>
                  <form onSubmit={handleSubmit}>
                    <div className='row'>
                      <div className='col-6 form-group form-check'>
                        <label htmlFor='' style={{fontWeight: "600"}}>
                          Project Name
                        </label>
                        <input
                          className='form-control'
                          placeholder='Enter Project Name'
                          name='projectName'
                          id='projectName'
                          value={projectExpData.projectName}
                          onChange={(e) =>
                            setProjectExpData({
                              ...projectExpData,
                              projectName: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div className='col-6 form-group form-check'>
                        <label htmlFor='' style={{fontWeight: "600"}}>
                          When did you work on this project?
                        </label>
                        <input
                          type='date'
                          className='form-control'
                          placeholder='Select Date'
                          name='projectYear'
                          id='projectYear'
                          value={projectExpData.projectYear}
                          onChange={(e) =>
                            setProjectExpData({
                              ...projectExpData,
                              projectYear: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-6 form-group form-check'>
                        <label htmlFor='' style={{fontWeight: "600"}}>
                          Upload project file or enter link
                        </label>
                        <input
                          className='form-control'
                          placeholder='Upload File'
                          name='projectLink'
                          id='projectLink'
                          value={projectExpData.projectLink}
                          onChange={(e) =>
                            setProjectExpData({
                              ...projectExpData,
                              projectLink: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div className='col-6 form-group form-check'>
                        <label htmlFor='' style={{fontWeight: "600"}}></label>
                        <input
                          className='form-control'
                          placeholder='Enter Link'
                          name='projectLink'
                          id='projectLink'
                          value={projectExpData.projectLink}
                          onChange={(e) =>
                            setProjectExpData({
                              ...projectExpData,
                              projectLink: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-12 form-group form-check'>
                        <label htmlFor='' style={{fontWeight: "600"}}>
                          What did you do in this project?
                        </label>
                        <textarea
                          rows='6'
                          className='form-control'
                          placeholder='Describe in bullet points on what you did'
                          name='projectDetail'
                          id='projectDetail'
                          value={projectExpData.projectDetail}
                          onChange={(e) =>
                            setProjectExpData({
                              ...projectExpData,
                              projectDetail: e.target.value,
                            })
                          }
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-12 text-center'>
                        <input
                          type='submit'
                          value='SAVE'
                          style={{
                            backgroundColor: "#3384FF",
                            color: "#fff",
                            padding: "15px 30px",
                            border: "none",
                            borderRadius: "100px",
                            marginTop: "20px",
                            fontWeight: "600",
                          }}
                        />
                      </div>
                    </div>
                  </form>
                </>
              ) : (
                ""
              )}
            </>
          )}
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
          className={`next ${
            allExperience.jobExp.length > 0 ||
            allExperience.projectExp.length > 0
              ? ""
              : "opacity"
          }`}
          disabled={
            allExperience.jobExp.length > 0 ||
            allExperience.projectExp.length > 0
              ? ""
              : "disabled"
          }
          onClick={() => {
            props.screenChanged("workExprience", allExperience);
          }}
        >
          Next
        </button>
      </div>
    </fieldset>
  );
};
export default FormStepThree;
