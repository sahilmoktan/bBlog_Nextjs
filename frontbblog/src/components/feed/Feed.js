import "./feed.css";
import StoryReel from "../StoryReel/StoryReel";
import MessageSender from "../MessageSender/MessageSender";
import Post from "../Post/Post";


export default function Feed() {
  return (
    <div className="feed">
      <StoryReel  />
      <MessageSender/>
      <Post/>
      <Post/>
      <Post/>
      
               
      
      {/* <div className="feedWrapper">
        
        <h3>This is post feed section </h3>
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div> */}
    </div>
  );
}
