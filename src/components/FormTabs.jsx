import React from "react";
import "../index.css";
import vector from '../assets/images/Vector.png';
import file from '../assets/images/file.png';

const FormTabs = (props) => {

  let tabStyling = (listId)=>{
    if(listId<props.stepCount){
      return 'tab_activated'
    }
    return 'list_li'
  }
  return (
    <ul className='list'>
      {
        props.tabItems.map(item =>(
          <li id={item.id} className={props.stepCount===item.id?'current_tab':tabStyling(item.id)} key={item.id}>
          <img src={file} alt="file-icon" /><span className="tab-text">{item.name}{" "}</span>
          <span className={item.id<props.stepCount?"list_activated_span":"icon-outer"}>
            <span className='icon' ><img src={vector} alt="arrow" /></span>
          </span>
        </li>
        ))
      }
    </ul>
  );
};

export default FormTabs;
