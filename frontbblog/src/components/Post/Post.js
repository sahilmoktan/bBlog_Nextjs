import React from 'react'
import './post.css'
import { Avatar } from '@material-ui/core'


export default function Post({profilePic, image, username, timestamp, message}) {
  return (
    <div className='post'>
        <div className="post_top">
            <Avatar src={profilePic} className='post_avatar'/>
        <div className="post_topInfo">
            <h4>{username}</h4>
            <p>Timestam ....</p>
        </div>
        </div>
        
        
        
        <div className="post_bottom">
            <p>{message}</p>
        </div>
        
        <div className="post_image">
            <img src={image} alt='' />
        </div>
        

    </div>
  )
}
