import "./feed.css";
import StoryReel from "../StoryReel/StoryReel";
import MessageSender from "../MessageSender/MessageSender";
import Post from "../Post/Post";


export default function Feed() {
  return (
    <div className="feed">
      <StoryReel  />
      <MessageSender/>
      <Post
      profilePic="https://sp-images.summitpost.org/947006.jpg?auto=format&fit=max&ixlib=php-2.1.1&q=35&w=1024&s=d877834568578388ef13b78e3cd7ba2b"
      message="Wow this works"      
      timestamp="It's timestamp"
      username="Soung"
      image="https://th.bing.com/th/id/OIP.RhhTNA_3b7FEwe03T3D3SQHaEK?pid=ImgDet&w=1366&h=768&rs=1"
      
      />
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
