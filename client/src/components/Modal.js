import React from "react";
import ReactDOM from "react-dom";
import history from "../history";

const Modal = props => {
  // creating porttal
  return ReactDOM.createPortal(
    <div
      onClick={() => history.push("/")}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">Delete Stream</div>
        <div className="content">
          Are you sure you want to delete this stream?
        </div>
        <div className="actions">
          <div className="ui buttons">
            <button className="ui negative button">Delete</button>
            <div className="or" />
            <button className="ui  button">Cancel</button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
