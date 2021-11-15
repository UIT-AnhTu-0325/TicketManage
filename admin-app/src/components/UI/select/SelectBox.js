import React from "react";
import "./selectbox.css";
/**
 * @author
 * @function SelectBox
 **/

export const SelectBox = (props) => {
  return (
    <div className="selectbox">
      <div className="title">{props.title}</div>
      <select value={props.value} onChange={props.onChange}>
        <option></option>
        {props.listCity.map((option) => {
          if (props.routeDetail) {
            return (
              <option key={option._id} value={option._id}>
                {option.quality} - {option.totalSeat}
              </option>
            );
          } else {
            return (
              <option key={option._id} value={option.name}>
                {option.name}
              </option>
            );
          }
        })}
      </select>
    </div>
  );
};
