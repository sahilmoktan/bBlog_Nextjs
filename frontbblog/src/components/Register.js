import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";




function Register() {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [occupation, setOccupation] = useState("");

  const handleregister = async () => {
    console.log(firstname,lastname, email, conPassword, number, date,location,occupation);
  
  }


  return (
    <section className="container" style={{width:"700px"}}>
      <div className="title">
      <header>Sign Up</header>
      </div>
      <form action="#" className="form">
      <div className="column">
        <div className="input-box">
          <label>First Name</label>
          <input type="text" placeholder="Enter first name" onChange={(e) => setFirstname(e.target.value)}
                    value={firstname}required />
        </div>
        <div className="input-box">
          <label>Last Name</label>
          <input type="text" placeholder="Enter last name" onChange={(e) => setLastname(e.target.value)}
                    value={lastname}required />
        </div>
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input type="text" placeholder="Enter email address" onChange={(e) => setEmail(e.target.value)}
                    value={email}required />
        </div>
        
        <div className="column">
          <div className="input-box">
          <label>Password</label>
          <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}
                    value={password}required />
        </div>
          <div className="input-box">
          <label>Confirm Password</label>
          <input type="password" placeholder="Enter Password Again" onChange={(e) => setConPassword(e.target.value)}
                    value={conPassword}required />
        </div>
        </div>
        
        <div className="column">
          <div className="input-box">
            <label>Phone Number</label>
            <input type="number" placeholder="Enter phone number"
            onChange={(e) => setNumber(e.target.value)}
            value={number} required />
          </div>
          <div className="input-box">
            <label>Birth Date</label>
            <input type="date" placeholder="Enter birth date" 
            onChange={(e) => setDate(e.target.value)}
            value={date}required />
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
          <input type="text" placeholder="Enter Your address" onChange={(e) => setLocation(e.target.value)}
                    value={location} required />
        </div>
        <div className="input-box address">
        <label>Occupation</label>
          <input type="text" placeholder="Your Occupation" onChange={(e) => setOccupation(e.target.value)}
                    value={occupation} required />
          </div>
        <button onClick={handleregister} >Create My Account</button>
        <label style={{color:'#707070',marginTop:'10px'}}>Already have an account? </label> 
        <Link to='/login'>Login now</Link> 
      </form>
    </section>
  );
}

export default Register;
