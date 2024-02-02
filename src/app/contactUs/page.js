import React from 'react'
import Link from 'next/link';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {faPhone,faLocationDot } from '@fortawesome/free-solid-svg-icons';
import ContactForm from '@/app/components/ContactForm';
const page = () => {
  return (
    <>
<div
  className="page-title image-title"
  style={{ backgroundImage: "url(https://topindiatrips.com/assets/img/lad.jpg)" }}
>
  <div className="container">
    <div className="page-title-wrap">
      <h2 style={{ fontWeight: 600 }}>Contact us</h2>
      <p>
        <a href="#" className="theme-cl">
          Home
        </a>{" "}
        |{" "}
        <span>
          <i> Contact us</i>
        </span>
      </p>
    </div>
  </div>
</div>


{/* ======================= Hero Section ====================== */}
<section className="gray-bg">
  <div className="container">
    <div className="row">
      <div className="col-md-5 col-sm-5">
        <div className="form-box">
          <div className="form-center">
          <FontAwesomeIcon icon={faEnvelope} style= {{width:'28px'}}  />
            <div className="c-details">
              <strong>Email On:</strong>
              <p style={{ textTransform: "lowercase" }}>
                support@topindiatrips.com
              </p>
            </div>
          </div>
        </div>
        <div className="form-box">
          <div className="form-center">
          <FontAwesomeIcon icon={faPhone} style= {{width:'28px'}} />
            <div className="c-details">
              <strong>Call Us:</strong>
              <p>(+91) 93553 36687</p>
            </div>
          </div>
        </div>
        <div className="form-box">
          <div className="form-center">
          <FontAwesomeIcon icon={faLocationDot} style= {{width:'20px'}} />
            <div className="c-details">
              <strong>Location:</strong>
              <p>
                Mahipalpur, New Delhi
                <br />
                India
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-7 col-sm-7">
        {/* <div className="form-box">
          <p>Get in touch with us to get the ball rolling:</p>
          <hr />
         
          <form action="" method="post" id="register" className="c-form">
            <div className="row">
              <div className="col-sm-6">
                <label>
                  Name<sup className="cl-danger">*</sup>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue=""
                  required="true"
                  className="form-control-contact"
                  placeholder="Name"
                />
              </div>
              <div className="col-sm-6">
                <label>
                  Email<sup className="cl-danger">*</sup>
                </label>
                <input
                  type="email"
                  defaultValue=""
                  name="email"
                  className="form-control-contact"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <label>
                  Phone<sup className="cl-danger">*</sup>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  name="mobile"
                  required="true"
                  className="form-control-contact"
                  placeholder="Mobile"
                />
              </div>
              <div className="col-sm-6">
                <label>Subject</label>
                <input
                  type="text"
                  defaultValue=""
                  name="subject"
                  required="true"
                  className="form-control-contact"
                  placeholder="Subject"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <label>Message</label>
                <textarea
                  className="form-control-contact height-150"
                  rows={10}
                  cols={100}
                  name="message"
                  placeholder="Write message"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="form-input">
                 
                  <div
                    className="g-recaptcha"
                    data-sitekey="6Le15O4cAAAAABkpuqVaS2wdQJG2ol_O9cHIARUx"
                  >
                    <div style={{ width: 304, height: 78 }}>
                      <div>
                        <iframe
                          title="reCAPTCHA"
                          width={304}
                          height={78}
                          role="presentation"
                          name="a-7lfdugk9ebmj"
                          frameBorder={0}
                          scrolling="no"
                          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                          src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6Le15O4cAAAAABkpuqVaS2wdQJG2ol_O9cHIARUx&co=aHR0cHM6Ly90b3BpbmRpYXRyaXBzLmNvbTo0NDM.&hl=en&v=cwQvQhsy4_nYdnSDY4u7O5_B&size=normal&cb=75pmwg7suo05"
                        />
                      </div>
                      <textarea
                        id="g-recaptcha-response"
                        name="g-recaptcha-response"
                        className="g-recaptcha-response"
                        style={{
                          width: 250,
                          height: 40,
                          border: "1px solid rgb(193, 193, 193)",
                          margin: "10px 25px",
                          padding: 0,
                          resize: "none",
                          display: "none"
                        }}
                        defaultValue={""}
                      />
                    </div>
                    <iframe style={{ display: "none" }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{ marginTop: 10 }}>
              <div className="col-sm-12">
                <input
                  type="submit"
                  name="contact"
                  className="btn theme-btn btn-arrow"
                  defaultValue="Submit Request"
                />
              </div>
            </div>
          </form>
        </div> */}
        <ContactForm/>
      </div>
    </div>
  </div>
</section>

</>
  )
}

export default page