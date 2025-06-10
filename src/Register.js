import React, { useState } from "react";
import { json, Link, useNavigate } from "react-router-dom";

function Register() {

  const [Password,setPassword] = useState();
  const [email,setemail] = useState();
  const nav =useNavigate();


  const handleAdd = (e) => {
    e.preventDefault();

    // console.log({name,email})

    fetch("http://localhost:8967/users", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({  email,Password }),
    }).then((res) => {
      if (res) {
        alert("Register Sucssesfuly   ");
        nav("/Login");
        
      }
    });
  };


  return (
    <div>
      <div>
        <section className="banner-area organic-breadcrumb">
          <div className="container">
            <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
              <div className="col-first">
                <h1>Register</h1>
                <nav className="d-flex align-items-center">
                  <Link to="/home">
                    Home
                    <span className="lnr lnr-arrow-right" />
                  </Link>
                  <a href="category.html">Register</a>
                </nav>
              </div>
            </div>
          </div>
        </section>
        {/* End Banner Area */}
        {/*================Login Box Area =================*/}
        <section className="login_box_area section_gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="login_box_img">
                  <img className="img-fluid" src="img/login.jpg"  />
                  <div className="hover">
                    <h4>New to our website?</h4>
                    <p>
                      There are advances being made in science and technology
                      everyday, and a good example of this is the
                    </p>
                    <a className="primary-btn" href="registration.html">
                      Create an Account
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="login_form_inner">
                  <h3>Register</h3>
                  <form 
                    onSubmit={handleAdd}
                    className="row login_form"
                    // action="contact_process.php"
                    method="post"
                    id="contactForm"
                    noValidate="novalidate"
                  >
                    <div className="col-md-12 form-group">
                      <input
                        type="email"
                        className="form-control"
                        // id="name"
                        // name="name"
                        value={email}
                        onChange={(e)=>{
                            setemail(e.target.value)
                        }}
                        placeholder="Username"
                        // onfocus="this.placeholder = ''"
                        // onblur="this.placeholder = 'Username'"
                        

                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={Password}
                        placeholder="Password"
                        // onfocus="this.placeholder = ''"
                        // onblur="this.placeholder = 'Password'"
                        onChange={(e)=>{
                          setPassword(e.target.value)
                        }}  
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <div className="creat_account">
                        <input type="checkbox" id="f-option2" name="selector" />
                        <label htmlFor="f-option2">Keep me logged in</label>
                      </div>
                    </div>
                    <div className="col-md-12 form-group">
                      <button
                        type="submit"
                        value="submit"
                        className="primary-btn"
                      >
                        Log In
                      </button>
                      {/* <a href="#">Forgot Password?</a> */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );

}
export default Register;
