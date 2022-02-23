import React from "react";
import './LikeMsg.css';
import { useEffect } from "react";

const LikeMsg = ({likeMessage, setShowLikeMessage}) => {

  const reloadHome = () => {
    window.location.reload();
  }

  return (
    <div className="MessagePopUp">
      <div className="MessagePopUpInner">
        <h2><strong>{likeMessage}</strong> was added to your favorites!</h2>
        <br></br>
        <button className="close-btn" onClick={() => setShowLikeMessage(false)}> 
        <i class="fa-solid fa-circle-check"></i>
        </button>
      </div>
    </div>
  )
}

export default LikeMsg;