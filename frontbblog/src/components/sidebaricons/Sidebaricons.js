import React from 'react'
import './sidebaricons.css'
import { IconButton } from "@material-ui/core";
import PeopleIcon from '@mui/icons-material/People';
import FeedIcon from '@mui/icons-material/Feed';
import FeedbackIcon from '@mui/icons-material/Feedback';
import WebIcon from '@mui/icons-material/Web';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StorefrontIcon from "@mui/icons-material/Storefront";
import CampaignIcon from '@mui/icons-material/Campaign';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';



export default function Sidebaricons() {
  return (
    <div className='Sidebaricons' style={{
      justifyContent: "left",
        display: "grid",
        gridTemplateRows: "repeat(auto-fill, 40px)", // Buttons will have a minimum height of 40px and take equal available vertical space
        gap: "10px", // Optional: Add spacing between the buttons 
      }}>
        <div className="sidIbar">
      <IconButton>
          <PeopleIcon /> <h6> Friends</h6>
        </IconButton>
        </div>
        <div className="sidIbar">
        <IconButton>
          <FeedIcon /> <h6> News Feed</h6>
        </IconButton>
        </div>

        <div className="sidIbar">
        <IconButton>
          <SlowMotionVideoIcon /> <h6> Watch</h6>
        </IconButton>
        </div>

        <div className="sidIbar">
        <IconButton>
          <WebIcon /> <h6> Pages</h6>
        </IconButton>
        </div>

        <div className="sidIbar">
        <IconButton>
          <StorefrontIcon /> <h6> Market Place</h6>
        </IconButton>
        </div>

        <div className="sidIbar">
        <IconButton>
          <BookmarkIcon /> <h6> Saved</h6>
        </IconButton>
        </div>
        

        <div className="sidIbar">
        <IconButton>
          <EventAvailableIcon /> <h6> Events</h6>
        </IconButton>
        </div>

        <div className="sidIbar">
        <IconButton>
          <CampaignIcon /> <h6> Ad Center</h6>
        </IconButton>
        </div>
          
        <div className="sidIbar">
        <IconButton>
          <FeedbackIcon /> <h6> Feedback</h6>
        </IconButton>
        </div>
    </div>
  )
}
