import React from "react";
import Image from "next/image";
import Link from "next/link";

function LoginPage() {
  return (
    <div className="container">
      <input type="checkbox" id="flip" />
      <div className="cover">
        <div className="front">
          <Image
            src="https://images.unsplash.com/photo-1687800132770-8f1600a5849e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
            width={500}
            height={500}
            alt="mount"
          />
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
            <form action="#">
              <div className="input-boxes">
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
                <div className="text">
                  <a href="#">Forgot password?</a>
                </div>
                <div className="button input-box">
                  <input type="submit" value="Sumbit" />
                </div>
                <div className="text sign-up-text">
                  Don't have an account? <Link href='/register'>Create New Account</Link>
                </div>
              </div>
            </form>
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

export default LoginPage;
