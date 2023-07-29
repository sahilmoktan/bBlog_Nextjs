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
      username="Soung Rai"
      image="https://th.bing.com/th/id/OIP.RhhTNA_3b7FEwe03T3D3SQHaEK?pid=ImgDet&w=1366&h=768&rs=1"
      />
    
      <Post
      profilePic="https://www.bing.com/th?id=OIP.UzuYMXdB3DPUnPOewhakCwHaFe&w=150&h=111&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
      message="Welcom to my city"      
      timestamp="It's timestamp"
      username="Milan Lama"
      image="https://jooinn.com/images/city-landscape-36.jpg"
      />
    
      <Post
      profilePic="https://www.bing.com/th?id=OIP.PztowP3ljup0SM75tkDimQHaHa&w=150&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
      message="Nature Wow....."      
      timestamp="It's timestamp"
      username="Cristina Joe"
      image="https://th.bing.com/th/id/R.595da56c25fb18454359d9bf91c5432c?rik=lggN0IN4O53ECg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f04%2fImages-photos-landscape-wallpaper-HD.jpg&ehk=sAIIB517XpgH6aP3FLebJUZMNJJZigG4IhGUky4rld8%3d&risl=&pid=ImgRaw&r=0"
      />
      
      
               
      
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
