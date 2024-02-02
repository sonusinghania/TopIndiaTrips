import React from 'react'
import TripList from '../components/TripList'
import taj from '../../app/assets/taj.jpg'
const page = () => {
  console.log("Type of", typeof taj, taj);
  let ta = taj.src;
  return (
   <>
     {/* ============================== Main section ========================================= */}
     <section
        className="page-title-banner"
        style={{background: `url("${ta}")`, backgroundPosition:`top`,height: '370px' }}
      >
    <div className="container">
      <div className="row">
        <div className="tr-list-detail">
          <div className="tr-list-info">
            <h4>Best Tour Package</h4>
            <p title="Tour Category">We found 57 tours.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <TripList/>
</>
  )
}

export default page