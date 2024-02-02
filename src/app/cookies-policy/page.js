import React from 'react'
import Link from 'next/link';
const page = () => {
  return (
   <>
    <div
    className="page-title image-title"
    style={{ backgroundImage: "url(https://topindiatrips.com/assets/img/taj.jpg)" }}
  >
    <div className="container">
      <div className="page-title-wrap">
        <h2 style={{ fontWeight: "bold" }}>Cookies Policy</h2>
        <p>
          <a href="#" className="theme-cl">
            Home
          </a>{" "}
          |{" "}
          <span>
            <em>Cookies Policy</em>
          </span>
        </p>
      </div>
    </div>
  </div>

  <section style={{marginTop:'45px', paddingTop:'15px'}}>
  <div className="container">
    <div className="row">
      <div className="col-md-12 col-sm-12">
        <p className="text-justify">
          {" "}
          A cookie is a piece of software code that an internet web site sends
          to your browser when you access information at that site. A cookie is
          stored as a simple text file on your computer or mobile device by a
          website’s server and only that server will be able to retrieve or read
          the contents of that cookie. Cookies let you navigate between pages
          efficiently as they store your preferences, and generally improve your
          experience of a website. propdam.com use following types of cookies to
          enhance your experience and interactivity :
        </p>
        <ol>
          <li>
            <p>
              Analytics cookies for anonymously remembering your computer or
              mobile device when you visit our website to keep track of browsing
              patterns.
            </p>
          </li>
          <li>
            <p>
              Service cookies for helping us to make our website work
              efficiently, remembering your registration and login details,
              settings preferences, and keeping track of the pages you view.
            </p>
          </li>
          <li>
            <p>
              Non-persistent cookies a.k.a per-session cookies. Per-session
              cookies serve technical purposes of providing seamless navigation.
              These cookies do not collect personal information on users and
              they are deleted as soon as you leave our website. The cookies do
              not permanently record data and they are not stored on your
              computer’s hard drive. The cookies are stored in memory and are
              only available during an active browser session. Again, once you
              close your browser, the cookie disappears.
            </p>
          </li>
        </ol>
        <p />
        <p className="text-justify">
          You may note additionally that when you visit propdam.com, you may be
          required to accept cookies. If you choose to have your browser refuse
          cookies, it is possible that propdam.com may not function properly.
        </p>
      </div>
    </div>
  </div>
</section>

   </>
  )
}

export default page