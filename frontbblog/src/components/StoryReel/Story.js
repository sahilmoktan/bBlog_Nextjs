import { Avatar } from "@material-ui/core";
import React from "react";
import "./story.css";

export default function Story({ image, profileSrc, title }) {
  return (
    <div className="story" style={{backgroundImage: `url(${image})`}}>
      <Avatar className="story_avatar" src={profileSrc} />
      <h4>{title}</h4>
    </div>
  );
}
