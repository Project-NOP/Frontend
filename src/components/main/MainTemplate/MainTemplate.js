import React from "react";
import "./MainTemplate.scss";
import Slider from "../Slider";

const MainTemplate = props => (
  <div className="MainTemplate">
    {props.sections.map(section => {
      return <Slider title={section.title} data={section.data} />;
    })}
  </div>
);
export default MainTemplate;
