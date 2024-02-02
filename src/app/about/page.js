import React from 'react'
import { resolve } from 'styled-jsx/css'
import Link from 'next/link';
import BootstrapCarousel from '../components/Slide'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import { faCircleQuestion,faUser} from '@fortawesome/free-regular-svg-icons'
import { faGlobe, faHeadphonesSimple } from '@fortawesome/free-solid-svg-icons';
const page = () => {
     


  return (
   <>
   {/* ===================== Contact Section Here ======================== */}
   <div
    className="page-title image-title"
    style={{
      backgroundImage: "url(https://topindiatrips.com/assets/img/taj.jpg)"
    }}
  >
    <div className="container">
      <div className="page-title-wrap">
        <h2>About Us</h2>
        <p>
          <a href="#" className="theme-cl">
            Home
          </a>{" "}
          | <span>About Us</span>
        </p>
      </div>
    </div>
  </div>


  <>
  {/* ================================== Who We Are ================================ */}
  <section>
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <p className="text-justify">
            Top India Trips is one of the best travel agency in India. We are
            award winning travel Company in Delhi. We have travel agency in
            Delhi with great professional team, designing unique, tailor-made
            tour package along with experience &amp; they know, how it takes the
            best program for our clients to help them and discover the beautiful
            country. Our company is specialize to offer best tour package in
            India (like… Rajasthan Tour Package, North India tour package, South
            India Tour Package, Kerala Tour Package…etc.), Nepal Tour Package,
            Bhutan Tour Package, Tibet Tour Package and Sri Lanka Tour Package.
          </p>
          <p className="text-justify">
            Our team have more than 15 years of experience in travel industry of
            India and they have deep knowledge of tour destinations of India and
            passionate to travel India on their tour vacations. Our multilingual
            team can Speak English, Spanish, Portuguese, French, German, Chinese
            and Japanese. Who can customize your tour package in your language
            like Golden Triangle Tours, Luxury Tours, Luxury Train Tours,
            Cultural and Heritage Tours, Family Tours, Honeymoon Tours, Wildlife
            tours, Adventure and Trekking Tours, Photography Tours, Beach
            holidays Tours, Pilgrimage and Temple Tours, Buddhist sector tours,
            Hill Stations Tours, Yoga and Ayurveda tours, Indian Festival Tours
            and many more Special interest tour package.
          </p>
        </div>
        <div className="col-md-6 col-sm-12">
          {/* row */}
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="info-module">
              <FontAwesomeIcon icon={faCircleQuestion} style={{fontSize:'45px', color:'#0fb76b',paddingBottom:'20px'}}/>
                <h4 className="infobox_title">24x7 Support</h4>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="info-module">
              <FontAwesomeIcon icon={faGlobe} style={{fontSize:'45px', color:'#0fb76b',paddingBottom:'20px'}}/>
                <h4 className="infobox_title">150+ Cities</h4>
              </div>
            </div>
          </div>
          {/* /row */}
          {/* row */}
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="info-module">
              <FontAwesomeIcon icon={faHeadphonesSimple} style={{fontSize:'45px', color:'#0fb76b',paddingBottom:'20px'}}/>
                <h4 className="infobox_title">10+ Branches</h4>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="info-module">
              <FontAwesomeIcon icon={faUser} style={{fontSize:'45px', color:'#0fb76b',paddingBottom:'20px'}}/>
                <h4 className="infobox_title">100+ Guides</h4>
              </div>
            </div>
          </div>
          {/* /row */}
        </div>
        <div className="col-md-12">
          <p className="text-justify">
            In our customize tour package, we add some additional test of India
            and show local village of India, offer to meet with local people of
            India and also can organize dinner with India families and get real
            test of India. Also add holy sites of India, off beaten sites, food
            experiences, local markets, story trails, classical and folk art
            forms, local folk dance and many more.
          </p>
          <p className="text-justify">
            Our company also support local communities, women, children’s,
            artisans and encourage sustainable travel practices. We organize
            fixed departures and customized tours for groups, families and solo
            travelers.
          </p>
          <p className="text-justify">
            Our agency have a strong and loyal relationships with all our Indian
            suppliers specially hoteliers, guides (who have recommended by our
            clients), transporters for all types of vehicles (We are not using
            the vehicles older than 2 years) and others suppliers. We never
            compromise with the services of customers. Due to the strong
            relationships, we have very good special rate from the hotels,
            transporters and other suppliers and we pass the same benefits to
            our clients. We have good network of our offices in all major
            tourist cities across India, Nepal, Bhutan, Tibet, Sri Lanka and
            most of the Asian countries.
          </p>
          <p className="text-justify">
            Please get in touch and let us know and make your trip to India
            truly perfect. We would be delighted to help your plan and organize
            a best and memorable trip of India. We will be with you every step
            of the planning process, to ensure that you get the best possible
            experience in magical India. Our travel expert available 24-hours a
            day, 7-days a week. They can suggest you one of the best tour
            package, which can fit as per your budget.
          </p>
          <p className="text-justify">
            Contact us:{" "}
            <a href="mailto:info@topindiatrips.com">info@topindiatrips.com</a>{" "}
            or Call / Whatsapp:{" "}
            <a href="https://wa.me/919355336687">+91 9355336687</a>
          </p>
          <div
            className="sharethis-inline-share-buttons st-center st-has-labels  st-inline-share-buttons st-animated"
            style={{ marginTop: 20 }}
            id="st-2"
          >
            <div className="st-total st-hidden">
              <span className="st-label" />
              <span className="st-shares" style={{ display: "none" }}>
                Shares
              </span>
            </div>
            <div
              className="st-btn st-first"
              data-network="facebook"
              style={{ display: "inline-block" }}
            >
              <img
                alt="facebook sharing button"
                src="https://platform-cdn.sharethis.com/img/facebook.svg"
              />
              <span className="st-label"  style={{ display: "none" }}>Share</span>
            </div>
            <div
              className="st-btn"
              data-network="twitter"
              style={{ display: "inline-block" }}
            >
              <img
                alt="twitter sharing button"
                src="https://platform-cdn.sharethis.com/img/twitter.svg"
              />
              <span className="st-label"  style={{ display: "none" }}>Tweet</span>
            </div>
            <div
              className="st-btn"
              data-network="linkedin"
              style={{ display: "inline-block" }}
            >
              <img
                alt="linkedin sharing button"
                src="https://platform-cdn.sharethis.com/img/linkedin.svg"
              />
              <span className="st-label"  style={{ display: "none" }}>Share</span>
            </div>
            <div
              className="st-btn"
              data-network="whatsapp"
              style={{ display: "inline-block" }}
            >
              <img
                alt="whatsapp sharing button"
                src="https://platform-cdn.sharethis.com/img/whatsapp.svg"
              />
              <span className="st-label"  style={{ display: "none" }}>Share</span>
            </div>
            <div
              className="st-btn st-last"
              data-network="messenger"
              style={{ display: "inline-block" }}
            >
              <img
                alt="messenger sharing button"
                src="https://platform-cdn.sharethis.com/img/messenger.svg"
              />
              <span className="st-label"  style={{ display: "none" }}>Share</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>
<>
  {/* ================================= Start Testimonial ================================ */}
  <section className="half-bg">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="heading light">
            <span className="cl-white">Our Testimonials</span>
            <h1 style={{ color: "#fff" }}>What People Says</h1>
          </div>
        </div>
      </div>
      <div className="row">
       
          <BootstrapCarousel />
      </div>
      <div className="clearfix" />
    </div>
  </section>
</>

   </>
  )
}

export default page