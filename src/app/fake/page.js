"use client"

import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";


// Assuming this is the component that renders the testimonials
const Testimonial = ({ text, author }) => (
  <div className="testimonial-caption">
    <i className="ti-quote-right" />
    <p>{text}</p>
    <div className="testimonial-author">
      <img src="#" className="img-responsive img-circle" alt="" />
      <h4>{author}</h4>
    </div>
  </div>
);

// BootstrapCarousel component with testimonials
export default function BootstrapCarousel() {
  const [index, setIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const testimonials = [
    {
      text:
        `This tour was excellent, but mainly because of our tour guide,
        Ravish, he was amazing. My husband and I only had one day in
        Udaipur, and Ravish made sure we were able to see everything in
        a timely manner. He arrived early, explained everything
        thoroughly, knew all the best spots for pictures and recommended
        great restaurants. We even had time in the evening to go see a
        local folk show. Tickets were difficult to get since it was last
        minute, but Ravish called up some connections and made it
        possible for us to get tickets. He went above and beyond his
        duty as our tour guide. Thanks Ravish for making our trip to
        Udaipur so memorable`,
      author: "Crish Willson",
    },
    {
      text:
        `    The tour was exactly as advertised. The driver showed up on time
        to pick us up at the hotel. To us to the high speed rail station
        in New Delhi and ensured we were properly seated on the train.
        Took pictures of us to sent it to the driver who was waiting for
        us at Agra Station. The tour guide was very knowledgeable and
        provided a vast amount of history behind the sites we visited.
        The buffet lunch was way more extravagant than expected.`,
      author: "Valentina",
    },
    {
      text:
        `Loved it. Went for the Heritage experience and i was very
        pleased with the overall tour. The guide, Mr.Ravish, was not
        only nice and helpful, but also extremely knowledgeable of all
        the details about the sites we visited. This was indeed a
        private tour, which seems costly for one when you look at the
        price - but the experience was surely worth it. i would
        definitely use their services again.`,
      author: "Crish Willson",
    },
    {
      text:
        `I took a tour of the Somnathpur temple on a free day in
        Bangalore and enjoyed escaping the city and seeing more of the
        country. Satish customized the tour on the fly based on my
        interests, stopping at the local mango markets to try different
        varieties as well as a side trip to see the 4th largest banyan
        tree in the world. I would definitely recommend using them.`,
      author: "Juan Pablo",
    },
    {
      text:
        ` This tour was excellent, but mainly because of our tour guide,
        Ravish, he was amazing. My husband and I only had one day in
        Udaipur, and Ravish made sure we were able to see everything in
        a timely manner. He arrived early, explained everything
        thoroughly, knew all the best spots for pictures and recommended
        great restaurants. We even had time in the evening to go see a
        local folk show. Tickets were difficult to get since it was last
        minute, but Ravish called up some connections and made it
        possible for us to get tickets. He went above and beyond his
        duty as our tour guide. Thanks Ravish for making our trip to
        Udaipur so memorable`,
      author: "Valentina",
    },
    {
      text:
        `This tour was excellent, but mainly because of our tour guide,
        Ravish, he was amazing. My husband and I only had one day in
        Udaipur, and Ravish made sure we were able to see everything in
        a timely manner. He arrived early, explained everything
        thoroughly, knew all the best spots for pictures and recommended
        great restaurants. We even had time in the evening to go see a
        local folk show. Tickets were difficult to get since it was last
        minute, but Ravish called up some connections and made it
        possible for us to get tickets. He went above and beyond his
        duty as our tour guide. Thanks Ravish for making our trip to
        Udaipur so memorable`,
      author: "Crish Willson",
    },
    
  ];

  const calculateTestimonialsPerSlide = () => {
    if (windowWidth <= 576) {
      return 1; // Show 1 testimonial per slide on small screens (less than or equal to 576px)
    } else if (windowWidth <= 988) {
      return 1; // Show 1 testimonials per slide on medium screens (between 577px and 768px)
    } else {
      return 2; // Show 2 testimonials per slide on large screens (greater than 768px)
    }
  };

  const testimonialsPerSlide = calculateTestimonialsPerSlide();

  // Calculate the number of slides needed
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerSlide);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
{/* <video src={require('../../')} /> */}
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  if (typeof window === "undefined") {
    // Server-side rendering
    return null;
  }

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      controls={false}
      indicators={false}
    >
      {[...Array(totalSlides)].map((_, slideIndex) => (
        <Carousel.Item key={slideIndex} interval={2000}>
          <div className="d-flex justify-content-around testimonial-slide">
            {testimonials
              .slice(
                slideIndex * testimonialsPerSlide,
                (slideIndex + 1) * testimonialsPerSlide
              )
              .map((testimonial, idx) => (
                <div key={idx} className="testimonial-container">
                  <Testimonial {...testimonial} />
                </div>
              ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
   
    



  );
}
