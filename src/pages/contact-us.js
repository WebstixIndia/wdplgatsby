import React from "react"
import Header from "../components/Header/Header"
import ContactUs from "../components/ContactUs/ContactUs"
import Footer from "../components/Footer/Footer"
import { Helmet } from "react-helmet"
import contactbg from "../images/polyg.svg"


export default function contact() {
  return (
    <>
    <div id="Maincontact" class="clsMainContactbg" style={{backgroundImage: `url(${contactbg})`,}}> 
         <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Contact Us - wdpl.in</title>
          <link rel="canonical" href="https://wdpl.gatsbyjs.io/" />
        </Helmet>
      </div>
      <Header />
      <div className="clsContactSinglePage">
        <ContactUs />
      </div>
      <Footer />
      </div>
    </>
  )
}
