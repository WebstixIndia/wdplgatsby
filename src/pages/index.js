import React from "react"
import Header from "../components/Header/Header.js"
import { Helmet } from "react-helmet"
import Carousel from "../components/Carousel/Carousel.js"
// // // import AboutUsOne from "../components/AboutUs/AboutOne"
import AboutUsTwo from "../components/AboutUs/AboutTwo"
import ContactUs from "../components/ContactUs/ContactUs"
import Footer from "../components/Footer/Footer.js"
import Homegallery from "../components/HomeGallery/Homegallery.js"
import contactbg from "../images/chennaibg.png"

export default function index() {
  return (
    <>
     <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Webstix Design Private Limited - wdpl.in</title>
          <link rel="canonical" href="https://wdpl.gatsbyjs.io/" />
        </Helmet>
      </div>
      <Header />
      <div clasName="clsHomeContainer">
        <Carousel />
         <div class="clsAboutUsTwo">
        <AboutUsTwo />
        </div>
       
  
        <div class="clsHomeGallery">
        <Homegallery />
        </div>


        <div class="clsContactbg"  >   
              <div class="clshomecontact pb-[100px]" style={{backgroundImage: `url(${contactbg})`,backgroundSize:`contain`, backgroundRepeat: `no-repeat`,backgroundPosition: `bottom 49px center`,}}>
               <ContactUs />
              </div>
       </div>
        
      </div>
      <div>
      <Footer />
      </div>
    </>
  )
}
