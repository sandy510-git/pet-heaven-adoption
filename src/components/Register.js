
import { useFormik } from "formik";
import "./Register.css";
import { Button } from "react-bootstrap";
import { Schema } from "./Schema";
import React, { useState } from 'react';
import './popup.css';
import tickImage from '../Images/tick.png';

const initialValues = {
  first: "",
  last: "",
  email: "",
  repassword: "",
  password: "",
};

export const Register = () => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema: Schema,
    onSubmit: (values, action) => {
      alert(
        "Form is valid now!. You can make a call to API inside onSubmit function"
      );
      action.resetForm();
    },
  });

  const [showPopup, setShowPopup] = useState(false);

  const showPopupBox = () => {
    setShowPopup(true);
  };

  const hidePopupBox = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <section
        class="p-5 w-100"
        style={{ backgroundColor: "#eee", borderRadius: ".5rem .5rem 0 0" , margin : "12px" }}
      >
        <div class="row">
          <div class="col-12">
            <div class="card text-black" style={{ borderRadius: "25px" }}>
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mt-4">Membership Registeration Form</p>
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col text-left">
                          <label htmlFor="first" className="form-label">
                            First Name
                          </label>
                          <input
                            id="first"
                            name="first"
                            className="form-control"
                            value={values.first}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.first && touched.first ? (
                            <small className="text-danger mt-1">
                              {errors.first}
                            </small>
                          ) : null}
                        </div>
                        <div className="col text-left">
                          <label htmlFor="last`" className="form-label">
                            Last Name
                          </label>
                          <input
                            id="last"
                            name="last"
                            className="form-control"
                            value={values.last}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.last && touched.last ? (
                            <small className="text-danger mt-1">
                              {errors.last}
                            </small>
                          ) : null}
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col text-left">
                          <label htmlFor="first" className="form-label">
                            Email
                          </label>
                          <input
                            id="email"
                            name="email"
                            className="form-control"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.email && touched.email ? (
                            <small className="text-danger mt-1">
                              {errors.email}
                            </small>
                          ) : null}
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col text-left">
                          <label htmlFor="first" className="form-label">
                            Password
                          </label>
                          <input
                            id="password"
                            name="password"
                            className="form-control"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="password"
                          />
                          {errors.password && touched.password ? (
                            <small className="text-danger mt-1">
                              {errors.password}
                            </small>
                          ) : null}
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col text-left">
                          <label htmlFor="first" className="form-label">
                            Confirm Password
                          </label>
                          <input
                            id="repassword"
                            name="repassword"
                            className="form-control"
                            value={values.repassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="password"
                          />
                          {errors.repassword && touched.repassword ? (
                            <small className="text-danger mt-1">
                              {errors.repassword}
                            </small>
                          ) : null}
                        </div>
                      </div>
                      <div className="row mt-3">
                         <div className="col text-right actionButtons">
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={resetForm}
                          >
                            Clear
                          </Button>

                          <Button
                            variant="primary"
                            size="sm"
                            onClick={showPopupBox}
                          >
                            Submit Application
                          </Button>
                        </div> 
                      </div>
                      <div className="row mt-3">
                        <br />
                        <div className="col text-right">
                          Already have an account? <a href="/">Sign in</a>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

      

        </div>
      </section>


      {/* POP UP Box */}
      <div style={{ display: showPopup ? 'block' : 'none' }} id="popupbox">
        <div className="popup" id="popup">
        
          <img src={tickImage} width="100" height="100" alt="tick image" />

          <h2>Successful!</h2>
          <p>Your submission has been successfully completed.Your form is to be mailed to the administrator.Thanks!  </p>
          <button type="button" onClick={hidePopupBox}>OK</button>
        </div>
      </div>
    </div>
  );
};


