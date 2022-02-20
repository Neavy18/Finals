import React from "react";
import './RequestInfoMsg.css';
import { useEffect } from "react";

const RequestMessage = ({requestMessage, setRequestMessage}) => {

  const reloadHome = () => {
    window.location.reload();
  }

  return (
    <div className="MessagePopUp">
      <div className="MessagePopUpInner">
        <button className="close-btn" onClick={() => reloadHome()}> 
          <i class="fa-solid fa-xmark"></i> 
        </button>
        <h3>Thank you for your interest in {requestMessage}, the naaaame should email you shortly!</h3>
      </div>
    </div>
  )
}

export default RequestMessage;