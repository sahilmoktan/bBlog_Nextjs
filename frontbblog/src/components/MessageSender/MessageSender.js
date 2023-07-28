import React from "react";
import "./messageSender.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

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

      <div className="messageSender_bottom">
        <div className="messageSender_option">
        <VideocamIcon style={{color:'red'}}/>
        <h4>Live Video</h4>
        </div>
        <div className="messageSender_option">
        <PhotoLibraryIcon style={{color:'green'}}/>
        <h4>Photo/Video</h4>
        </div>
        <div className="messageSender_option">
        <InsertEmoticonIcon style={{color:'orange'}}/>
        <h4>Feeling/Acativity</h4>
        </div>
      </div>
    </div>
  );
}
