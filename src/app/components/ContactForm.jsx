"use client"

import React, { useState } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
// 6LffQkQpAAAAALG5mb_T2OOmgmFOVCI-EKi1W8Wc
const ContactForm = () => {
     
    const initialFormData = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
       
    };
    const [formData, setFormData] = useState("initialFormData");
    const [submitMessage, setSubmitMessage] = useState('');
    const [capVal, setCapVal ] = useState(null)
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Make the API request
            const response = await axios.post('http://localhost:3001/api/contact', formData);

            // Set the success message
            setSubmitMessage('Enquiry booked we Will get back to you soon');

            // Clear the form inputs
            setFormData(initialFormData);

            console.log('Axios Response:', response.data);
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    

  return (
    <>
    <div className="form-box">
          <p>Get in touch with us to get the ball rolling:</p>
          <hr />
          {submitMessage && (
                    <div className="alert alert-success" role="alert" style={{ width: '100%' }}>
                        {submitMessage}
                    </div>
                )}
          {/* Google recaptcha API library */}
          <form action="" method="post" id="register" onSubmit={handleSubmit} className="c-form">
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
                  // minLength={10}
                  className="form-control-contact"
                  placeholder="Name"
                  value={formData.name}
                            onChange={handleChange}
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
                  value={formData.email}
                            onChange={handleChange}
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
                  name="phone"
                  required="true"
                  minLength={10}
                  className="form-control-contact"
                  placeholder="Mobile"
                  value={formData.phone}
                            onChange={handleChange}
                />
                 {formData.phone && isNaN(formData.phone) && <div className="error-message">Please enter a valid number.</div>}
        {formData.phone && formData.phone.length < 10 && <div className="error-message">Phone number should be at least 10 digits.</div>}
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
                  value={formData.subject}
                            onChange={handleChange}
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
                  value={formData.message}
                            onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <ReCAPTCHA
                sitekey='6LffQkQpAAAAALG5mb_T2OOmgmFOVCI-EKi1W8Wc'
                onChange={(val)=>setCapVal(val)}
                />
                {/* <div className="form-input">
                 
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
                </div> */}
              </div>
            </div>
            <div className="row" style={{ marginTop: 10 }}>
              <div className="col-sm-12">
                <input
                    enabled={!capVal}
                  type="submit"
                  name="contact"
                  className="btn theme-btn btn-arrow"
                  defaultValue="Submit Request"
                />
              </div>
            </div>
          </form>
        </div>
      
    </>
  )
}

export default ContactForm