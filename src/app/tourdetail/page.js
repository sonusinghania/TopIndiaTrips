import React from 'react'
import Link from 'next/link';
import FormSubmit from "../components/formSubmit";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faFile, faHandPointRight, } from '@fortawesome/free-regular-svg-icons';
import { faCrown, faLayerGroup, faDiamondTurnRight, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
const page = () => {
  return (
    <>

      <div
        className="page-title image-title"
        style={{ backgroundImage: "url(https://topindiatrips.com/assets/uploads/63e7aef5e0fbd262edb1f0365bf62741.jpg)" }}
      >
        <div className="container">
          <div className="page-title-wrap">
            <h2 >Best of south India tour</h2>

            <p title="Tour Category">Kerala</p>
          </div>

        </div>
      </div>
      <>
        {/* ================================== Trip Section Started From Here ========================================== */}
        <div className="tr-single-detail gray-bg" style={{ paddingTop: 30 }}>
          <div className="container" id="main-content">
            <div className="row">
              <div className="col-md-8 col-sm-12">
                <div className="fadee in active">
                  {/* Overview */}
                  <div className="row">
                    <div className="tr-single-box">
                      <div className="tr-single-header">
                        <h4>
                          {/* <i className="fa fa-star-o" /> */}
                          <FontAwesomeIcon icon={faStar} style={{ width: '20px', height: '19px', paddingRight: '2px' }} />
                          Overview
                        </h4>
                      </div>
                      <div className="tr-single-body">
                        <div className="row">
                          <div className="pr-table col-md-6">
                            <ul>
                              <li>
                                <strong>Tour Name :</strong>Best of south India tour
                              </li>
                              <li>
                                <strong>Category :</strong>Kerala
                              </li>
                              <li>
                                <strong>Tour Cities:</strong>Karnataka
                              </li>
                              {/* <li><strong>Cost:</strong> $ 674 per person</li> */}
                              <li>
                                <strong>Duration:</strong>{" "}
                                <span>14 Days | 13 Nights</span>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-6">
                            <img
                              style={{ border: "1px solid rgb(233, 229, 229)" }}
                              src="https://topindiatrips.com/assets/uploads/63e7aef5e0fbd262edb1f0365bf62741.jpg"
                              className="img-responsive"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Description */}
                  <div className="row">
                    <div className="tr-single-box">
                      <div className="tr-single-header">
                        <h4>
                          <FontAwesomeIcon icon={faFile} style={{ width: '15px', paddingRight: '2px' }} />
                          {/* <i className="fa-regular fa-file" /> */}
                          Description
                        </h4>
                      </div>
                      <div className="tr-single-body">
                        <p>
                          A relaxed introduction to the charming and diverse state of
                          Kerala and Tamil Nadu, which is famed for its welcoming
                          people, lush, tropical scenery and delicious food of South
                          India. The South India Journey from the Chennai to colonial
                          heritage of Cochin, home to Portuguese, Dutch and Arabic. On
                          the way, visit the spice plantations in the verdant Cardamom
                          Hills, spot elephant in Periyar Wildlife Sanctuary and relax
                          on the backwaters watching the world drift by. Keralan
                          cuisine makes great use of the locally grown produce;
                          spices, coconut and seafood and you may enjoy the delicious
                          delicacies served off banana leaves. This tour allows you to
                          appreciate just what a feast for all the senses Kerala can
                          be. Also enjoy the natural beauty of Ooty in Karnataka. This
                          has been design a{" "}
                          <strong>complete South India tour package </strong>for
                          you.&nbsp;
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Amenities */}
                  <div className="row">
                    <div className="tr-single-box">
                      <div className="tr-single-header">
                        <h4>
                          <FontAwesomeIcon icon={faCrown} style={{ width: '25px', height: '19px', paddingRight: '5px' }} />
                          Amenities
                        </h4>
                      </div>
                      <div className="tr-single-body">
                        <ul className="amenities col-md-12">
                        <li className="col-md-6">  <FontAwesomeIcon icon={faCircleCheck} style={{ fontSize:"16px", color:'#00cd09',marginRight:"4px" }} />Free WiFi in the vehicles</li>
                          <li className="col-md-6">  <FontAwesomeIcon icon={faCircleCheck} style={{fontSize:"16px", color:'#00cd09',marginRight:"4px" }} />Gym in 4* and 5* hotels</li>
                          <li className="col-md-6"> <FontAwesomeIcon icon={faCircleCheck} style={{ fontSize:"16px", color:'#00cd09',marginRight:"4px" }} />
                            Swimming Pool in 4* and 5* hotels
                          </li>
                          <li className="col-md-6"> <FontAwesomeIcon icon={faCircleCheck} style={{fontSize:"16px", color:'#00cd09',marginRight:"4px" }} />
                            Free unlimited water in the vehicle during the tour.
                          </li>
                        </ul>
                        <div className="clearfix" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* ============ Schedule =================== */}
                <div className="fadee in" id="Schedule">
                  <div className="row">
                    <div className="accordion tr-single-box" id="tours">
                      <div className="tr-single-header">
                        <h4>
                          <FontAwesomeIcon icon={faLayerGroup} style={{ width: '25px', height: '19px', paddingRight: '5px' }} />
                          Itinerary
                        </h4>
                      </div>
                      {/* Single Review */}
                      <div
                        className="accordion accordion-flush"
                        id="accordionFlushExample"
                      >
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="flush-headingOne">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseOne"
                              aria-expanded="false"
                              aria-controls="flush-collapseOne"
                            >
                              Day:1 | Arrival Chennai
                            </button>
                          </h2>
                          <div
                            id="flush-collapseOne"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="card-body">
                              <div className="col-md-12">
                                <div
                                  className="row"
                                  style={{ padding: "0px 0px", margin: "10px 0px" }}
                                >
                                  <div className="col-md-5">
                                    <div
                                      className="owl-wrapper"
                                      style={{
                                        width: 200,
                                        left: 0,
                                        display: "block",
                                        transition: "all 1000ms ease 0s",
                                        transform: "translate3d(0px, 0px, 0px)"
                                      }}
                                    >
                                      <div
                                        className="owl-item"
                                        style={{ width: 100 }}
                                      >
                                        <a
                                          className="item"
                                          href="javascript:void(0);"
                                        >
                                          <img
                                            src="https://topindiatrips.com/assets/uploads/8535a7d845bd286e20eaf64e8335e5bb.jpg"
                                            width={280}
                                            height={150}
                                          />
                                        </a>
                                      </div>
                                    </div>
                                    <div
                                      className="owl-controls clickable"
                                      style={{ display: "none" }}
                                    >
                                      <div className="owl-pagination">
                                        <div className="owl-page active">
                                          <span className="" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-7">
                                    <div
                                      className="review-box-content"
                                      style={{ borderBottom: "none" }}
                                    >
                                      <div
                                        className="review-user-info"
                                        style={{ marginLeft: 0 }}
                                      >
                                        <p />
                                        <p>
                                          Assistance on arrival on airport our tour
                                          executives welcomes you and then drive to
                                          hotel. On arrival check at hotel. Afternoon
                                          visit of
                                          <strong>Kapaleeshwarar Temple</strong> one
                                          of the famous temple in Tamilnadu especially
                                          in Chennai and make a visit also{" "}
                                          <strong>Parthasarathy Temple</strong> is an
                                          8th-century Hindu Vaishnavism temple
                                          dedicated to the god Vishnu. Overnight at
                                          hotel.
                                        </p>
                                        <p />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* ++++++++++++++============== Accordian 2 here ==============================++++++ */}
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="flush-headingTwo">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseTwo"
                              aria-expanded="false"
                              aria-controls="flush-collapseTwo"
                            >
                              Day : 2 | Chennai – Kanchipuram – Mahabalipuram(60 Kms /
                              1.5 hours)
                            </button>
                          </h2>
                          <div
                            id="flush-collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingTwo"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="card-body">
                              <div className="col-md-12">
                                <div
                                  className="row"
                                  style={{ padding: "0px 0px", margin: "10px 0px" }}
                                >
                                  <div className="col-md-5">
                                    <div className="accordion-body">
                                      <div
                                        id="carouselExampleIndicators"
                                        className="carousel slide"
                                        data-bs-ride="carousel"
                                      >
                                        <div className="carousel-indicators">
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to={0}
                                            className="active"
                                            aria-current="true"
                                            aria-label="Slide 1"
                                          />
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to={1}
                                            aria-label="Slide 2"
                                          />
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to={2}
                                            aria-label="Slide 3"
                                          />
                                        </div>
                                        <div className="carousel-inner">
                                          <div className="carousel-item active">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/c7f80fcec757026002b8b3dbdb97bc39.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                          <div className="carousel-item">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/6813ad58c9329a19d28a9b3b323c8c3f.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                          <div className="carousel-item">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/f7fbe3e811539077ab12ee24da3905ef.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-7">
                                    <div
                                      className="review-box-content"
                                      style={{ borderBottom: "none" }}
                                    >
                                      <div
                                        className="review-user-info"
                                        style={{ marginLeft: 0 }}
                                      >
                                        <p />
                                        <p>
                                          Breakfast, Morning drive to Mahabalipuram,
                                          en route visita Kanchipuram and visit
                                          <strong>Ekambareswarar Temple</strong> is
                                          dedicated to Shiva. It is one of the five
                                          major Shiva temples or Pancha Bootha
                                          Sthalams (each representing a natural
                                          element) representing the element – Earth.
                                          Then visit
                                          <strong>
                                            Kanchi Kailasanathar temple
                                          </strong>{" "}
                                          is the oldest structure. Later visit{" "}
                                          <strong>Kanchi Kamakshi Temple</strong>{" "}
                                          kamakshi seated in a majestic Padma Sana.
                                          After that drive to Mahabhilpuram.Overnight
                                          at hotel.
                                        </p>
                                        <p />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* ==================================== Accordian 3 here ==================================== */}
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="flush-headingThree">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseThree"
                              aria-expanded="false"
                              aria-controls="flush-collapseThree"
                            >
                              Day : 3 | Mahabalipuram – Pondicherry (100 Kms / 02
                              hours)
                            </button>
                          </h2>
                          <div
                            id="flush-collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingThree"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="card-body">
                              <div className="col-md-12">
                                <div
                                  className="row"
                                  style={{ padding: "0px 0px", margin: "10px 0px" }}
                                >
                                  <div className="col-md-5">
                                    <div className="accordion-body">
                                      <div
                                        id="carouselExampleIndicators0"
                                        className="carousel slide"
                                        data-bs-ride="carousel"
                                      >
                                        <div className="carousel-indicators">
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators0"
                                            data-bs-slide-to={0}
                                            className="active"
                                            aria-current="true"
                                            aria-label="Slide 1"
                                          />
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators0"
                                            data-bs-slide-to={1}
                                            aria-label="Slide 2"
                                          />
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators0"
                                            data-bs-slide-to={2}
                                            aria-label="Slide 3"
                                          />
                                        </div>
                                        <div className="carousel-inner">
                                          <div className="carousel-item active">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/c7f80fcec757026002b8b3dbdb97bc39.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                          <div className="carousel-item">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/6813ad58c9329a19d28a9b3b323c8c3f.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                          <div className="carousel-item">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/f7fbe3e811539077ab12ee24da3905ef.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-7">
                                    <div
                                      className="review-box-content"
                                      style={{ borderBottom: "none" }}
                                    >
                                      <div
                                        className="review-user-info"
                                        style={{ marginLeft: 0 }}
                                      >
                                        <p />
                                        <p>
                                          Breakfast, Morning drive to Mahabalipuram,
                                          en route visita Kanchipuram and visit
                                          <strong>Ekambareswarar Temple</strong> is
                                          dedicated to Shiva. It is one of the five
                                          major Shiva temples or Pancha Bootha
                                          Sthalams (each representing a natural
                                          element) representing the element – Earth.
                                          Then visit
                                          <strong>
                                            Kanchi Kailasanathar temple
                                          </strong>{" "}
                                          is the oldest structure. Later visit{" "}
                                          <strong>Kanchi Kamakshi Temple</strong>{" "}
                                          kamakshi seated in a majestic Padma Sana.
                                          After that drive to Mahabhilpuram.Overnight
                                          at hotel.
                                        </p>
                                        <p />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* ==================== Accordian 4 ======================= */}
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="flush-headingFour">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseFour"
                              aria-expanded="false"
                              aria-controls="flush-collapseFour"
                            >
                              Day : 4 | Pondicherry – Darasuram – Kumbakonam – Tanjore
                              (170 Kms / 04 hours)
                            </button>
                          </h2>
                          <div
                            id="flush-collapseFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-heading"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="card-body">
                              <div className="col-md-12">
                                <div
                                  className="row"
                                  style={{ padding: "0px 0px", margin: "10px 0px" }}
                                >
                                  <div className="col-md-5">
                                    <div className="accordion-body">
                                      <div
                                        id="carouselExampleIndicators1"
                                        className="carousel slide"
                                        data-bs-ride="carousel"
                                      >
                                        <div className="carousel-indicators">
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators1"
                                            data-bs-slide-to={0}
                                            className="active"
                                            aria-current="true"
                                            aria-label="Slide 1"
                                          />
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators1"
                                            data-bs-slide-to={1}
                                            aria-label="Slide 2"
                                          />
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators1"
                                            data-bs-slide-to={2}
                                            aria-label="Slide 3"
                                          />
                                        </div>
                                        <div className="carousel-inner">
                                          <div className="carousel-item active">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/c7f80fcec757026002b8b3dbdb97bc39.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                          <div className="carousel-item">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/6813ad58c9329a19d28a9b3b323c8c3f.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                          <div className="carousel-item">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/f7fbe3e811539077ab12ee24da3905ef.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-7">
                                    <div
                                      className="review-box-content"
                                      style={{ borderBottom: "none" }}
                                    >
                                      <div
                                        className="review-user-info"
                                        style={{ marginLeft: 0 }}
                                      >
                                        <p />
                                        <p>
                                          Breakfast, Morning drive to Mahabalipuram,
                                          en route visita Kanchipuram and visit
                                          <strong>Ekambareswarar Temple</strong> is
                                          dedicated to Shiva. It is one of the five
                                          major Shiva temples or Pancha Bootha
                                          Sthalams (each representing a natural
                                          element) representing the element – Earth.
                                          Then visit
                                          <strong>
                                            Kanchi Kailasanathar temple
                                          </strong>{" "}
                                          is the oldest structure. Later visit{" "}
                                          <strong>Kanchi Kamakshi Temple</strong>{" "}
                                          kamakshi seated in a majestic Padma Sana.
                                          After that drive to Mahabhilpuram.Overnight
                                          at hotel.
                                        </p>
                                        <p />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="flush-headingFive">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseFive"
                              aria-expanded="false"
                              aria-controls="flush-collapseFive"
                            >
                              Day : 5 | Tanjore – Trichy – Chettinad (100 kms / 1.5
                              hours)
                            </button>
                          </h2>
                          <div
                            id="flush-collapseFive"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingThree"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="card-body">
                              <div className="col-md-12">
                                <div
                                  className="row"
                                  style={{ padding: "0px 0px", margin: "10px 0px" }}
                                >
                                  <div className="col-md-5">
                                    <div className="accordion-body">
                                      <div
                                        id="carouselExampleIndicators2"
                                        className="carousel slide"
                                        data-bs-ride="carousel"
                                      >
                                        <div className="carousel-indicators">
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators2"
                                            data-bs-slide-to={0}
                                            className="active"
                                            aria-current="true"
                                            aria-label="Slide 1"
                                          />
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators2"
                                            data-bs-slide-to={1}
                                            aria-label="Slide 2"
                                          />
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators2"
                                            data-bs-slide-to={2}
                                            aria-label="Slide 3"
                                          />
                                        </div>
                                        <div className="carousel-inner">
                                          <div className="carousel-item active">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/c7f80fcec757026002b8b3dbdb97bc39.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                          <div className="carousel-item">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/6813ad58c9329a19d28a9b3b323c8c3f.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                          <div className="carousel-item">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/f7fbe3e811539077ab12ee24da3905ef.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                        </div>
                                        <button
                                          className="carousel-control-prev"
                                          type="button"
                                          data-bs-target="#carouselExampleIndicators"
                                          data-bs-slide="prev"
                                        >
                                          <span
                                            className="carousel-control-prev-icon"
                                            aria-hidden="true"
                                          />
                                          <span className="visually-hidden">
                                            Previous
                                          </span>
                                        </button>
                                        <button
                                          className="carousel-control-next"
                                          type="button"
                                          data-bs-target="#carouselExampleIndicators"
                                          data-bs-slide="next"
                                        >
                                          <span
                                            className="carousel-control-next-icon"
                                            aria-hidden="true"
                                          />
                                          <span className="visually-hidden">
                                            Next
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-7">
                                    <div
                                      className="review-box-content"
                                      style={{ borderBottom: "none" }}
                                    >
                                      <div
                                        className="review-user-info"
                                        style={{ marginLeft: 0 }}
                                      >
                                        <p />
                                        <p>
                                          Breakfast, Morning drive to Mahabalipuram,
                                          en route visita Kanchipuram and visit
                                          <strong>Ekambareswarar Temple</strong> is
                                          dedicated to Shiva. It is one of the five
                                          major Shiva temples or Pancha Bootha
                                          Sthalams (each representing a natural
                                          element) representing the element – Earth.
                                          Then visit
                                          <strong>
                                            Kanchi Kailasanathar temple
                                          </strong>{" "}
                                          is the oldest structure. Later visit{" "}
                                          <strong>Kanchi Kamakshi Temple</strong>{" "}
                                          kamakshi seated in a majestic Padma Sana.
                                          After that drive to Mahabhilpuram.Overnight
                                          at hotel.
                                        </p>
                                        <p />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="flush-headingSix">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseSix"
                              aria-expanded="false"
                              aria-controls="flush-collapseSix"
                            >
                              Day : 6 | Chettinad – Madurai (90 kms / 02 hours)
                            </button>
                          </h2>
                          <div
                            id="flush-collapseSix"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingThree"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="card-body">
                              <div className="col-md-12">
                                <div
                                  className="row"
                                  style={{ padding: "0px 0px", margin: "10px 0px" }}
                                >
                                  <div className="col-md-5">
                                    <div className="accordion-body">
                                      <div
                                        id="carouselExampleIndicators3"
                                        className="carousel slide"
                                        data-bs-ride="carousel"
                                      >
                                        <div className="carousel-indicators">
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators3"
                                            data-bs-slide-to={0}
                                            className="active"
                                            aria-current="true"
                                            aria-label="Slide 1"
                                          />
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators3"
                                            data-bs-slide-to={1}
                                            aria-label="Slide 2"
                                          />
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators3"
                                            data-bs-slide-to={2}
                                            aria-label="Slide 3"
                                          />
                                        </div>
                                        <div className="carousel-inner">
                                          <div className="carousel-item active">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/c7f80fcec757026002b8b3dbdb97bc39.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                          <div className="carousel-item">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/6813ad58c9329a19d28a9b3b323c8c3f.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                          <div className="carousel-item">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/f7fbe3e811539077ab12ee24da3905ef.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                        </div>
                                        <button
                                          className="carousel-control-prev"
                                          type="button"
                                          data-bs-target="#carouselExampleIndicators"
                                          data-bs-slide="prev"
                                        >
                                          <span
                                            className="carousel-control-prev-icon"
                                            aria-hidden="true"
                                          />
                                          <span className="visually-hidden">
                                            Previous
                                          </span>
                                        </button>
                                        <button
                                          className="carousel-control-next"
                                          type="button"
                                          data-bs-target="#carouselExampleIndicators"
                                          data-bs-slide="next"
                                        >
                                          <span
                                            className="carousel-control-next-icon"
                                            aria-hidden="true"
                                          />
                                          <span className="visually-hidden">
                                            Next
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-7">
                                    <div
                                      className="review-box-content"
                                      style={{ borderBottom: "none" }}
                                    >
                                      <div
                                        className="review-user-info"
                                        style={{ marginLeft: 0 }}
                                      >
                                        <p />
                                        <p>
                                          Breakfast, Morning drive to Mahabalipuram,
                                          en route visita Kanchipuram and visit
                                          <strong>Ekambareswarar Temple</strong> is
                                          dedicated to Shiva. It is one of the five
                                          major Shiva temples or Pancha Bootha
                                          Sthalams (each representing a natural
                                          element) representing the element – Earth.
                                          Then visit
                                          <strong>
                                            Kanchi Kailasanathar temple
                                          </strong>{" "}
                                          is the oldest structure. Later visit{" "}
                                          <strong>Kanchi Kamakshi Temple</strong>{" "}
                                          kamakshi seated in a majestic Padma Sana.
                                          After that drive to Mahabhilpuram.Overnight
                                          at hotel.
                                        </p>
                                        <p />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="flush-headingThree">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseSeven"
                              aria-expanded="false"
                              aria-controls="flush-collapseSeven"
                            >
                              Day : 7 | Madurai
                            </button>
                          </h2>
                          <div
                            id="flush-collapseSeven"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingSeven"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="card-body">
                              <div className="col-md-12">
                                <div
                                  className="row"
                                  style={{ padding: "0px 0px", margin: "10px 0px" }}
                                >
                                  <div className="col-md-5">
                                    <div className="accordion-body">
                                      <div
                                        id="carouselExampleIndicators4"
                                        className="carousel slide"
                                        data-bs-ride="carousel"
                                      >
                                        <div className="carousel-indicators">
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators4"
                                            data-bs-slide-to={0}
                                            className="active"
                                            aria-current="true"
                                            aria-label="Slide 1"
                                          />
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators4"
                                            data-bs-slide-to={1}
                                            aria-label="Slide 2"
                                          />
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators4"
                                            data-bs-slide-to={2}
                                            aria-label="Slide 3"
                                          />
                                        </div>
                                        <div className="carousel-inner">
                                          <div className="carousel-item active">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/c7f80fcec757026002b8b3dbdb97bc39.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                          <div className="carousel-item">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/6813ad58c9329a19d28a9b3b323c8c3f.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                          <div className="carousel-item">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/f7fbe3e811539077ab12ee24da3905ef.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                        </div>
                                        <button
                                          className="carousel-control-prev"
                                          type="button"
                                          data-bs-target="#carouselExampleIndicators"
                                          data-bs-slide="prev"
                                        >
                                          <span
                                            className="carousel-control-prev-icon"
                                            aria-hidden="true"
                                          />
                                          <span className="visually-hidden">
                                            Previous
                                          </span>
                                        </button>
                                        <button
                                          className="carousel-control-next"
                                          type="button"
                                          data-bs-target="#carouselExampleIndicators"
                                          data-bs-slide="next"
                                        >
                                          <span
                                            className="carousel-control-next-icon"
                                            aria-hidden="true"
                                          />
                                          <span className="visually-hidden">
                                            Next
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-7">
                                    <div
                                      className="review-box-content"
                                      style={{ borderBottom: "none" }}
                                    >
                                      <div
                                        className="review-user-info"
                                        style={{ marginLeft: 0 }}
                                      >
                                        <p />
                                        <p>
                                          Breakfast, Morning drive to Mahabalipuram,
                                          en route visita Kanchipuram and visit
                                          <strong>Ekambareswarar Temple</strong> is
                                          dedicated to Shiva. It is one of the five
                                          major Shiva temples or Pancha Bootha
                                          Sthalams (each representing a natural
                                          element) representing the element – Earth.
                                          Then visit
                                          <strong>
                                            Kanchi Kailasanathar temple
                                          </strong>{" "}
                                          is the oldest structure. Later visit{" "}
                                          <strong>Kanchi Kamakshi Temple</strong>{" "}
                                          kamakshi seated in a majestic Padma Sana.
                                          After that drive to Mahabhilpuram.Overnight
                                          at hotel.
                                        </p>
                                        <p />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="flush-headingEight">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseEight"
                              aria-expanded="false"
                              aria-controls="flush-collapseEight"
                            >
                              Day : 8 | Madurai – Periyar (140 kms / 03 hours)
                            </button>
                          </h2>
                          <div
                            id="flush-collapseEight"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingEight"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="card-body">
                              <div className="col-md-12">
                                <div
                                  className="row"
                                  style={{ padding: "0px 0px", margin: "10px 0px" }}
                                >
                                  <div className="col-md-5">
                                    <div className="accordion-body">
                                      <div
                                        id="carouselExampleIndicators5"
                                        className="carousel slide"
                                        data-bs-ride="carousel"
                                      >
                                        <div className="carousel-indicators">
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators5"
                                            data-bs-slide-to={0}
                                            className="active"
                                            aria-current="true"
                                            aria-label="Slide 1"
                                          />
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators5"
                                            data-bs-slide-to={1}
                                            aria-label="Slide 2"
                                          />
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators5"
                                            data-bs-slide-to={2}
                                            aria-label="Slide 3"
                                          />
                                        </div>
                                        <div className="carousel-inner">
                                          <div className="carousel-item active">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/c7f80fcec757026002b8b3dbdb97bc39.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                          <div className="carousel-item">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/6813ad58c9329a19d28a9b3b323c8c3f.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                          <div className="carousel-item">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/f7fbe3e811539077ab12ee24da3905ef.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                        </div>
                                        <button
                                          className="carousel-control-prev"
                                          type="button"
                                          data-bs-target="#carouselExampleIndicators"
                                          data-bs-slide="prev"
                                        >
                                          <span
                                            className="carousel-control-prev-icon"
                                            aria-hidden="true"
                                          />
                                          <span className="visually-hidden">
                                            Previous
                                          </span>
                                        </button>
                                        <button
                                          className="carousel-control-next"
                                          type="button"
                                          data-bs-target="#carouselExampleIndicators"
                                          data-bs-slide="next"
                                        >
                                          <span
                                            className="carousel-control-next-icon"
                                            aria-hidden="true"
                                          />
                                          <span className="visually-hidden">
                                            Next
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-7">
                                    <div
                                      className="review-box-content"
                                      style={{ borderBottom: "none" }}
                                    >
                                      <div
                                        className="review-user-info"
                                        style={{ marginLeft: 0 }}
                                      >
                                        <p />
                                        <p>
                                          Breakfast, Morning drive to Mahabalipuram,
                                          en route visita Kanchipuram and visit
                                          <strong>Ekambareswarar Temple</strong> is
                                          dedicated to Shiva. It is one of the five
                                          major Shiva temples or Pancha Bootha
                                          Sthalams (each representing a natural
                                          element) representing the element – Earth.
                                          Then visit
                                          <strong>
                                            Kanchi Kailasanathar temple
                                          </strong>{" "}
                                          is the oldest structure. Later visit{" "}
                                          <strong>Kanchi Kamakshi Temple</strong>{" "}
                                          kamakshi seated in a majestic Padma Sana.
                                          After that drive to Mahabhilpuram.Overnight
                                          at hotel.
                                        </p>
                                        <p />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="flush-headingNine">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseNine"
                              aria-expanded="false"
                              aria-controls="flush-collapseNine"
                            >
                              Day : 9 | Periyar – Kumarakom – Alleppey (140 kms / 03
                              hours)
                            </button>
                          </h2>
                          <div
                            id="flush-collapseNine"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingThree"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="card-body">
                              <div className="col-md-12">
                                <div
                                  className="row"
                                  style={{ padding: "0px 0px", margin: "10px 0px" }}
                                >
                                  <div className="col-md-5">
                                    <div className="accordion-body">
                                      <div
                                        id="carouselExampleIndicators6"
                                        className="carousel slide"
                                        data-bs-ride="carousel"
                                      >
                                        <div className="carousel-indicators">
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators6"
                                            data-bs-slide-to={0}
                                            className="active"
                                            aria-current="true"
                                            aria-label="Slide 1"
                                          />
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators6"
                                            data-bs-slide-to={1}
                                            aria-label="Slide 2"
                                          />
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators6"
                                            data-bs-slide-to={2}
                                            aria-label="Slide 3"
                                          />
                                        </div>
                                        <div className="carousel-inner">
                                          <div className="carousel-item active">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/c7f80fcec757026002b8b3dbdb97bc39.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                          <div className="carousel-item">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/6813ad58c9329a19d28a9b3b323c8c3f.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                          <div className="carousel-item">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/f7fbe3e811539077ab12ee24da3905ef.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                        </div>
                                        <button
                                          className="carousel-control-prev"
                                          type="button"
                                          data-bs-target="#carouselExampleIndicators"
                                          data-bs-slide="prev"
                                        >
                                          <span
                                            className="carousel-control-prev-icon"
                                            aria-hidden="true"
                                          />
                                          <span className="visually-hidden">
                                            Previous
                                          </span>
                                        </button>
                                        <button
                                          className="carousel-control-next"
                                          type="button"
                                          data-bs-target="#carouselExampleIndicators"
                                          data-bs-slide="next"
                                        >
                                          <span
                                            className="carousel-control-next-icon"
                                            aria-hidden="true"
                                          />
                                          <span className="visually-hidden">
                                            Next
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-7">
                                    <div
                                      className="review-box-content"
                                      style={{ borderBottom: "none" }}
                                    >
                                      <div
                                        className="review-user-info"
                                        style={{ marginLeft: 0 }}
                                      >
                                        <p />
                                        <p>
                                          Breakfast, Morning drive to Mahabalipuram,
                                          en route visita Kanchipuram and visit
                                          <strong>Ekambareswarar Temple</strong> is
                                          dedicated to Shiva. It is one of the five
                                          major Shiva temples or Pancha Bootha
                                          Sthalams (each representing a natural
                                          element) representing the element – Earth.
                                          Then visit
                                          <strong>
                                            Kanchi Kailasanathar temple
                                          </strong>{" "}
                                          is the oldest structure. Later visit{" "}
                                          <strong>Kanchi Kamakshi Temple</strong>{" "}
                                          kamakshi seated in a majestic Padma Sana.
                                          After that drive to Mahabhilpuram.Overnight
                                          at hotel.
                                        </p>
                                        <p />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="flush-headingTen">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseTen"
                              aria-expanded="false"
                              aria-controls="flush-collapseTen"
                            >
                              Day : 10 | Alleppey – Kochi (50 kms / 1.5 hours)
                            </button>
                          </h2>
                          <div
                            id="flush-collapseTen"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingThree"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="card-body">
                              <div className="col-md-12">
                                <div
                                  className="row"
                                  style={{ padding: "0px 0px", margin: "10px 0px" }}
                                >
                                  <div className="col-md-5">
                                    <div className="accordion-body">
                                      <div
                                        id="carouselExampleIndicators18"
                                        className="carousel slide"
                                        data-bs-ride="carousel"
                                      >
                                        <div className="carousel-indicators">
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators18"
                                            data-bs-slide-to={0}
                                            className="active"
                                            aria-current="true"
                                            aria-label="Slide 1"
                                          />
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators18"
                                            data-bs-slide-to={1}
                                            aria-label="Slide 2"
                                          />
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators18"
                                            data-bs-slide-to={2}
                                            aria-label="Slide 3"
                                          />
                                        </div>
                                        <div className="carousel-inner">
                                          <div className="carousel-item active">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/c7f80fcec757026002b8b3dbdb97bc39.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                          <div className="carousel-item">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/6813ad58c9329a19d28a9b3b323c8c3f.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                          <div className="carousel-item">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/f7fbe3e811539077ab12ee24da3905ef.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                        </div>
                                        <button
                                          className="carousel-control-prev"
                                          type="button"
                                          data-bs-target="#carouselExampleIndicators"
                                          data-bs-slide="prev"
                                        >
                                          <span
                                            className="carousel-control-prev-icon"
                                            aria-hidden="true"
                                          />
                                          <span className="visually-hidden">
                                            Previous
                                          </span>
                                        </button>
                                        <button
                                          className="carousel-control-next"
                                          type="button"
                                          data-bs-target="#carouselExampleIndicators"
                                          data-bs-slide="next"
                                        >
                                          <span
                                            className="carousel-control-next-icon"
                                            aria-hidden="true"
                                          />
                                          <span className="visually-hidden">
                                            Next
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-7">
                                    <div
                                      className="review-box-content"
                                      style={{ borderBottom: "none" }}
                                    >
                                      <div
                                        className="review-user-info"
                                        style={{ marginLeft: 0 }}
                                      >
                                        <p />
                                        <p>
                                          Breakfast, Morning drive to Mahabalipuram,
                                          en route visita Kanchipuram and visit
                                          <strong>Ekambareswarar Temple</strong> is
                                          dedicated to Shiva. It is one of the five
                                          major Shiva temples or Pancha Bootha
                                          Sthalams (each representing a natural
                                          element) representing the element – Earth.
                                          Then visit
                                          <strong>
                                            Kanchi Kailasanathar temple
                                          </strong>{" "}
                                          is the oldest structure. Later visit{" "}
                                          <strong>Kanchi Kamakshi Temple</strong>{" "}
                                          kamakshi seated in a majestic Padma Sana.
                                          After that drive to Mahabhilpuram.Overnight
                                          at hotel.
                                        </p>
                                        <p />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="flush-headingEleven">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseEleven"
                              aria-expanded="false"
                              aria-controls="flush-collapseEleven"
                            >
                              Day : 11 | Kochi – Ooty (280 kms / 07 hours)
                            </button>
                          </h2>
                          <div
                            id="flush-collapseEleven"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingThree"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="card-body">
                              <div className="col-md-12">
                                <div
                                  className="row"
                                  style={{ padding: "0px 0px", margin: "10px 0px" }}
                                >
                                  <div className="col-md-5">
                                    <div className="accordion-body">
                                      <div
                                        id="carouselExampleIndicators19"
                                        className="carousel slide"
                                        data-bs-ride="carousel"
                                      >
                                        <div className="carousel-indicators">
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators19"
                                            data-bs-slide-to={0}
                                            className="active"
                                            aria-current="true"
                                            aria-label="Slide 1"
                                          />
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators19"
                                            data-bs-slide-to={1}
                                            aria-label="Slide 2"
                                          />
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators19"
                                            data-bs-slide-to={2}
                                            aria-label="Slide 3"
                                          />
                                        </div>
                                        <div className="carousel-inner">
                                          <div className="carousel-item active">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/c7f80fcec757026002b8b3dbdb97bc39.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                          <div className="carousel-item">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/6813ad58c9329a19d28a9b3b323c8c3f.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                          <div className="carousel-item">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/f7fbe3e811539077ab12ee24da3905ef.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                        </div>
                                        <button
                                          className="carousel-control-prev"
                                          type="button"
                                          data-bs-target="#carouselExampleIndicators"
                                          data-bs-slide="prev"
                                        >
                                          <span
                                            className="carousel-control-prev-icon"
                                            aria-hidden="true"
                                          />
                                          <span className="visually-hidden">
                                            Previous
                                          </span>
                                        </button>
                                        <button
                                          className="carousel-control-next"
                                          type="button"
                                          data-bs-target="#carouselExampleIndicators"
                                          data-bs-slide="next"
                                        >
                                          <span
                                            className="carousel-control-next-icon"
                                            aria-hidden="true"
                                          />
                                          <span className="visually-hidden">
                                            Next
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-7">
                                    <div
                                      className="review-box-content"
                                      style={{ borderBottom: "none" }}
                                    >
                                      <div
                                        className="review-user-info"
                                        style={{ marginLeft: 0 }}
                                      >
                                        <p />
                                        <p>
                                          Breakfast, Morning drive to Mahabalipuram,
                                          en route visita Kanchipuram and visit
                                          <strong>Ekambareswarar Temple</strong> is
                                          dedicated to Shiva. It is one of the five
                                          major Shiva temples or Pancha Bootha
                                          Sthalams (each representing a natural
                                          element) representing the element – Earth.
                                          Then visit
                                          <strong>
                                            Kanchi Kailasanathar temple
                                          </strong>{" "}
                                          is the oldest structure. Later visit{" "}
                                          <strong>Kanchi Kamakshi Temple</strong>{" "}
                                          kamakshi seated in a majestic Padma Sana.
                                          After that drive to Mahabhilpuram.Overnight
                                          at hotel.
                                        </p>
                                        <p />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="flush-headingTwelve">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseTwelve"
                              aria-expanded="false"
                              aria-controls="flush-collapseTwelve"
                            >
                              Day : 12 | Ooty – Mysore (130 kms / 04 hours)
                            </button>
                          </h2>
                          <div
                            id="flush-collapseTwelve"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingThree"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="card-body">
                              <div className="col-md-12">
                                <div
                                  className="row"
                                  style={{ padding: "0px 0px", margin: "10px 0px" }}
                                >
                                  <div className="col-md-5">
                                    <div className="accordion-body">
                                      <div
                                        id="carouselExampleIndicators7"
                                        className="carousel slide"
                                        data-bs-ride="carousel"
                                      >
                                        <div className="carousel-indicators">
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators7"
                                            data-bs-slide-to={0}
                                            className="active"
                                            aria-current="true"
                                            aria-label="Slide 1"
                                          />
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators7"
                                            data-bs-slide-to={1}
                                            aria-label="Slide 2"
                                          />
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators7"
                                            data-bs-slide-to={2}
                                            aria-label="Slide 3"
                                          />
                                        </div>
                                        <div className="carousel-inner">
                                          <div className="carousel-item active">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/c7f80fcec757026002b8b3dbdb97bc39.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                          <div className="carousel-item">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/6813ad58c9329a19d28a9b3b323c8c3f.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                          <div className="carousel-item">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/f7fbe3e811539077ab12ee24da3905ef.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                        </div>
                                        <button
                                          className="carousel-control-prev"
                                          type="button"
                                          data-bs-target="#carouselExampleIndicators"
                                          data-bs-slide="prev"
                                        >
                                          <span
                                            className="carousel-control-prev-icon"
                                            aria-hidden="true"
                                          />
                                          <span className="visually-hidden">
                                            Previous
                                          </span>
                                        </button>
                                        <button
                                          className="carousel-control-next"
                                          type="button"
                                          data-bs-target="#carouselExampleIndicators"
                                          data-bs-slide="next"
                                        >
                                          <span
                                            className="carousel-control-next-icon"
                                            aria-hidden="true"
                                          />
                                          <span className="visually-hidden">
                                            Next
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-7">
                                    <div
                                      className="review-box-content"
                                      style={{ borderBottom: "none" }}
                                    >
                                      <div
                                        className="review-user-info"
                                        style={{ marginLeft: 0 }}
                                      >
                                        <p />
                                        <p>
                                          Breakfast, Morning drive to Mahabalipuram,
                                          en route visita Kanchipuram and visit
                                          <strong>Ekambareswarar Temple</strong> is
                                          dedicated to Shiva. It is one of the five
                                          major Shiva temples or Pancha Bootha
                                          Sthalams (each representing a natural
                                          element) representing the element – Earth.
                                          Then visit
                                          <strong>
                                            Kanchi Kailasanathar temple
                                          </strong>{" "}
                                          is the oldest structure. Later visit{" "}
                                          <strong>Kanchi Kamakshi Temple</strong>{" "}
                                          kamakshi seated in a majestic Padma Sana.
                                          After that drive to Mahabhilpuram.Overnight
                                          at hotel.
                                        </p>
                                        <p />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="flush-headingThirteen">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseThirteen"
                              aria-expanded="false"
                              aria-controls="flush-collapseThirteen"
                            >
                              Day : 13 | Mysore – Bangalore (150 kms / 04 hours)
                            </button>
                          </h2>
                          <div
                            id="flush-collapseThirteen"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingThree"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="card-body">
                              <div className="col-md-12">
                                <div
                                  className="row"
                                  style={{ padding: "0px 0px", margin: "10px 0px" }}
                                >
                                  <div className="col-md-5">
                                    <div className="accordion-body">
                                      <div
                                        id="carouselExampleIndicators8"
                                        className="carousel slide"
                                        data-bs-ride="carousel"
                                      >
                                        <div className="carousel-indicators">
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators8"
                                            data-bs-slide-to={0}
                                            className="active"
                                            aria-current="true"
                                            aria-label="Slide 1"
                                          />
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators8"
                                            data-bs-slide-to={1}
                                            aria-label="Slide 2"
                                          />
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators8"
                                            data-bs-slide-to={2}
                                            aria-label="Slide 3"
                                          />
                                        </div>
                                        <div className="carousel-inner">
                                          <div className="carousel-item active">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/c7f80fcec757026002b8b3dbdb97bc39.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                          <div className="carousel-item">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/6813ad58c9329a19d28a9b3b323c8c3f.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                          <div className="carousel-item">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/f7fbe3e811539077ab12ee24da3905ef.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                        </div>
                                        <button
                                          className="carousel-control-prev"
                                          type="button"
                                          data-bs-target="#carouselExampleIndicators"
                                          data-bs-slide="prev"
                                        >
                                          <span
                                            className="carousel-control-prev-icon"
                                            aria-hidden="true"
                                          />
                                          <span className="visually-hidden">
                                            Previous
                                          </span>
                                        </button>
                                        <button
                                          className="carousel-control-next"
                                          type="button"
                                          data-bs-target="#carouselExampleIndicators"
                                          data-bs-slide="next"
                                        >
                                          <span
                                            className="carousel-control-next-icon"
                                            aria-hidden="true"
                                          />
                                          <span className="visually-hidden">
                                            Next
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-7">
                                    <div
                                      className="review-box-content"
                                      style={{ borderBottom: "none" }}
                                    >
                                      <div
                                        className="review-user-info"
                                        style={{ marginLeft: 0 }}
                                      >
                                        <p />
                                        <p>
                                          Breakfast, Morning drive to Mahabalipuram,
                                          en route visita Kanchipuram and visit
                                          <strong>Ekambareswarar Temple</strong> is
                                          dedicated to Shiva. It is one of the five
                                          major Shiva temples or Pancha Bootha
                                          Sthalams (each representing a natural
                                          element) representing the element – Earth.
                                          Then visit
                                          <strong>
                                            Kanchi Kailasanathar temple
                                          </strong>{" "}
                                          is the oldest structure. Later visit{" "}
                                          <strong>Kanchi Kamakshi Temple</strong>{" "}
                                          kamakshi seated in a majestic Padma Sana.
                                          After that drive to Mahabhilpuram.Overnight
                                          at hotel.
                                        </p>
                                        <p />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="flush-headingFourteen">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseFourteen"
                              aria-expanded="false"
                              aria-controls="flush-collapseFourteen"
                            >
                              Day : 14 | Bangalore Departure
                            </button>
                          </h2>
                          <div
                            id="flush-collapseFourteen"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingThree"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="card-body">
                              <div className="col-md-12">
                                <div
                                  className="row"
                                  style={{ padding: "0px 0px", margin: "10px 0px" }}
                                >
                                  <div className="col-md-5">
                                    <div className="accordion-body">
                                      <div
                                        id="carouselExampleIndicators9"
                                        className="carousel slide"
                                        data-bs-ride="carousel"
                                      >
                                        <div className="carousel-indicators">
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators9"
                                            data-bs-slide-to={0}
                                            className="active"
                                            aria-current="true"
                                            aria-label="Slide 1"
                                          />
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators9"
                                            data-bs-slide-to={1}
                                            aria-label="Slide 2"
                                          />
                                          <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators9"
                                            data-bs-slide-to={2}
                                            aria-label="Slide 3"
                                          />
                                        </div>
                                        <div className="carousel-inner">
                                          <div className="carousel-item active">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/c7f80fcec757026002b8b3dbdb97bc39.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                          <div className="carousel-item">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/6813ad58c9329a19d28a9b3b323c8c3f.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                          <div className="carousel-item">
                                            <img
                                              src="https://topindiatrips.com/assets/uploads/f7fbe3e811539077ab12ee24da3905ef.jpg"
                                              width={280}
                                              height={150}
                                              className="d-block w-100"
                                              alt="..."
                                            />
                                          </div>
                                        </div>
                                        <button
                                          className="carousel-control-prev"
                                          type="button"
                                          data-bs-target="#carouselExampleIndicators"
                                          data-bs-slide="prev"
                                        >
                                          <span
                                            className="carousel-control-prev-icon"
                                            aria-hidden="true"
                                          />
                                          <span className="visually-hidden">
                                            Previous
                                          </span>
                                        </button>
                                        <button
                                          className="carousel-control-next"
                                          type="button"
                                          data-bs-target="#carouselExampleIndicators"
                                          data-bs-slide="next"
                                        >
                                          <span
                                            className="carousel-control-next-icon"
                                            aria-hidden="true"
                                          />
                                          <span className="visually-hidden">
                                            Next
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-7">
                                    <div className="review-box-content">
                                      <div
                                        className="review-user-info"
                                        style={{ marginLeft: 0 }}
                                      >
                                        <p />
                                        <p>
                                          Breakfast, Morning drive to Mahabalipuram,
                                          en route visita Kanchipuram and visit
                                          <strong>Ekambareswarar Temple</strong> is
                                          dedicated to Shiva. It is one of the five
                                          major Shiva temples or Pancha Bootha
                                          Sthalams (each representing a natural
                                          element) representing the element – Earth.
                                          Then visit
                                          <strong>
                                            Kanchi Kailasanathar temple
                                          </strong>{" "}
                                          is the oldest structure. Later visit{" "}
                                          <strong>Kanchi Kamakshi Temple</strong>{" "}
                                          kamakshi seated in a majestic Padma Sana.
                                          After that drive to Mahabhilpuram.Overnight
                                          at hotel.
                                        </p>
                                        <p />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="transparent-bgg" />
                        <div className="accordion" id="accordionExample">
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="headingOne"
                              style={{ borderTop: "1px solid rgb(201, 196, 196)" }}
                            >
                              <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                {/* <FontAwesomeIcon icon={faCheck} style={{ width:"15px", color: "#25d366" }} /> */}
                                {" "}

                                {" "}<span style={{ visibility: "hidden" }}></span> {" "}
                                Inclusions
                              </button>
                            </h2>
                            <div
                              id="collapseOne"
                              className="accordion-collapse collapse show"
                              aria-labelledby="headingOne"
                              data-bs-parent="#accordionExample"
                            >
                              <ul className="simple-features-lists">
                                <li>
                                  <i className="fa-regular fa-hand-point-right"></i>{" "}
                                  Free Wi-Fi service in the vehicle during the tour.{" "}
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faHandPointRight} style={{ width: '20px' }} />{" "}
                                  Accommodation with breakfast at hotels
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faHandPointRight} style={{ width: '20px' }} />{" "}
                                  All transfers, excursions and visits in vehicle
                                  equipped with air condition.
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faHandPointRight} style={{ width: '20px' }} />{" "}
                                  Local guide during tourist visits.{" "}
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faHandPointRight} style={{ width: '20px' }} />{" "}
                                  Assistance of representative in the arrivals and
                                  departures.
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faHandPointRight} style={{ width: '20px' }} />{" "}
                                  Traditional welcome with garlands.
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faHandPointRight} style={{ width: '20px' }} />{" "}
                                  Bags service, 1 suitcase per person in airports and
                                  train stations
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faHandPointRight} style={{ width: '20px' }} />{" "}
                                  Unlimited mineral water in the vehicle.
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faHandPointRight} style={{ width: '20px' }} />{" "}
                                  All tax included.
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="headingOne"
                              style={{ borderTop: "1px solid rgb(201, 196, 196)" }}
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                <i
                                  style={{ color: "red" }}
                                  className="fa-solid fa-xmark"
                                />
                                <span style={{ visibility: "hidden" }}>_</span>
                                Exclusions
                              </button>
                            </h2>
                            <div
                              id="collapseTwo"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingTwo"
                              data-bs-parent="#accordionExample"
                            >
                              <ul className="simple-features-lists">
                                <li>
                                  <FontAwesomeIcon icon={faHandPointRight} style={{ width: '20px' }} />
                                  {" "} Free Wi-Fi service in the vehicle during the tour.{" "}
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faHandPointRight} style={{ width: '20px' }} />
                                  {" "} Accommodation with breakfast at hotels
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faHandPointRight} style={{ width: '20px' }} />
                                  {" "}All transfers, excursions and visits in vehicle
                                  equipped with air condition.
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faHandPointRight} style={{ width: '20px' }} />
                                  {" "}Local guide during tourist visits.{" "}
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faHandPointRight} style={{ width: '20px' }} />
                                  {" "} Assistance of representative in the arrivals and
                                  departures.
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faHandPointRight} style={{ width: '20px' }} />
                                  {" "} Traditional welcome with garlands.
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faHandPointRight} style={{ width: '20px' }} />
                                  {" "}Bags service, 1 suitcase per person in airports and
                                  train stations
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faHandPointRight} style={{ width: '20px' }} />
                                  {" "}Unlimited mineral water in the vehicle.
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faHandPointRight} style={{ width: '20px' }} />
                                  {" "} All tax included.
                                </li>
                                <li>
                                  <FontAwesomeIcon icon={faHandPointRight} style={{ width: '20px' }} />
                                  {" "}02 Jungle Safari (Morning &amp; Evening) at national
                                  park by canter (Shared basis).{" "}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="clearfix" />
                    </div>
                    {/* <div class="tr-single-box">
									<div class="tr-single-header">
										<h4><i class="ti-layers-alt"></i>Itinerary</h4>
									</div>
									<div class="tr-single-body">
										
									</div>
									<div class="clearfix"></div>
								</div> */}
                  </div>
                </div>
                {/* ============ Review =================== */}
              </div>
              {/* Sidebar Start */}
              <div className="col-md-4 col-sm-12 sidebar" id="sidebar">
                <div className="sidebar__inner">
                  {/* overview & booking Form */}
                  <div className="tr-single-box">
                    <div className="tr-single-header">
                      <div className="entry-meta">
                        <div className="meta-item meta-comment">
                          <div className="view-box">
                            <div className="fl-right">
                              <h4>
                                <FontAwesomeIcon icon={faDiamondTurnRight} style={{ width: '25px', height: '19px', paddingRight: '2px' }} />
                                Enquire Now
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tr-single-body">
                      {/* <form className="book-form" method="post">
                  <div className="form-group">
                    <input type="hidden" name="hceak" />
                    <input
                      type="text"
                      className="group-fr"
                      name="name"
                      placeholder="Enter your name..."
                      defaultValue=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="group-fr"
                      name="mobile"
                      placeholder="Enter your phone..."
                      defaultValue=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="group-fr"
                      name="email"
                      required=""
                      placeholder="Enter your email..."
                      defaultValue=""
                    />
                  </div>
                  <input
                    type="hidden"
                    name="option1"
                    defaultValue="Best of south India tour"
                  />
                  <div className="form-group">
                    <select name="option2" className="group-fr" required="true">
                      <option value="" disabled="" selected="">
                        Select your package
                      </option>
                      <option value="Honeymoon Package">
                        Honeymoon Package
                      </option>
                      <option value="Family Package">Family Package</option>
                      <option value="Holiday Package">Holiday Package</option>
                      <option value="Group Package">Group Package</option>
                      <option value="Regular Package">Regular Package</option>
                    </select>
                
                  </div>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <input
                        type="date"
                        className="group-fr"
                        name="start_date"
                        required="true"
                        placeholder="Arrival Date"
                        defaultValue=""
                        id="start_date"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="date"
                        className="group-fr"
                        name="end_date"
                        required="true"
                        placeholder="Departure Date"
                        defaultValue=""
                        id="enddate"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <select name="adults" className="group-fr">
                        <option value="">No of adults</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                      </select>
                     
                    </div>
                    <div className="form-group col-md-6">
                      <select name="child" className="group-fr col-md-12">
                        <option value="">No of childrens</option>
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                      </select>
                     
                    </div>
                  </div>
                  <div className="row">
                    <input
                      type="submit"
                      defaultValue="Book Now"
                      name="carSubmit"
                      style={{
                        backgroundColor: "red",
                        color: "#fff",
                        borderRadius: 0
                      }}
                      className="btn btn-large theme-btn"
                    />
                  </div>
                </form> */}
                      <FormSubmit />
                    </div>
                  </div>
                  {/* Share this */}
                  <div className="tr-single-box">
                    <div className="tr-single-header">
                      <h4>Share this</h4>
                    </div>
                    <div className="tr-single-body">
                      <div
                        className="sharethis-inline-share-buttons st-center st-has-labels  st-inline-share-buttons st-animated"
                        id="st-1"
                      >
                        <div className="st-total st-hidden">
                          <span className="st-label" />
                          <span style={{ display: "none" }} className="st-shares">
                            Shares
                          </span>
                        </div>
                        <div
                          className="st-btn st-first  st-remove-label"
                          data-network="facebook"
                          style={{ display: "inline-block" }}
                        >
                          <img
                            alt="facebook sharing button"
                            src="https://platform-cdn.sharethis.com/img/facebook.svg"
                          />
                          {/* <span class="st-label">Share</span> */}
                        </div>
                        <div
                          className="st-btn  st-remove-label"
                          data-network="twitter"
                          style={{ display: "inline-block" }}
                        >
                          <img
                            alt="twitter sharing button"
                            src="https://platform-cdn.sharethis.com/img/twitter.svg"
                          />
                          {/* <span class="st-label">Tweet</span> */}
                        </div>
                        <div
                          className="st-btn  st-remove-label"
                          data-network="linkedin"
                          style={{ display: "inline-block" }}
                        >
                          <img
                            alt="linkedin sharing button"
                            src="https://platform-cdn.sharethis.com/img/linkedin.svg"
                          />
                          {/* <span class="st-label">Share</span> */}
                        </div>
                        <div
                          className="st-btn  st-remove-label"
                          data-network="whatsapp"
                          style={{ display: "inline-block" }}
                        >
                          <img
                            alt="whatsapp sharing button"
                            src="https://platform-cdn.sharethis.com/img/whatsapp.svg"
                          />
                          {/* <span class="st-label">Share</span> */}
                        </div>
                        <div
                          className="st-btn st-last  st-remove-label"
                          data-network="messenger"
                          style={{ display: "inline-block" }}
                        >
                          <img
                            alt="messenger sharing button"
                            src="https://platform-cdn.sharethis.com/img/messenger.svg"
                          />
                          {/* <span class="st-label">Share</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Share this */}
                  <div className="tr-single-box">
                    <div className="tr-single-header">
                      <h4>Suggested Tours</h4>
                    </div>
                    <div className="tr-single-body sidebar-ii">
                      <div className="list-slide-box col-md-12">
                        <div className="row">
                          <div className="col-md-4">
                            <a href="https://topindiatrips.com/tours/detail/23">
                              <img
                                src="https://topindiatrips.com/assets/uploads/59e869f0c08ffb1d2e493d2a3f2191f1.jpg"
                                className="img-responsive"
                                alt="Classic India tour with Mumbai and Goa"
                              />
                            </a>
                          </div>
                          <div className="col-md-8">
                            <div className="row">
                              <div className="col-md-11">
                                <a href="https://topindiatrips.com/tours/detail/23">
                                  Classic India tour with Mumbai and Goa
                                  <br />
                                  <span style={{ fontSize: 11 }}>
                                    13 Days | 12 Nights
                                  </span>
                                  <br />
                                  <span style={{ fontSize: 10 }}>
                                    <i className="ti ti-target" />
                                    Delhi - Jaipur - Agra - Khajuraho - Va...
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="list-slide-box col-md-12">
                        <div className="row">
                          <div className="col-md-4">
                            <a href="trips.html">
                              <img
                                src="https://topindiatrips.com/assets/uploads/63e7aef5e0fbd262edb1f0365bf62741.jpg"
                                className="img-responsive"
                                alt="Best of Karnataka Heritage"
                              />
                            </a>
                          </div>
                          <div className="col-md-8">
                            <div className="row">
                              <div className="col-md-11">
                                <a href="https://topindiatrips.com/tours/detail/11">
                                  Best of Karnataka Heritage
                                  <br />
                                  <span style={{ fontSize: 11 }}>
                                    9 Days | 8 Nights
                                  </span>
                                  <br />
                                  <span style={{ fontSize: 10 }}>
                                    <i className="ti ti-target" />
                                    Bangalore - Mysore - Hassan - Hospet -...
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="list-slide-box col-md-12">
                        <div className="row">
                          <div className="col-md-4">
                            <a href="trip.html">
                              <img
                                src="https://topindiatrips.com/assets/uploads/5a0c5d894d92d420e37a1981ffd3d8ff.jpg"
                                className="img-responsive"
                                alt="South India Temple Tour"
                              />
                            </a>
                          </div>
                          <div className="col-md-8">
                            <div className="row">
                              <div className="col-md-11">
                                <a href="trip.html">
                                  South India Temple Tour
                                  <br />
                                  <span style={{ fontSize: 11 }}>
                                    8 Days | 7 Nights
                                  </span>
                                  <br />
                                  <span style={{ fontSize: 10 }}>
                                    <i className="ti ti-target" />
                                    Chennai - Mahabalipuram - Darasuram - ...
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="list-slide-box col-md-12">
                        <div className="row">
                          <div className="col-md-4">
                            <a href="trips.html">
                              <img
                                src="https://topindiatrips.com/assets/uploads/8f82e3dbf2b9582f3cce833a6f8825c7.jpg"
                                className="img-responsive"
                                alt="Golden Triangle with Amritsar and Chandigarh"
                              />
                            </a>
                          </div>
                          <div className="col-md-8">
                            <div className="row">
                              <div className="col-md-11">
                                <a href="trips.html">
                                  Golden Triangle with Amritsar and Chandigarh
                                  <br />
                                  <span style={{ fontSize: 11 }}>
                                    9 Days | 8 Nights
                                  </span>
                                  <br />
                                  <span style={{ fontSize: 10 }}>
                                    <i className="ti ti-target" />
                                    Delhi-Jaipur-Agra-Amritsar-Chandigarh-...
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="list-slide-box col-md-12">
                        <div className="row">
                          <div className="col-md-4">
                            <a href="trips.html">
                              <img
                                src="https://topindiatrips.com/assets/uploads/96d2399bc386d8cf21cc2e1835ebead2.jpg"
                                className="img-responsive"
                                alt="Footprint of Buddha Tours"
                              />
                            </a>
                          </div>
                          <div className="col-md-8">
                            <div className="row">
                              <div className="col-md-11">
                                <a href="trips.html">
                                  Footprint of Buddha Tours
                                  <br />
                                  <span style={{ fontSize: 11 }}>
                                    13 Days | 12 Nights
                                  </span>
                                  <br />
                                  <span style={{ fontSize: 10 }}>
                                    <i className="ti ti-target" />
                                    2,11,19,32,302,303
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="clearfix" />
                    </div>
                  </div>
                </div>
              </div>
              {/* /col-md-4 */}
            </div>
          </div>
        </div>
      </>

    </>
  )
}

export default page