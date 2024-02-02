import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faBookmark} from '@fortawesome/free-solid-svg-icons';
import {faCircleDot} from '@fortawesome/free-regular-svg-icons';
// import your icons
const TripList = () => {
  return (
   <>
   <>
  {/* ===================================== Main Tour Section ========================= */}
  <section className="gray-dot gray-bg">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="heading">
            <span className="theme-cl">Select Tour</span>
            <h1>India Tour Packages</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="main-content">
          <div className="list-slide-box center-col">
            <article className="tour-box style-1">
              {/* Single Tour */}
              <div className="tour-box-image">
                <figure>
                  <div className="zoom">
                    <a href="/tourdetail">
                      <img
                        src="https://topindiatrips.com/assets/uploads/491bfe34c2ba867db6d49e40b47b7e59.jpg"
                        className="img-responsive  listing-box-img"
                        alt=""
                      />
                      <div className="list-overlay" />
                    </a>
                  </div>
                  <div className="entry-bookmark">
                    <a href="#">
                      <i className="ti-bookmark" />
                    </a>
                  </div>
                  <div className="tour-time">
                    <div className="price-box">
                      <div className="tour-price fl-right">
                        {/* <i class="ti ti-money"></i><span class="theme-cl f-bold"><b>437</b></span> */}
                      </div>
                    </div>
                  </div>
                  <h4 className="tour-place">
                    <a href="/tourdetail">Golden Triangle</a>
                  </h4>
                  <span className="featured-tour">
                   <FontAwesomeIcon icon={faStar} style={{width:'10px', marginLeft: '5px'}} />
                  </span>
                </figure>
              </div>
              <div className="entry-meta">
                <div className="meta-item meta-author">
                  <div className="coauthors">
                    <span className="vcard author">
                      <span className="fn">
                        <a
                          href="/tourdetail"
                          title="Tour Category"
                          style={{ fontSize: 11 }}
                        >
                          <FontAwesomeIcon icon={faBookmark} style={{ width: '10px', paddingRight: '2px' }} />

                          Rajasthan Tour Package , Utt...
                        </a>
                      </span>
                    </span>
                  </div>
                </div>
                <hr style={{ marginTop: 2, marginBottom: 5 }} />
                <div className="meta-item meta-comment">
                  <span style={{ fontSize: 11 }}>6 Days | 5 Nights</span>
                </div>
              </div>
              <div className="inner-box">
                <div className="box-inner-ellipsis" style={{ minHeight: 40 }}>
                  <h4 className="entry-title" style={{ fontSize: 10 }}>
                    <a href="/tourdetail" className="dot" title="Tour Cities">
                     <FontAwesomeIcon icon={faCircleDot} style={{ width: '12px', paddingRight: '2px' }} /> Delhi - Jaipur
                      - Agra
                    </a>
                  </h4>
                </div>
              </div>
            </article>
          </div>
          <div className="list-slide-box center-col">
            <article className="tour-box style-1">
              {/* Single Tour */}
              <div className="tour-box-image">
                <figure>
                  <div className="zoom">
                    <a href="/tourdetail">
                      <img
                        src="https://topindiatrips.com/assets/uploads/b061848ed1c842ccf107466085908255.jpg"
                        className="img-responsive listing-box-img"
                        alt=""
                      />
                      <div className="list-overlay" />
                    </a>
                  </div>
                  <div className="entry-bookmark">
                    {/* <a href="#"><i class="ti-bookmark"></i></a> */}
                  </div>
                  <div className="tour-time">
                    <div className="price-box">
                      <div className="tour-price fl-right">
                        {/* <i class="ti ti-money"></i><span class="theme-cl f-bold"><b>599</b></span> */}
                      </div>
                    </div>
                  </div>
                  <h4 className="tour-place">
                    <a href="/tourdetail">
                      Golden Triangle with Amritsar and Chandigarh
                    </a>
                  </h4>
                  <span className="featured-tour">
                   <FontAwesomeIcon icon={faStar} style={{width:'10px', marginLeft: '5px'}} />
                  </span>
                </figure>
              </div>
              <div className="entry-meta">
                <div className="meta-item meta-author">
                  <div className="coauthors">
                    <span className="vcard author">
                      <span className="fn">
                        <a
                          href="/tourdetail"
                          title="Tour Category"
                          style={{ fontSize: 11 }}
                        >
                          <FontAwesomeIcon icon={faBookmark} style={{ width: '10px', paddingRight: '2px' }} />

                          Rajasthan Tour Package , Utt...
                        </a>
                      </span>
                    </span>
                  </div>
                </div>
                <hr style={{ marginTop: 2, marginBottom: 5 }} />
                <div className="meta-item meta-comment">
                  <span style={{ fontSize: 11 }}>9 Days | 8 Nights</span>
                </div>
              </div>
              <div className="inner-box">
                <div className="box-inner-ellipsis" style={{ minHeight: 40 }}>
                  <h4 className="entry-title" style={{ fontSize: 10 }}>
                    <a href="/tourdetail" className="dot" title="Tour Cities">
                    <FontAwesomeIcon icon={faCircleDot} style={{ width: '12px', paddingRight: '2px' }} />
                      Delhi-Jaipur-Agra-Amritsar-Chandigarh-...
                    </a>
                  </h4>
                </div>
              </div>
            </article>
          </div>
          <div className="list-slide-box center-col">
            <article className="tour-box style-1">
              {/* Single Tour */}
              <div className="tour-box-image">
                <figure>
                  <div className="zoom">
                    <a href="/tourdetail">
                      <img
                        src="https://topindiatrips.com/assets/uploads/b061848ed1c842ccf107466085908255.jpg"
                        className="img-responsive listing-box-img"
                        alt=""
                      />
                      <div className="list-overlay" />
                    </a>
                  </div>
                  <div className="entry-bookmark">
                    {/* <a href="#"><i class="ti-bookmark"></i></a> */}
                  </div>
                  <div className="tour-time">
                    <div className="price-box">
                      <div className="tour-price fl-right">
                        {/* <i class="ti ti-money"></i><span class="theme-cl f-bold"><b>579</b></span> */}
                      </div>
                    </div>
                  </div>
                  <h4 className="tour-place">
                    <a href="/tourdetail">Golden Triangle with Amritsar </a>
                  </h4>
                  <span className="featured-tour">
                   <FontAwesomeIcon icon={faStar} style={{width:'10px', marginLeft: '5px'}} />
                  </span>
                </figure>
              </div>
              <div className="entry-meta">
                <div className="meta-item meta-author">
                  <div className="coauthors">
                    <span className="vcard author">
                      <span className="fn">
                        <a
                          href="/tourdetail"
                          title="Tour Category"
                          style={{ fontSize: 11 }}
                        >
                          <FontAwesomeIcon icon={faBookmark} style={{ width: '10px', paddingRight: '2px' }} />

                          North India , Family Tour , ...
                        </a>
                      </span>
                    </span>
                  </div>
                </div>
                <hr style={{ marginTop: 2, marginBottom: 5 }} />
                <div className="meta-item meta-comment">
                  <span style={{ fontSize: 11 }}>8 Days | 7 Nights</span>
                </div>
              </div>
              <div className="inner-box">
                <div className="box-inner-ellipsis" style={{ minHeight: 40 }}>
                  <h4 className="entry-title" style={{ fontSize: 10 }}>
                    <a href="/tourdetail" className="dot" title="Tour Cities">
                     <FontAwesomeIcon icon={faCircleDot} style={{ width: '12px', paddingRight: '2px' }} /> Delhi - Agra -
                      Jaipur - Delhi - Amritsar
                    </a>
                  </h4>
                </div>
              </div>
            </article>
          </div>
          <div className="list-slide-box center-col">
            <article className="tour-box style-1">
              {/* Single Tour */}
              <div className="tour-box-image">
                <figure>
                  <div className="zoom">
                    <a href="/tourdetail">
                      <img
                        src="https://topindiatrips.com/assets/uploads/07779c9e99c6b7f8d17aa886bcdef464.jpg"
                        className="img-responsive listing-box-img"
                        alt=""
                      />
                      <div className="list-overlay" />
                    </a>
                  </div>
                  <div className="entry-bookmark">
                    {/* <a href="#"><i class="ti-bookmark"></i></a> */}
                  </div>
                  <div className="tour-time">
                    <div className="price-box">
                      <div className="tour-price fl-right">
                        {/* <i class="ti ti-money"></i><span class="theme-cl f-bold"><b>437</b></span> */}
                      </div>
                    </div>
                  </div>
                  <h4 className="tour-place">
                    <a href="/tourdetail">
                      Golden Triangle with Amritsar and Varanasi
                    </a>
                  </h4>
                  <span className="featured-tour">
                   <FontAwesomeIcon icon={faStar} style={{width:'10px', marginLeft: '5px'}} />
                  </span>
                </figure>
              </div>
              <div className="entry-meta">
                <div className="meta-item meta-author">
                  <div className="coauthors">
                    <span className="vcard author">
                      <span className="fn">
                        <a
                          href="/tourdetail"
                          title="Tour Category"
                          style={{ fontSize: 11 }}
                        >
                          <FontAwesomeIcon icon={faBookmark} style={{ width: '10px', paddingRight: '2px' }} />

                          North India , Family Tour , ...
                        </a>
                      </span>
                    </span>
                  </div>
                </div>
                <hr style={{ marginTop: 2, marginBottom: 5 }} />
                <div className="meta-item meta-comment">
                  <span style={{ fontSize: 11 }}>10 Days | 9 Nights</span>
                </div>
              </div>
              <div className="inner-box">
                <div className="box-inner-ellipsis" style={{ minHeight: 40 }}>
                  <h4 className="entry-title" style={{ fontSize: 10 }}>
                    <a href="/tourdetail" className="dot" title="Tour Cities">
                     <FontAwesomeIcon icon={faCircleDot} style={{ width: '12px', paddingRight: '2px' }} /> Delhi - Jaipur
                      - Agra - Delhi - Amrits...
                    </a>
                  </h4>
                </div>
              </div>
            </article>
          </div>
          <div className="list-slide-box center-col">
            <article className="tour-box style-1">
              {/* Single Tour */}
              <div className="tour-box-image">
                <figure>
                  <div className="zoom">
                    <a href="/tourdetail">
                      <img
                        src="http://topindiatrips.com/assets/uploads/7200996a2fda0584d3b416a8728c2a23.jpg"
                        className="img-responsive listing-box-img"
                        alt=""
                      />
                      <div className="list-overlay" />
                    </a>
                  </div>
                  <div className="entry-bookmark">
                    {/* <a href="#"><i class="ti-bookmark"></i></a> */}
                  </div>
                  <div className="tour-time">
                    <div className="price-box">
                      <div className="tour-price fl-right">
                        {/* <i class="ti ti-money"></i><span class="theme-cl f-bold"><b>449</b></span> */}
                      </div>
                    </div>
                  </div>
                  <h4 className="tour-place">
                    <a href="/tourdetail">Golden Triangle with Kathmandu</a>
                  </h4>
                  <span className="featured-tour">
                   <FontAwesomeIcon icon={faStar} style={{width:'10px', marginLeft: '5px'}} />
                  </span>
                </figure>
              </div>
              <div className="entry-meta">
                <div className="meta-item meta-author">
                  <div className="coauthors">
                    <span className="vcard author">
                      <span className="fn">
                        <a
                          href="/tourdetail"
                          title="Tour Category"
                          style={{ fontSize: 11 }}
                        >
                          <FontAwesomeIcon icon={faBookmark} style={{ width: '10px', paddingRight: '2px' }} />

                          North India , Family Tour , ...
                        </a>
                      </span>
                    </span>
                  </div>
                </div>
                <hr style={{ marginTop: 2, marginBottom: 5 }} />
                <div className="meta-item meta-comment">
                  <span style={{ fontSize: 11 }}>10 Days | 9 Nights</span>
                </div>
              </div>
              <div className="inner-box">
                <div className="box-inner-ellipsis" style={{ minHeight: 40 }}>
                  <h4 className="entry-title" style={{ fontSize: 10 }}>
                    <a href="/tourdetail" className="dot" title="Tour Cities">
                     <FontAwesomeIcon icon={faCircleDot} style={{ width: '12px', paddingRight: '2px' }} /> Delhi - Jaipur
                      - Agra - Delhi - Kathmandu
                    </a>
                  </h4>
                </div>
              </div>
            </article>
          </div>
          <div className="list-slide-box center-col">
            <article className="tour-box style-1">
              {/* Single Tour */}
              <div className="tour-box-image">
                <figure>
                  <div className="zoom">
                    <a href="/tourdetail">
                      <img
                        src="https://topindiatrips.com/assets/uploads/983c5462db234cfcc1afaba6a3a8082b.jpg"
                        className="img-responsive listing-box-img"
                        alt=""
                      />
                      <div className="list-overlay" />
                    </a>
                  </div>
                  <div className="entry-bookmark">
                    {/* <a href="#"><i class="ti-bookmark"></i></a> */}
                  </div>
                  <div className="tour-time">
                    <div className="price-box">
                      <div className="tour-price fl-right">
                        {/* <i class="ti ti-money"></i><span class="theme-cl f-bold"><b>459</b></span> */}
                      </div>
                    </div>
                  </div>
                  <h4 className="tour-place">
                    <a href="/tourdetail">
                      Golden Triangle with Khajuraho and Varanasi
                    </a>
                  </h4>
                  <span className="featured-tour">
                   <FontAwesomeIcon icon={faStar} style={{width:'10px', marginLeft: '5px'}} />
                  </span>
                </figure>
              </div>
              <div className="entry-meta">
                <div className="meta-item meta-author">
                  <div className="coauthors">
                    <span className="vcard author">
                      <span className="fn">
                        <a
                          href="/tourdetail"
                          title="Tour Category"
                          style={{ fontSize: 11 }}
                        >
                          <FontAwesomeIcon icon={faBookmark} style={{ width: '10px', paddingRight: '2px' }} />

                          Madhya Pradesh , North India...
                        </a>
                      </span>
                    </span>
                  </div>
                </div>
                <hr style={{ marginTop: 2, marginBottom: 5 }} />
                <div className="meta-item meta-comment">
                  <span style={{ fontSize: 11 }}>9 Days | 8 Nights</span>
                </div>
              </div>
              <div className="inner-box">
                <div className="box-inner-ellipsis" style={{ minHeight: 40 }}>
                  <h4 className="entry-title" style={{ fontSize: 10 }}>
                    <a href="/tourdetail" className="dot" title="Tour Cities">
                     <FontAwesomeIcon icon={faCircleDot} style={{ width: '12px', paddingRight: '2px' }} />
                      Delhi-Jaipur-Agra-Khajuraho-Varanasi
                    </a>
                  </h4>
                </div>
              </div>
            </article>
          </div>
          <div className="list-slide-box center-col">
            <article className="tour-box style-1">
              {/* Single Tour */}
              <div className="tour-box-image">
                <figure>
                  <div className="zoom">
                    <a href="/tourdetail">
                      <img
                        src="https://topindiatrips.com/assets/uploads/f44c9c7a6c1ee91d54812c6dc83771b8.jpg"
                        className="img-responsive listing-box-img"
                        alt=""
                      />
                      <div className="list-overlay" />
                    </a>
                  </div>
                  <div className="entry-bookmark">
                    {/* <a href="#"><i class="ti-bookmark"></i></a> */}
                  </div>
                  <div className="tour-time">
                    <div className="price-box">
                      <div className="tour-price fl-right">
                        {/* <i class="ti ti-money"></i><span class="theme-cl f-bold"><b>533</b></span> */}
                      </div>
                    </div>
                  </div>
                  <h4 className="tour-place">
                    <a href="/tourdetail">Best of North India and Goa</a>
                  </h4>
                  <span className="featured-tour">
                   <FontAwesomeIcon icon={faStar} style={{width:'10px', marginLeft: '5px'}} />
                  </span>
                </figure>
              </div>
              <div className="entry-meta">
                <div className="meta-item meta-author">
                  <div className="coauthors">
                    <span className="vcard author">
                      <span className="fn">
                        <a
                          href="/tourdetail"
                          title="Tour Category"
                          style={{ fontSize: 11 }}
                        >
                          <FontAwesomeIcon icon={faBookmark} style={{ width: '10px', paddingRight: '2px' }} />

                          Rajasthan Tour Package , Utt...
                        </a>
                      </span>
                    </span>
                  </div>
                </div>
                <hr style={{ marginTop: 2, marginBottom: 5 }} />
                <div className="meta-item meta-comment">
                  <span style={{ fontSize: 11 }}>12 Days | 11 Nights</span>
                </div>
              </div>
              <div className="inner-box">
                <div className="box-inner-ellipsis" style={{ minHeight: 40 }}>
                  <h4 className="entry-title" style={{ fontSize: 10 }}>
                    <a href="/tourdetail" className="dot" title="Tour Cities">
                     <FontAwesomeIcon icon={faCircleDot} style={{ width: '12px', paddingRight: '2px' }} />
                      Delhi-Jaipur-Agra-Khajuraho-Varanasi-Goa
                    </a>
                  </h4>
                </div>
              </div>
            </article>
          </div>
          <div className="list-slide-box center-col">
            <article className="tour-box style-1">
              {/* Single Tour */}
              <div className="tour-box-image">
                <figure>
                  <div className="zoom">
                    <a href="/tourdetail">
                      <img
                        src="https://topindiatrips.com/assets/uploads/e28f84d505e5d3dcd6f2fed1a5b85555.jpg"
                        className="img-responsive listing-box-img"
                        alt=""
                      />
                      <div className="list-overlay" />
                    </a>
                  </div>
                  <div className="entry-bookmark">
                    {/* <a href="#"><i class="ti-bookmark"></i></a> */}
                  </div>
                  <div className="tour-time">
                    <div className="price-box">
                      <div className="tour-price fl-right">
                        {/* <i class="ti ti-money"></i><span class="theme-cl f-bold"><b>429</b></span> */}
                      </div>
                    </div>
                  </div>
                  <h4 className="tour-place">
                    <a href="/tourdetail">Highlights of Rajasthan Tour</a>
                  </h4>
                  <span className="featured-tour">
                   <FontAwesomeIcon icon={faStar} style={{width:'10px', marginLeft: '5px'}} />
                  </span>
                </figure>
              </div>
              <div className="entry-meta">
                <div className="meta-item meta-author">
                  <div className="coauthors">
                    <span className="vcard author">
                      <span className="fn">
                        <a
                          href="/tourdetail"
                          title="Tour Category"
                          style={{ fontSize: 11 }}
                        >
                          <FontAwesomeIcon icon={faBookmark} style={{ width: '10px', paddingRight: '2px' }} />

                          Rajasthan Tour Package , Fam...
                        </a>
                      </span>
                    </span>
                  </div>
                </div>
                <hr style={{ marginTop: 2, marginBottom: 5 }} />
                <div className="meta-item meta-comment">
                  <span style={{ fontSize: 11 }}>8 Days | 7 Nights</span>
                </div>
              </div>
              <div className="inner-box">
                <div className="box-inner-ellipsis" style={{ minHeight: 40 }}>
                  <h4 className="entry-title" style={{ fontSize: 10 }}>
                    <a href="/tourdetail" className="dot" title="Tour Cities">
                     <FontAwesomeIcon icon={faCircleDot} style={{ width: '12px', paddingRight: '2px' }} /> Delhi - Jaipur
                      - Ranthambore - Agra - ...
                    </a>
                  </h4>
                </div>
              </div>
            </article>
          </div>
          <div className="list-slide-box center-col">
            <article className="tour-box style-1">
              {/* Single Tour */}
              <div className="tour-box-image">
                <figure>
                  <div className="zoom">
                    <a href="/tourdetail">
                      <img
                        src="https://topindiatrips.com/assets/uploads/409fc2f78528520f3f444e00d46b5d2d.jpg"
                        className="img-responsive listing-box-img"
                        alt=""
                      />
                      <div className="list-overlay" />
                    </a>
                  </div>
                  <div className="entry-bookmark">
                    {/* <a href="#"><i class="ti-bookmark"></i></a> */}
                  </div>
                  <div className="tour-time">
                    <div className="price-box">
                      <div className="tour-price fl-right">
                        {/* <i class="ti ti-money"></i><span class="theme-cl f-bold"><b>499</b></span> */}
                      </div>
                    </div>
                  </div>
                  <h4 className="tour-place">
                    <a href="/tourdetail">Best of Karnataka Heritage</a>
                  </h4>
                  <span className="featured-tour">
                   <FontAwesomeIcon icon={faStar} style={{width:'10px', marginLeft: '5px'}} />
                  </span>
                </figure>
              </div>
              <div className="entry-meta">
                <div className="meta-item meta-author">
                  <div className="coauthors">
                    <span className="vcard author">
                      <span className="fn">
                        <a
                          href="/tourdetail"
                          title="Tour Category"
                          style={{ fontSize: 11 }}
                        >
                          <FontAwesomeIcon icon={faBookmark} style={{ width: '10px', paddingRight: '2px' }} />

                          Kerala , Tamil Nadu , Karnat...
                        </a>
                      </span>
                    </span>
                  </div>
                </div>
                <hr style={{ marginTop: 2, marginBottom: 5 }} />
                <div className="meta-item meta-comment">
                  <span style={{ fontSize: 11 }}>9 Days | 8 Nights</span>
                </div>
              </div>
              <div className="inner-box">
                <div className="box-inner-ellipsis" style={{ minHeight: 40 }}>
                  <h4 className="entry-title" style={{ fontSize: 10 }}>
                    <a href="/tourdetail" className="dot" title="Tour Cities">
                     <FontAwesomeIcon icon={faCircleDot} style={{ width: '12px', paddingRight: '2px' }} /> Bangalore -
                      Mysore - Hassan - Hospet -...
                    </a>
                  </h4>
                </div>
              </div>
            </article>
          </div>
          <div className="list-slide-box center-col">
            <article className="tour-box style-1">
              {/* Single Tour */}
              <div className="tour-box-image">
                <figure>
                  <div className="zoom">
                    <a href="/tourdetail">
                      <img
                        src="https://topindiatrips.com/assets/uploads/73f23a4ad5c1a43b39c4ea8f88ab6360.jpg"
                        className="img-responsive listing-box-img"
                        alt=""
                      />
                      <div className="list-overlay" />
                    </a>
                  </div>
                  <div className="entry-bookmark">
                    {/* <a href="#"><i class="ti-bookmark"></i></a> */}
                  </div>
                  <div className="tour-time">
                    <div className="price-box">
                      <div className="tour-price fl-right">
                        {/* <i class="ti ti-money"></i><span class="theme-cl f-bold"><b>769</b></span> */}
                      </div>
                    </div>
                  </div>
                  <h4 className="tour-place">
                    <a href="/tourdetail">Best of South India Heritage</a>
                  </h4>
                  <span className="featured-tour">
                   <FontAwesomeIcon icon={faStar} style={{width:'10px', marginLeft: '5px'}} />
                  </span>
                </figure>
              </div>
              <div className="entry-meta">
                <div className="meta-item meta-author">
                  <div className="coauthors">
                    <span className="vcard author">
                      <span className="fn">
                        <a
                          href="/tourdetail"
                          title="Tour Category"
                          style={{ fontSize: 11 }}
                        >
                          <FontAwesomeIcon icon={faBookmark} style={{ width: '10px', paddingRight: '2px' }} />

                          Kerala , Karnataka , Family ...
                        </a>
                      </span>
                    </span>
                  </div>
                </div>
                <hr style={{ marginTop: 2, marginBottom: 5 }} />
                <div className="meta-item meta-comment">
                  <span style={{ fontSize: 11 }}>15 Days | 14 Nights</span>
                </div>
              </div>
              <div className="inner-box">
                <div className="box-inner-ellipsis" style={{ minHeight: 40 }}>
                  <h4 className="entry-title" style={{ fontSize: 10 }}>
                    <a href="/tourdetail" className="dot" title="Tour Cities">
                     <FontAwesomeIcon icon={faCircleDot} style={{ width: '12px', paddingRight: '2px' }} /> Bangalore -
                      Hampi - Hassan - Mysore - ...
                    </a>
                  </h4>
                </div>
              </div>
            </article>
          </div>
          <div className="list-slide-box center-col">
            <article className="tour-box style-1">
              {/* Single Tour */}
              <div className="tour-box-image">
                <figure>
                  <div className="zoom">
                    <a href="/tourdetail">
                      <img
                        src="https://topindiatrips.com/assets/uploads/3e4cbeaf4a4508a268f9d1ed713c9b64.jpg"
                        className="img-responsive listing-box-img"
                        alt=""
                      />
                      <div className="list-overlay" />
                    </a>
                  </div>
                  <div className="entry-bookmark">
                    {/* <a href="#"><i class="ti-bookmark"></i></a> */}
                  </div>
                  <div className="tour-time">
                    <div className="price-box">
                      <div className="tour-price fl-right">
                        {/* <i class="ti ti-money"></i><span class="theme-cl f-bold"><b>487</b></span> */}
                      </div>
                    </div>
                  </div>
                  <h4 className="tour-place">
                    <a href="/tourdetail">
                      Golden Triangle with wildlife and Varanasi
                    </a>
                  </h4>
                  <span className="featured-tour">
                   <FontAwesomeIcon icon={faStar} style={{width:'10px', marginLeft: '5px'}} />
                  </span>
                </figure>
              </div>
              <div className="entry-meta">
                <div className="meta-item meta-author">
                  <div className="coauthors">
                    <span className="vcard author">
                      <span className="fn">
                        <a
                          href="/tourdetail"
                          title="Tour Category"
                          style={{ fontSize: 11 }}
                        >
                          <FontAwesomeIcon icon={faBookmark} style={{ width: '10px', paddingRight: '2px' }} />

                          Rajasthan Tour Package , Ker...
                        </a>
                      </span>
                    </span>
                  </div>
                </div>
                <hr style={{ marginTop: 2, marginBottom: 5 }} />
                <div className="meta-item meta-comment">
                  <span style={{ fontSize: 11 }}>10 Days | 9 Nights</span>
                </div>
              </div>
              <div className="inner-box">
                <div className="box-inner-ellipsis" style={{ minHeight: 40 }}>
                  <h4 className="entry-title" style={{ fontSize: 10 }}>
                    <a href="/tourdetail" className="dot" title="Tour Cities">
                     <FontAwesomeIcon icon={faCircleDot} style={{ width: '12px', paddingRight: '2px' }} /> Delhi - Jaipur
                      - Ranthambore - Agra - ...
                    </a>
                  </h4>
                </div>
              </div>
            </article>
          </div>
          <div className="list-slide-box center-col">
            <article className="tour-box style-1">
              {/* Single Tour */}
              <div className="tour-box-image">
                <figure>
                  <div className="zoom">
                    <a href="/tourdetail">
                      <img
                        src="https://topindiatrips.com/assets/uploads/983c5462db234cfcc1afaba6a3a8082b.jpg"
                        className="img-responsive listing-box-img"
                        alt=""
                      />
                      <div className="list-overlay" />
                    </a>
                  </div>
                  <div className="entry-bookmark">
                    {/* <a href="#"><i class="ti-bookmark"></i></a> */}
                  </div>
                  <div className="tour-time">
                    <div className="price-box">
                      <div className="tour-price fl-right">
                        {/* <i class="ti ti-money"></i><span class="theme-cl f-bold"><b>487</b></span> */}
                      </div>
                    </div>
                  </div>
                  <h4 className="tour-place">
                    <a href="/tourdetail">
                      Golden Triangle with Ranthambore, Khajuraho and Varanasi
                    </a>
                  </h4>
                  <span className="featured-tour">
                   <FontAwesomeIcon icon={faStar} style={{width:'10px', marginLeft: '5px'}} />
                  </span>
                </figure>
              </div>
              <div className="entry-meta">
                <div className="meta-item meta-author">
                  <div className="coauthors">
                    <span className="vcard author">
                      <span className="fn">
                        <a
                          href="/tourdetail"
                          title="Tour Category"
                          style={{ fontSize: 11 }}
                        >
                          <FontAwesomeIcon icon={faBookmark} style={{ width: '10px', paddingRight: '2px' }} />

                          Rajasthan Tour Package , Utt...
                        </a>
                      </span>
                    </span>
                  </div>
                </div>
                <hr style={{ marginTop: 2, marginBottom: 5 }} />
                <div className="meta-item meta-comment">
                  <span style={{ fontSize: 11 }}>11 Days | 10 Nights</span>
                </div>
              </div>
              <div className="inner-box">
                <div className="box-inner-ellipsis" style={{ minHeight: 40 }}>
                  <h4 className="entry-title" style={{ fontSize: 10 }}>
                    <a href="/tourdetail" className="dot" title="Tour Cities">
                     <FontAwesomeIcon icon={faCircleDot} style={{ width: '12px', paddingRight: '2px' }} /> Delhi - Jaipur
                      - Ranthambore - Agra - ...
                    </a>
                  </h4>
                </div>
              </div>
            </article>
          </div>
          <div className="list-slide-box center-col">
            <article className="tour-box style-1">
              {/* Single Tour */}
              <div className="tour-box-image">
                <figure>
                  <div className="zoom">
                    <a href="/tourdetail">
                      <img
                        src="https://topindiatrips.com/assets/uploads/f44c9c7a6c1ee91d54812c6dc83771b8.jpg"
                        className="img-responsive listing-box-img"
                        alt=""
                      />
                      <div className="list-overlay" />
                    </a>
                  </div>
                  <div className="entry-bookmark">
                    {/* <a href="#"><i class="ti-bookmark"></i></a> */}
                  </div>
                  <div className="tour-time">
                    <div className="price-box">
                      <div className="tour-price fl-right">
                        {/* <i class="ti ti-money"></i><span class="theme-cl f-bold"><b>674</b></span> */}
                      </div>
                    </div>
                  </div>
                  <h4 className="tour-place">
                    <a href="/tourdetail">Best of south India tour</a>
                  </h4>
                  <span className="featured-tour">
                   <FontAwesomeIcon icon={faStar} style={{width:'10px', marginLeft: '5px'}} />
                  </span>
                </figure>
              </div>
              <div className="entry-meta">
                <div className="meta-item meta-author">
                  <div className="coauthors">
                    <span className="vcard author">
                      <span className="fn">
                        <a
                          href="/tourdetail"
                          title="Tour Category"
                          style={{ fontSize: 11 }}
                        >
                          <FontAwesomeIcon icon={faBookmark} style={{ width: '10px', paddingRight: '2px' }} />

                          Kerala , Tamil Nadu , Karnat...
                        </a>
                      </span>
                    </span>
                  </div>
                </div>
                <hr style={{ marginTop: 2, marginBottom: 5 }} />
                <div className="meta-item meta-comment">
                  <span style={{ fontSize: 11 }}>14 Days | 13 Nights</span>
                </div>
              </div>
              <div className="inner-box">
                <div className="box-inner-ellipsis" style={{ minHeight: 40 }}>
                  <h4 className="entry-title" style={{ fontSize: 10 }}>
                    <a href="/tourdetail" className="dot" title="Tour Cities">
                     <FontAwesomeIcon icon={faCircleDot} style={{ width: '12px', paddingRight: '2px' }} /> Chennai -
                      Mahabalipuram - Pondicherry ...
                    </a>
                  </h4>
                </div>
              </div>
            </article>
          </div>
          <div className="list-slide-box center-col">
            <article className="tour-box style-1">
              {/* Single Tour */}
              <div className="tour-box-image">
                <figure>
                  <div className="zoom">
                    <a href="/tourdetail">
                      <img
                        src="https://topindiatrips.com/assets/uploads/63e7aef5e0fbd262edb1f0365bf62741.jpg"
                        className="img-responsive listing-box-img"
                        alt=""
                      />
                      <div className="list-overlay" />
                    </a>
                  </div>
                  <div className="entry-bookmark">
                    {/* <a href="#"><i class="ti-bookmark"></i></a> */}
                  </div>
                  <div className="tour-time">
                    <div className="price-box">
                      <div className="tour-price fl-right">
                        {/* <i class="ti ti-money"></i><span class="theme-cl f-bold"><b>575</b></span> */}
                      </div>
                    </div>
                  </div>
                  <h4 className="tour-place">
                    <a href="/tourdetail">Best of Tamil Nadu and Kerala</a>
                  </h4>
                  <span className="featured-tour">
                   <FontAwesomeIcon icon={faStar} style={{width:'10px', marginLeft: '5px'}} />
                  </span>
                </figure>
              </div>
              <div className="entry-meta">
                <div className="meta-item meta-author">
                  <div className="coauthors">
                    <span className="vcard author">
                      <span className="fn">
                        <a
                          href="/tourdetail"
                          title="Tour Category"
                          style={{ fontSize: 11 }}
                        >
                          <FontAwesomeIcon icon={faBookmark} style={{ width: '10px', paddingRight: '2px' }} />

                          Kerala , Tamil Nadu , Karnat...
                        </a>
                      </span>
                    </span>
                  </div>
                </div>
                <hr style={{ marginTop: 2, marginBottom: 5 }} />
                <div className="meta-item meta-comment">
                  <span style={{ fontSize: 11 }}>12 Days | 11 Nights</span>
                </div>
              </div>
              <div className="inner-box">
                <div className="box-inner-ellipsis" style={{ minHeight: 40 }}>
                  <h4 className="entry-title" style={{ fontSize: 10 }}>
                    <a href="/tourdetail" className="dot" title="Tour Cities">
                     <FontAwesomeIcon icon={faCircleDot} style={{ width: '12px', paddingRight: '2px' }} /> Chennai -
                      Mahabalipuram - Pondicherry ...
                    </a>
                  </h4>
                </div>
              </div>
            </article>
          </div>
          <div className="list-slide-box center-col">
            <article className="tour-box style-1">
              {/* Single Tour */}
              <div className="tour-box-image">
                <figure>
                  <div className="zoom">
                    <a href="/tourdetail">
                      <img
                        src="https://topindiatrips.com/assets/uploads/f44c9c7a6c1ee91d54812c6dc83771b8.jpg"
                        className="img-responsive listing-box-img"
                        alt=""
                      />
                      <div className="list-overlay" />
                    </a>
                  </div>
                  <div className="entry-bookmark">
                    {/* <a href="#"><i class="ti-bookmark"></i></a> */}
                  </div>
                  <div className="tour-time">
                    <div className="price-box">
                      <div className="tour-price fl-right">
                        {/* <i class="ti ti-money"></i><span class="theme-cl f-bold"><b>533</b></span> */}
                      </div>
                    </div>
                  </div>
                  <h4 className="tour-place">
                    <a href="/tourdetail">Best of North India and Goa</a>
                  </h4>
                  <span className="featured-tour">
                   <FontAwesomeIcon icon={faStar} style={{width:'10px', marginLeft: '5px'}} />
                  </span>
                </figure>
              </div>
              <div className="entry-meta">
                <div className="meta-item meta-author">
                  <div className="coauthors">
                    <span className="vcard author">
                      <span className="fn">
                        <a
                          href="/tourdetail"
                          title="Tour Category"
                          style={{ fontSize: 11 }}
                        >
                          <FontAwesomeIcon icon={faBookmark} style={{ width: '10px', paddingRight: '2px' }} />

                          Rajasthan Tour Package , Utt...
                        </a>
                      </span>
                    </span>
                  </div>
                </div>
                <hr style={{ marginTop: 2, marginBottom: 5 }} />
                <div className="meta-item meta-comment">
                  <span style={{ fontSize: 11 }}>12 Days | 11 Nights</span>
                </div>
              </div>
              <div className="inner-box">
                <div className="box-inner-ellipsis" style={{ minHeight: 40 }}>
                  <h4 className="entry-title" style={{ fontSize: 10 }}>
                    <a href="/tourdetail" className="dot" title="Tour Cities">
                     <FontAwesomeIcon icon={faCircleDot} style={{ width: '12px', paddingRight: '2px' }} />
                      Delhi-Jaipur-Agra-Khajuraho-Varanasi-Goa
                    </a>
                  </h4>
                </div>
              </div>
            </article>
          </div>
          <div className="list-slide-box center-col">
            <article className="tour-box style-1">
              {/* Single Tour */}
              <div className="tour-box-image">
                <figure>
                  <div className="zoom">
                    <a href="/tourdetail">
                      <img
                        src="https://topindiatrips.com/assets/uploads/3e4cbeaf4a4508a268f9d1ed713c9b64.jpg"
                        className="img-responsive listing-box-img"
                        alt=""
                      />
                      <div className="list-overlay" />
                    </a>
                  </div>
                  <div className="entry-bookmark">
                    {/* <a href="#"><i class="ti-bookmark"></i></a> */}
                  </div>
                  <div className="tour-time">
                    <div className="price-box">
                      <div className="tour-price fl-right">
                        {/* <i class="ti ti-money"></i><span class="theme-cl f-bold"><b>499</b></span> */}
                      </div>
                    </div>
                  </div>
                  <h4 className="tour-place">
                    <a href="/tourdetail">South India Temple Tour</a>
                  </h4>
                  <span className="featured-tour">
                   <FontAwesomeIcon icon={faStar} style={{width:'10px', marginLeft: '5px'}} />
                  </span>
                </figure>
              </div>
              <div className="entry-meta">
                <div className="meta-item meta-author">
                  <div className="coauthors">
                    <span className="vcard author">
                      <span className="fn">
                        <a
                          href="/tourdetail"
                          title="Tour Category"
                          style={{ fontSize: 11 }}
                        >
                          <FontAwesomeIcon icon={faBookmark} style={{ width: '10px', paddingRight: '2px' }} />

                          Kerala , Karnataka , Family ...
                        </a>
                      </span>
                    </span>
                  </div>
                </div>
                <hr style={{ marginTop: 2, marginBottom: 5 }} />
                <div className="meta-item meta-comment">
                  <span style={{ fontSize: 11 }}>8 Days | 7 Nights</span>
                </div>
              </div>
              <div className="inner-box">
                <div className="box-inner-ellipsis" style={{ minHeight: 40 }}>
                  <h4 className="entry-title" style={{ fontSize: 10 }}>
                    <a href="/tourdetail" className="dot" title="Tour Cities">
                     <FontAwesomeIcon icon={faCircleDot} style={{ width: '12px', paddingRight: '2px' }} /> Chennai -
                      Mahabalipuram - Darasuram - ...
                    </a>
                  </h4>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

   </>
  )
}

export default TripList