"use client"
import { useState } from 'react';


function Topbar() {
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   const handleToggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
   };
   return (
      <>
         <div className='container-fluid topbar'>
            <div className='row'>
               <div className='container'>
                  <div className='row'>
                     <div className='col-md-12 pull-right'>
                        <ul>
                           <li>
                              <div>
                                 <a href="https://api.whatsapp.com/send/?phone=919355336687&amp;text=Hi+Top+India+Trips">
                                    <img src="https://topindiatrips.com/assets/img/whatsapp.svg" alt="WhatsApp" className="img" />
                                 </a>

                                 <a className="hidden-xs hidden-sm"
                                    href="https://api.whatsapp.com/send/?phone=919355336687&amp;text=Hi+Top+India+Trips">+91
                                    93553
                                    36687</a>
                              </div>

                           </li>
                           <li>|</li>
                           <li>
                              <div>
                                 <a href="mailto:info@topindiatrips.com">
                                    <img src="https://topindiatrips.com/assets/img/email.svg" alt="Email" className="img" />
                                 </a>
                                 <a className="hidden-xs hidden-sm"
                                    href="mailto:info@topindiatrips.com">info@topindiatrips.com</a>
                              </div>

                           </li>
                           <li>|</li>
                           <li>
                              <div className={`dropdown ${isDropdownOpen ? 'select-clicked' : ''}`}>
                                 <div className="select" onClick={handleToggleDropdown}>
                                    <span className="selected">English</span>
                                    <div className={`caret ${isDropdownOpen ? 'caret-rotate' : ''}`}></div>
                                 </div>
                                 <ul className={`menu ${isDropdownOpen ? 'menu-open' : ''}`}>
                                    <li>French</li>
                                    <li>German</li>
                                    <li className="active">English</li>
                                    <li>Korean</li>
                                 </ul>
                              </div>

                           </li>
                        </ul>
                        <div className="clearfix"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Topbar