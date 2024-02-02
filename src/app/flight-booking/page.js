import React from 'react'
import Flightform from '../components/FlightForm'

const page = () => {
    return (
        <>
            <div className="v2-hom-search">
                <div className="div_video fond_video">

                    <video style={{ width: "100%", height: "auto" }} src="/videos/india_banner.mp4" autoPlay muted loop />
                    <div className="fond_video_filtre" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="v2-ho-se-ri">
                                <h5>World's leading tour and travels company</h5>
                                <h1>Flight Booking to your travel!</h1>
                                <p>
                                    Experience the various exciting tour and travel packages and Make
                                    hotel reservations, find vacation packages, search cheap hotels and
                                    events
                                </p>
                                <div className="tourz-hom-ser v2-hom-ser">
                                    <ul>
                                        <li>
                                            <a
                                                href="/tour"
                                                className="waves-effect waves-light btn-large tourz-pop-ser-btn wow fadeInUp animated"
                                                data-wow-duration="0.5s"
                                                style={{
                                                    visibility: "visible",
                                                    WebkitAnimationDuration: "0.5s",
                                                    MozAnimationDuration: "0.5s",
                                                    animationDuration: "0.5s"
                                                }}
                                            >
                                                <img
                                                    src="https://topindiatrips.com/assets/img/2.png"
                                                    alt=""
                                                />{" "}
                                                Tour
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/flight-booking"
                                                className="waves-effect waves-light btn-large tourz-pop-ser-btn wow fadeInUp animated"
                                                data-wow-duration="1s"
                                                style={{
                                                    visibility: "visible",
                                                    WebkitAnimationDuration: "1s",
                                                    MozAnimationDuration: "1s",
                                                    animationDuration: "1s"
                                                }}
                                            >
                                                <img
                                                    src="https://topindiatrips.com/assets/img/31.png"
                                                    alt=""
                                                />{" "}
                                                Flight
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/car-booking"
                                                className="waves-effect waves-light btn-large tourz-pop-ser-btn wow fadeInUp animated"
                                                data-wow-duration="1.5s"
                                                style={{
                                                    visibility: "visible",
                                                    WebkitAnimationDuration: "1.5s",
                                                    MozAnimationDuration: "1.5s",
                                                    animationDuration: "1.5s"
                                                }}
                                            >
                                                <img
                                                    src="https://topindiatrips.com/assets/img/30.png"
                                                    alt=""
                                                />{" "}
                                                Car Rentals
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/hotel-booking"
                                                className="waves-effect waves-light btn-large tourz-pop-ser-btn wow fadeInUp animated"
                                                data-wow-duration="2s"
                                                style={{
                                                    visibility: "visible",
                                                    WebkitAnimationDuration: "2s",
                                                    MozAnimationDuration: "2s",
                                                    animationDuration: "2s"
                                                }}
                                            >
                                                <img
                                                    src="https://topindiatrips.com/assets/img/1.png"
                                                    alt=""
                                                />{" "}
                                                Hotel
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="">

                                <Flightform />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default page