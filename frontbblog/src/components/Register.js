import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "./register.css";

function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [occupation, setOccupation] = useState("");
  const navigate = useNavigate()

  useEffect(()=>{
    const auth = localStorage.getItem('user')
    if(auth){
        navigate('/')
    }
  })

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleregister = async () => {
    console.log(
      firstname,
      lastname,
      email,
      confirmPassword,
      number,
      date,
      location,
      occupation
    );

    const result = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ 
        firstname,
        lastname,
        email,
        confirmPassword,
        number,
        date,
        location,
        occupation}),
    };
    fetch("http://localhost:3001/api/users/register", result);
    if (result){
      // localStorage.setItem("user", JSON.stringify(result))
      navigate('/login')
    }

  };

  return (
    <section className="container" style={{ width: "700px" }}>
      <Formik
        initialValues={{ password: "", confirmPassword: "" }}
        validationSchema={validationSchema}
      >
        <Form action="#" className="form">
        <div className="title">
          <header>Sign Up</header>
        </div>
          <div className="column">
            <div className="input-box">
              <label>First Name</label>
              <input
                type="text"
                placeholder="Enter first name"
                onChange={(e) => setFirstname(e.target.value)}
                value={firstname}
                required
              />
            </div>
            <div className="input-box">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Enter last name"
                onChange={(e) => setLastname(e.target.value)}
                value={lastname}
                required
              />
            </div>
          </div>
          <div className="input-box">
            <label>Email Address</label>
            <input
              type="text"
              placeholder="Enter email address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>

          <div className="column">
            <div className="input-box">
              <label>Password</label>
              <Field
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </div>
            <div className="input-box">
              <label>Confirm Password</label>
              <Field
                type="password"
                placeholder="Enter Password Again"
                onChange={(e) => setconfirmPassword(e.target.value)}
                value={confirmPassword}
                required
              />
              <ErrorMessage name="confirmPassword" component="div" />
            </div>
          </div>

          <div className="column">
            <div className="input-box">
              <label>Phone Number</label>
              <input
                type="number"
                placeholder="Enter phone number"
                pattern="[+]?[0-9]*"
                onChange={(e) => setNumber(e.target.value)}
                value={number}
                required
              />
            </div>
            <div className="input-box">
              <label>Birth Date</label>
              <input
                type="date"
                placeholder="Enter birth date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
                required
              />
            </div>
          </div>
          <div className="gender-box">
            <h3>Gender</h3>
            <div className="gender-option">
              <div className="gender">
                <input type="radio" id="check-male" name="gender" />
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
            <input
              type="text"
              placeholder="Enter Your address"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              required
            />
          </div>
          <div className="input-box address">
            <label>Occupation</label>
            <input
              type="text"
              placeholder="Your Occupation"
              onChange={(e) => setOccupation(e.target.value)}
              value={occupation}
              required
            />
          </div>
          <button onClick={handleregister}>Create My Account</button>
          <label style={{ color: "#707070", marginTop: "10px" }}>
            Already have an account?{" "}
          </label>
          <Link to="/login">Login now</Link>
        </Form>
      </Formik>
    </section>
  );
}

export default Register;
