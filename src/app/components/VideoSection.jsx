import React from 'react'

const VideoSection = () => {
  return (
    <>
      <div className="search-section">
        {/* <div class="search-center"> */}
        <div className="discover">Discover Your Tour</div>
        <div className="Explore">
          Explore Top Rated Tours,hotels restaurents around India
        </div>
        <form className="wow-form">
          <input type="text" name="keywords" placeholder="Search destination..." />
          <button type="submit" className="" name="find" value="tour">
            Find Tour
          </button>
        </form>
        {/* +++++++++++++++++ Icons Section +++++++++++++++++++++++ */}
        <div className="tourz-hom-ser">
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
                <img src="https://topindiatrips.com/assets/img/2.png" alt="" />
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
                <img src="https://topindiatrips.com/assets/img/31.png" alt="" />
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
                <img src="https://topindiatrips.com/assets/img/30.png" alt="" />
                Cars
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
                <img src="https://topindiatrips.com/assets/img/1.png" alt="" /> Hotel
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* ============ First Section =================== */}
      <div className="first-section">
        <div className="overlayer" />
        <div className="main-video">
          {/* <video src={require('../../../public/videos/india_banner.mp4')}  autoPlay muted loop/> */}
          {/* <video autoPlay muted loop style={{ width: "100%", height: "auto" }}>
      <source src="https://topindiatrips.com/assets/videos/india_banner.webm" type="video/webm" />
      <source src="https://topindiatrips.com/assets/videos/india_banner.mp4" type="video/mp4" />
      <source src="https://topindiatrips.com/assets/videos/india_banner.ogv" type="video/ogv" />
    </video> */}
          <video style={{ width: "100%", height: "auto" }} src="/videos/india_banner.mp4" autoPlay muted loop />
        </div>
      </div>
    </>
  )
}

export default VideoSection