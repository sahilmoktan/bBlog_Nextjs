import "./feed.css";
import StoryReel from "../StoryReel/StoryReel";


export default function Feed() {
  return (
    <div className="feed">
      <StoryReel  />
      
      
      
      
      
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
