import React,{useState} from "react";
import { Link } from "react-router-dom";
import myImage from '../mot.jpg';



function Login() {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async()=>{
      console.log(email, password)
     
      // let result = await fetch("http://localhost:3001/api/users/login", {
      //     method: 'post',
      //     body:JSON.stringify({email,password}),
      //     headers:{
      //         'Content-Type': 'application/json'
      //     }
      //  })
      // result = await result.json()
      // console.warn(result)
      
      // if(result.accessToken){
          
      //     localStorage.setItem('user',JSON.stringify(result.user))
      //     localStorage.setItem('token',JSON.stringify(result.accessToken))
      //     navigate('/')
      // } else{
      //     console.log("please enter correct details");
      //     alert("please enter correct details")
      // }
  }

  return (
    <div className="container">
      <input type="checkbox" id="flip" />
      <div className="cover">
        <div className="front">
        <img src={myImage} alt="Description of the image" />
          <div className="text">
            <span className="text-1">
              Every new friend is a <br /> new adventure
            </span>
            <span className="text-2">Let's get connected</span>
          </div>
        </div>
        <div className="back">
          {/* <!--<img className="backImg" src="images/backImg.jpg" alt="">--> */}
          <div className="text">
            <span className="text-1">
              Complete miles of journey <br /> with one step
            </span>
            <span className="text-2">Let's get started</span>
          </div>
        </div>
      </div>
      <div className="forms">
        <div className="form-content">
          <div className="login-form">
            <div className="title">Login</div>
            
              <div className="input-boxes">
                <div className="input-box">
                  <i className="fas fa-envelope"></i>
                  <input type="text" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} value={email} required />
                </div>
                <div className="input-box">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} value={password}
                    required
                  />
                </div>
                <div className="text">
                  <a href="#">Forgot password?</a>
                </div>
                {/* <div className="button input-box">
                  <input type="submit" value="Sumbityy" />
                </div> */}
                <div className="buttton">
                  <button className="submit" type="submit" onClick={handleLogin} >Login</button>
                </div>

                <div className="text sign-up-text">
                  Don't have an account? <Link href='/register'>Create New Account</Link>
                </div>
              </div>
            
          </div>
          <div className="signup-form">
            <div className="title">Signup</div>
            <form action="#">
              <div className="input-boxes">
                <div className="input-box">
                  <i className="fas fa-user"></i>
                  <input type="text" placeholder="Enter your name" required />
                </div>
                <div className="input-box">
                  <i className="fas fa-envelope"></i>
                  <input type="text" placeholder="Enter your email" required />
                </div>
                <div className="input-box">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="button input-box">
                  <input type="submit" value="Sumbit" />
                </div>
                <div className="text sign-up-text">
                  Already have an account? <label>Login now</label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
