// Banner.js

import React from 'react'
import {Helmet} from "react-helmet";

export const Banner = () => {
  return (
    <section id="" className="slider-element slider-parallax full-screen with-header swiper_wrapper clearfix bg-black">
    <div className="swiper-container swiper-parent">
      <div className="swiper-wrapper">
        <div className="swiper-slide dark">
          <div className="container clearfix">
            <div className="slider-caption slider-caption-center">
              <h2 data-animate="fadeInUp"><div className="text">
                Hello, I'm <span className="highlight">Judeokagu</span>.
                I'm a full-stack web developer.
               
              </div></h2>
              
              <a href="/#" data-scrollto="#content" className="button button-rounded button-reveal button-large button-border tright"><i className="icon-line-arrow-down"></i><span>View My Work</span></a>
            </div>
          </div>
        </div>
       
      
      </div>
      </div>
              <a href="/#" data-scrollto="#content" data-offset="100" className="dark one-page-arrow"><i className="icon-angle-down infinite animated fadeInDown"></i></a>

             
              <Helmet>
                
        <script  src="js/animation/script.js"></script>
    </Helmet>

      </section>
      
  )
}

export default Banner