import React from "react";
import "./functionbar.css";

/**
 * @author
 * @function FunctionBar
 **/

export const FunctionBar = (props) => {
  return (
    <div className="function-bar__ticket-list">
      <button className="print">
        <i class="fas fa-print"></i>
      </button>
      <button className="edit">
        <i class="far fa-edit"></i>
      </button>
      <button className="change-chair">
        <i class="fas fa-exchange-alt"></i>
      </button>
      <button className="change-ticket">
        <i class="fas fa-expand-arrows-alt"></i>
      </button>
    </div>
  );
};
