"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import the library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import { faLocationArrow} from '@fortawesome/free-solid-svg-icons';

import {
           faXTwitter,
          faInstagram,
          faYoutube,
          faFacebook
}from '@fortawesome/free-brands-svg-icons'
library.add(
            faXTwitter,
          faInstagram,
          faYoutube,
          faFacebook
)

export default function Footer() {

  const initialFormData = {
   
    email: '',
};

const [formData, setFormData] = useState("initialFormData");
const [submitMessage, setSubmitMessage] = useState('');
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        // Make the API request
        const response = await axios.post('http://localhost:3001/api/subscribe', formData);

        // Set the success message
        setSubmitMessage("Succefully Subscribed");

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

  useEffect(() => {
    const handleScroll = () => {
      // Set the visibility of the button based on the scroll position
      setIsButtonVisible(window.scrollY > 0);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Cleanup: Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    
 <>
 
 <footer className="footer dark-bg">
  <div className="container">
    {/* Row Start */}
    <div className="row">
      <div className="col-md-9 col-sm-8">
        <div className="row">
          <div className="col-md-3 col-sm-4">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contactUs">Our Services</a>
              </li>
              <li>
                <a href="/blog">Blogs</a>
              </li>
              <li>
                <a href="/contactUs">Testimonial</a>
              </li>
              <li>
                <a href="/contactUs">Guest Photo Gallery</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-4">
            <h4>Featured Tours</h4>
            <ul>
              <li>
                <a href="trips.html">Best Tour Package</a>
              </li>
              <li>
                <a href="trips.html">Top Travel Destinations</a>
              </li>
              <li>
                <a href="trips.html">Tour by States of India</a>
              </li>
              <li>
                <a href="#">Top Tourist Attactions</a>
              </li>
              <li>
                <a href="trips.html">Fixed Departure Tour</a>
              </li>
              <li>
                <a href="#">
                  MICE - Meeting, Incentive, Conference, and Events
                </a>
              </li>
              <li>
                <a href="trips.html">Corporate Tour</a>
              </li>
              <li>
                <a href="trips.html">Hotel Booking</a>
              </li>
              <li>
                <a href="tour.html">Trasnport/Car on Rent</a>
              </li>
              <li>
                <a href="tour.html">Tour Guide Booking</a>
              </li>
              <li>
                <a href="tour.html">Air Ticket Booking</a>
              </li>
              <li>
                <a href="#">Forex Service</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-4">
            <h4>Genral Information</h4>
            <ul>
              <li>
                <a href="/contactUs">Tourist Attactions of India</a>
              </li>
              <li>
                <a href="/contactUs">Fair and Festivals of India</a>
              </li>
              <li>
                <a href="#">Shopping in India</a>
              </li>
              <li>
                <a href="#">Climates of India</a>
              </li>
              <li>
                <a href="#">Passport &amp; Visa</a>
              </li>
              <li>
                <a href="#">Travel Insurance</a>
              </li>
              <li>
                <a href="#">Online Payment</a>
              </li>
              <li>
                <a href="#">Must know before India tour</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-4">
            <h4>Legal Policy</h4>
            <ul>
              <li>
                <a href="/terms&conditions">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/disclaimer">Disclaimer</a>
              </li>
              <li>
                <a href="/cookies-policy">Cookies Policy</a>
              </li>
              <li>
                <a href="/contactUs">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-4">
        {/* App Links */}
        <div className="f-app-box" style={{ marginTop: 48 }}>
          <ul>
            <li>
              <img
                src="https://topindiatrips.com/assets/img/bottom.png"
                style={{ width: "90%" }}
              />
            </li>
          </ul>
        </div>
        <h4>Subscribe Now</h4>
        {/* Newsletter */}

        <div className="input-group">
 

  <form action="" method="post" onSubmit={handleSubmit}>
     {submitMessage && (
    <div className="alert alert-success" role="alert" style={{ width: '100%' }}>
      {submitMessage}
    </div>
  )}
    <input
      type="email"
      name="email"
      className="form-control-enquiry"
      placeholder="Enter Email"
      value={formData.email}
      onChange={handleChange}
    />
    <span className="input-group-btn">
      <button type="submit" className="btn btn-default">
        <FontAwesomeIcon icon={faLocationArrow} />
      
      </button>
    </span>
  </form>
        </div>

        {/* Social Box */}
        <div className="f-social-box">
          <ul>
            <li>
              <a
                target="blank"
                style={{ color: "blue" }}
                href="https://www.facebook.com/topindiatrips/"
              >
                <FontAwesomeIcon icon={faFacebook}  className='font-icon' style={{fontSize: '12px'}} />
              </a>
            </li>
            <li>
              <a
                target="blank"
                style={{ color: "#00aced" }}
                href="https://twitter.com/topindiatrips"
              >
                  <FontAwesomeIcon icon={faXTwitter}  className='font-icon' style={{fontSize: '12px',color:'#fff'}} />
              </a>
            </li>
            {/* <li><a target="blank" href="https://in.pinterest.com/topindiatripscom/"><i class="fa fa-pinterest pinterest-cl"></i></a></li> */}
            <li>
              <a
                target="blank"
                style={{ color: "#bc44bd" }}
                href="https://www.instagram.com/topindiatrips/"
              >
                   <FontAwesomeIcon icon={faInstagram} className='font-icon' style={{fontSize: '12px'}} />
              </a>
            </li>
            <li>
              <a
                target="blank"
                href="https://www.youtube.com/channel/UCThSFW7912NzHblxD64WBLw">
                    <FontAwesomeIcon icon={faYoutube}  className='font-icon' style={{fontSize: '12px'}} />
                {/* <FontAwesomeIcon icon="fa-brands fa-youtube" /> */}
               </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/* Row Start */}
    <div className="row">
      <div className="col-md-12">
        <div className="copyright text-center">
          <p>
            © Copyright 2035 Top India Trips | Powerd By{" "}
            <a
              href="https://sabalindia.com/"
              target="blank"
              title="SABALINDIA MARKETING PVT. LTD."
            >
              SABALINDIA MARKETING PVT. LTD.
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>
{isButtonVisible && (
        <button onClick={handleScrollToTop} id="myBtn" title="Go to top">
          Top
        </button>
      )}


<div className="fixadd">
  <a href="https://wa.me/919355336687" target="blank">
    <i className="fa fa-bell" aria-hidden="true" />
    Book my Trip
  </a>
</div>

 </>
  )
}
