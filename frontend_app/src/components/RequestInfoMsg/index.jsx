import React from "react";
import './RequestInfoMsg.css';
import { useEffect } from "react";

const RequestMessage = ({requestMessage, setShowRequestMessage}) => {

  const {
    name,
    refuge_name
  } = requestMessage

  return (
    <div className="RequestPopUp">
      <div className="RequestPopUpInner">
        <h3>Thank you for your interest in <strong>{name}</strong>,</h3>
        <h5>{refuge_name} should email you shortly!</h5>
        <button className="close-btn-request" onClick={() => setShowRequestMessage(false)}> 
        <i class="fa-solid fa-circle-check"></i>
        </button>
      </div>
    </div>
  )
}

export default RequestMessage;