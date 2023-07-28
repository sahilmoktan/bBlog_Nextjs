import React from "react";
import "./messageSender.css";
import { Avatar } from "@material-ui/core";

export default function MessageSender() {
  return (
    <div className="messageSender">
      <div className="messageSender_top">
        <Avatar />
        <form>
          <input
            className="messageSender_input"
            placeholder={`What's on your mind`}
          />

          
        </form>
      </div>

      <div className="messageSender_bottom"></div>
    </div>
  );
}
