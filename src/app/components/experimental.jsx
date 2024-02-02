"use client"
"use client"

import { useEffect, useState } from "react";
import logoLight from '../assets/logo-light.png';
import logoDark from '../assets/logo.png';

export default () => {

    const [clientWindowHeight, setClientWindowHeight] = useState("");
    const [logo, setLogo] = useState(logoLight);
    const [isScrolled, setIsScrolled] = useState(false);

    const [backgroundTransparency, setBackgroundTransparency] = useState(0);
    // const [padding, setPadding] = useState(30);
    const [boxShadow, setBoxShadow] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    },[]);

    const handleScroll = () => {
        setClientWindowHeight(window.scrollY);
        setIsScrolled(window.scrollY > 100);

        // Change logo based on scroll position
        setLogo(window.scrollY > 100 ? logoDark : logoLight);
    };

    useEffect(() => {
        let backgroundTransparencyVar = clientWindowHeight / 600;

        if (backgroundTransparencyVar < 1) {
            // let paddingVar =  - backgroundTransparencyVar * 2;
            let boxShadowVar = backgroundTransparencyVar * 0;
            setBackgroundTransparency(backgroundTransparencyVar);
            // setPadding(paddingVar);
            setBoxShadow(boxShadowVar);
        }
    }, [clientWindowHeight]);

    return (
        <>
            <div className="container-fluid" style={{
              background: isScrolled ? "#fff" : `rgba(255, 255, 255, ${backgroundTransparency})`,
            //   padding: `${padding}px 0px`,
                boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 0px px`,}}
            >
                
                <nav className={`nav container ${isScrolled ? 'scrolled' : ''}`}>
                    <div className="nav__data">
                        <a href="/" className="nav__logo">
                            <img src={logo} alt="Logo Light" width={20} height={20} />
                        </a>
                        <div className="nav__toggle" id="nav-toggle">
                            <i className="ri-menu-line nav__burger" />
                            <i className="ri-close-line nav__close" />
                        </div>
                    </div>
            
                    <div className="nav__menu" id="nav-menu">
                        <ul className="nav__list">
                            <li>
                                <a href="/" className={`nav__link ${isScrolled ? 'black-text' : ''}`}>
                                    Home
                                </a>
                            </li>
                        {/* ++++++++++++++++++++++++++ DoropDowns ================== */}
                        <li className="dropdown__item">
                        <div className={`nav__link ${isScrolled ? 'black-text' : ''}`}>Destination</div>
                        <ul className="dropdown__menu">
                            <li>
                            <a href="/DropdownTrips" className="dropdown__link">
                                Golden Triangle
                            </a>
                            </li>
                            <li>
                            <a href="/DropdownTrips" className="dropdown__link">
                                Rajasthan Tour Package
                            </a>
                            </li>
                            <li>
                            <a href="/DropdownTrips" className="dropdown__link">
                                Kerla
                            </a>
                            </li>
                            <li>
                            <a href="/DropdownTrips" className="dropdown__link">
                                Tamil Nadu
                            </a>
                            </li>
                            <li></li>
                            <li>
                            <a href="/DropdownTrips" className="dropdown__link">
                                Golden Triangle
                            </a>
                            </li>
                            <li>
                            <a href="/DropdownTrips" className="dropdown__link">
                                Rajasthan Tour Package
                            </a>
                            </li>
                            <li>
                            <a href="/DropdownTrips" className="dropdown__link">
                                Kerla
                            </a>
                            </li>
                            <li>
                            <a href="/DropdownTrips" className="dropdown__link">
                                Tamil Nadu
                            </a>
                            </li>
                            <li>
                            <a href="/DropdownTrips" className="dropdown__link">
                                Maharastra
                            </a>
                            </li>
                            <li>
                            <a href="/DropdownTrips" className="dropdown__link">
                                Uttarpradesh
                            </a>
                            </li>
                            <li>
                            <a href="/DropdownTrips" className="dropdown__link">
                                West Bengal
                            </a>
                            </li>
                        </ul>
                        </li>
                        {/*=============== DROPDOWN 1 ===============*/}
                        <li className="dropdown__item">
                        <div className={`nav__link ${isScrolled ? 'black-text' : ''}`}>Regions</div>
                        <ul className="dropdown__menu">
                            <li>
                            <a href="/DropdownTrips" className="dropdown__link">
                                North India
                            </a>
                            </li>
                            <li>
                            <a href="/DropdownTrips" className="dropdown__link">
                                South India
                            </a>
                            </li>
                            <li>
                            <a href="/DropdownTrips" className="dropdown__link">
                                East India
                            </a>
                            </li>
                            <li>
                            <a href="/DropdownTrips" className="dropdown__link">
                                Central India
                            </a>
                            </li>
                            <li>
                            <a href="/DropdownTrips" className="dropdown__link">
                                North East India
                            </a>
                            </li>
                            {/*=============== DROPDOWN SUBMENU ===============*/}
                            {/* <li class="dropdown__subitem">
                                <div class="dropdown__link">
                                    Reports <i class="ri-add-line dropdown__add"></i>
                                </div>

                                <ul class="dropdown__submenu">
                                    <li>
                                        <a href="#" class="dropdown__sublink">
                                        Documents
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" class="dropdown__sublink">
                                        Payments
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" class="dropdown__sublink">
                                        Refunds
                                        </a>
                                    </li>
                                </ul>
                            </li> */}
                        </ul>
                        </li>
                        {/* ================= Doropdown 3 ++++++============ */}
                        <li className="dropdown__item">
                        <div className={`nav__link ${isScrolled ? 'black-text' : ''}`}>Asian Countries</div>
                        <ul className="dropdown__menu">
                            <li>
                            <a href="/DropdownTrips" className="dropdown__link">
                                Bhutan Tour Package
                            </a>
                            </li>
                            <li>
                            <a href="/DropdownTrips" className="dropdown__link">
                                Rajasthan Tour Package
                            </a>
                            </li>
                            <li>
                            <a href="/DropdownTrips" className="dropdown__link">
                                Tibet Tour Package
                            </a>
                            </li>
                            <li>
                            <a href="/DropdownTrips" className="dropdown__link">
                                Dubai Tour Package
                            </a>
                            </li>
                            <li>
                            <a href="/DropdownTrips" className="dropdown__link">
                                Maldives Tour Package
                            </a>
                            </li>
                        </ul>
                        </li>
                        {/*=============== DROPDOWN 2 ===============*/}
                        <li className="dropdown__item">
                        <div className={`nav__link ${isScrolled ? 'black-text' : ''}`}>Tour By Intrest</div>
                        <ul className="dropdown__menu">
                            <li>
                            <a href="/DropdownTrips" className="dropdown__link">
                                Yoga and Meditation Tour
                            </a>
                            </li>
                            <li>
                            <a href="/DropdownTrips" className="dropdown__link">
                                Honeymoon Toor
                            </a>
                            </li>
                            <li>
                            <a href="/DropdownTrips" className="dropdown__link">
                                Beach Tour
                            </a>
                            </li>
                            <li>
                            <a href="/DropdownTrips" className="dropdown__link">
                                Pilgrimage Tour
                            </a>
                            </li>
                            <li>
                            <a href="/DropdownTrips" className="dropdown__link">
                                Adventure Tour
                            </a>
                            </li>
                        </ul>
                        </li>
                        {/* +++++++++++++ Dropdown ++++++++++++++ */}
                        <li className="dropdown__item">
                        <div className={`nav__link ${isScrolled ? 'black-text' : ''}`}>Luxary Trains</div>
                        <ul className="dropdown__menu">
                            <li>
                            <a href="/DropdownTrips" className="dropdown__link">
                                Place On Wheel
                            </a>
                            </li>
                            <li>
                            <a href="/DropdownTrips" className="dropdown__link">
                                Deccan Odyssey
                            </a>
                            </li>
                            <li>
                            <a href="/DropdownTrips" className="dropdown__link">
                                Golden Chariot
                            </a>
                            </li>
                        </ul>
                        </li>
                        {/* +++++++++++++ Dropdown ++++++++++++++ */}
                        <li className="dropdown__item">
                        <div className={`nav__link ${isScrolled ? 'black-text' : ''}`}>Weekend Tour</div>
                        <ul className="dropdown__menu">
                            <li>
                            <a href="/DropdownTrips" className="dropdown__link">
                                Delhi
                            </a>
                            </li>
                            <li>
                            <a href="/DropdownTrips" className="dropdown__link">
                                Agra
                            </a>
                            </li>
                            <li>
                            <a href="/DropdownTrips" className="dropdown__link">
                                Mumbai
                            </a>
                            </li>
                            <li>
                            <a href="/DropdownTrips" className="dropdown__link">
                                Pushkar
                            </a>
                            </li>
                            <li>
                            <a href="/DropdownTrips" className="dropdown__link">
                                Varanasi
                            </a>
                            </li>
                            <li>
                            <a href="/DropdownTrips" className="dropdown__link">
                                Goa
                            </a>
                            </li>
                        </ul>
                        </li>
                    </ul>
                </div>
            </nav>
            
            </div>
        
        </>
    );
}