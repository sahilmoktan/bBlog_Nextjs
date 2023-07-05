import React, {useState} from "react";
import Link from "next/link";



function RegisterPage() {
  return (
    <section className="container" style={{width:"700px"}}>
      <div className="title">
      <header>Sign Up</header>
      </div>
      <form action="#" className="form">
      <div className="column">
        <div className="input-box">
          <label>First Name</label>
          <input type="text" placeholder="Enter full name" required />
        </div>
        <div className="input-box">
          <label>Last Name</label>
          <input type="text" placeholder="Enter full name" required />
        </div>
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input type="text" placeholder="Enter email address" required />
        </div>
        
        <div className="column">
          <div className="input-box">
          <label>Password</label>
          <input type="password" placeholder="Enter Password" required />
        </div>
          <div className="input-box">
          <label>Confirm Password</label>
          <input type="password" placeholder="Enter Password Again" required />
        </div>
        </div>
        
        <div className="column">
          <div className="input-box">
            <label>Phone Number</label>
            <input type="number" placeholder="Enter phone number" required />
          </div>
          <div className="input-box">
            <label>Birth Date</label>
            <input type="date" placeholder="Enter birth date" required />
          </div>
        </div>
        <div className="gender-box">
          <h3>Gender</h3>
          <div className="gender-option">
            <div className="gender">
              <input type="radio" id="check-male" name="gender"/>
              <label>Male</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-female" name="gender" />
              <label>Female</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-other" name="gender" />
              <label>Other</label>
            </div>
          </div>
        </div>
        <div className="input-box address">
          <label>Location</label>
          <input type="text" placeholder="Enter Your address" required />
        </div>
        <div className="input-box address">
        <label>Occupation</label>
          <input type="text" placeholder="Your Occupation" required />
          </div>
        <button>Create My Account</button>
        <label style={{color:'#707070',marginTop:'10px'}}>Already have an account? </label> 
        <Link href='/login'>Login now</Link> 
      </form>
    </section>
  );
}

export default RegisterPage;
