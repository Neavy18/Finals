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
        <button className="close-btn" onClick={() => setShowLikeMessage(false)}> 
          <i class="fa-solid fa-xmark"></i> 
        </button>
        <h3>{likeMessage} was added to your favorites!</h3>
      </div>
    </div>
  )
}

export default LikeMsg;