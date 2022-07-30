// About.js

import React from 'react'

export const About = () => {
  return (
    <section id="section-about" className="page-section">

    <div className="container clearfix">

      <div className="heading-block center">
        <h1>About Jude</h1>
      </div>
      <div className="container clearfix">

      <div className="col_one_fourth">
        <div className="feature-box fbox-center fbox-effect nobottomborder" data-animate="fadeIn">
          <div className="fbox-icon">
            <a href="/#"><i className="icon-line2-speedometer"></i></a>
          </div>
          <h3>Fast</h3>
          <p>Fast and responsive web apps.</p>
        </div>
      </div>

      <div className="col_one_fourth">
        <div className="feature-box fbox-center fbox-effect nobottomborder" data-animate="fadeIn" data-delay="200">
          <div className="fbox-icon">
            <a href="/#"><i className="icon-mobile-alt"></i></a>
          </div>
          <h3>Responsive</h3>
          <p>My web apps are fully Responsive on all devicces.</p>
        </div>
      </div>

      <div className="col_one_fourth ">
        <div className="feature-box fbox-center fbox-effect nobottomborder" data-animate="fadeIn" data-delay="400">
          <div className="fbox-icon">
            <a href="/#"><i className="icon-lightbulb1"></i></a>
          </div>
          <h3>innovative</h3>
          <p>Bringing ideas to life with my ideas and Innovation.</p>
        </div>
      </div>

      

      <div className="col_one_fourth col_last">
        <div className="feature-box fbox-center fbox-effect nobottomborder" data-animate="fadeIn" data-delay="600">
          <div className="fbox-icon">
            <a href="/#"><i className="icon-line2-rocket"></i></a>
          </div>
          <h3>Deployment</h3>
          <p>I can also deploy and manage web apps.</p>
        </div>
      </div>

      <div className="clear"></div>



  
      
        <div className="row">
          <div className="col-lg-6 bottommargin">

            <div className="team team-list clearfix">
              <div className="team-image">
                <img src="images/me.png" alt="Me" />
              </div>
              <div className="team-desc">
                <div className="team-title"><h3>Who's Jude OKAGU?</h3></div>
                <div className="team-content">I'm a Full Stack Developer based in Halifax NS. <br></br>
                  
                  I am a natural prblem solver and I am extreemly passionate about Software development and Tech in general, My Master Thesis also focused on Cloud computing.</div>
               
              </div>
            </div>

          </div>

          <div className="col-lg-6 bottommargin">


              <div className="fancy-title title-border">
                <h3>My Skiills</h3>
              </div>

              <ul className="skills">
                <li data-percent="90">
                  <span> React.js</span>
                  <div className="progress skills-animated" style={{width : '90%'}}>
                    <div className="progress-percent"><div className="counter counter-inherit counter-instant"><span data-from="0" data-to="90" data-refresh-interval="30" data-speed="1000">90</span>%</div></div>
                  </div>
                </li>
                <li data-percent="90">
                  <span>JS</span>
                  <div className="progress skills-animated" style={{width: '90%'}}>
                    <div className="progress-percent"><div className="counter counter-inherit counter-instant"><span data-from="0" data-to="90" data-refresh-interval="30" data-speed="1000">90</span>%</div></div>
                  </div>
                </li>
                <li data-percent="85">
                  <span>Firebase</span>
                  <div className="progress skills-animated" style={{width: '85%'}}>
                    <div className="progress-percent"><div className="counter counter-inherit counter-instant"><span data-from="0" data-to="85" data-refresh-interval="30" data-speed="1000">85</span>%</div></div>
                  </div>
                </li>
                <li data-percent="85">
                  <span>Full stack dev</span>
                  <div className="progress skills-animated" style={{width: '85%'}}>
                    <div className="progress-percent"><div className="counter counter-inherit counter-instant"><span data-from="0" data-to="85" data-refresh-interval="30" data-speed="1000">85</span>%</div></div>
                  </div>
                </li>
                <li data-percent="85">
                  <span>Node.js</span>
                  <div className="progress skills-animated" style={{width: '85%'}}>
                    <div className="progress-percent"><div className="counter counter-inherit counter-instant"><span data-from="0" data-to="85" data-refresh-interval="30" data-speed="1000">85</span>%</div></div>
                  </div>
                </li>
                <li data-percent="85">
                  <span>AWS</span>
                  <div className="progress skills-animated" style={{width: '85%'}}>
                    <div className="progress-percent"><div className="counter counter-inherit counter-instant"><span data-from="0" data-to="85" data-refresh-interval="30" data-speed="1000">85</span>%</div></div>
                  </div>
                </li>
                <li data-percent="80">
                  <span>HTML</span>
                  <div className="progress skills-animated" style={{width: '80%'}}>
                    <div className="progress-percent"><div className="counter counter-inherit counter-instant"><span data-from="0" data-to="80" data-refresh-interval="30" data-speed="1000">80</span>%</div></div>
                  </div>
                </li>
                <li data-percent="80">
                  <span>CSS </span>
                  <div className="progress skills-animated" style={{width: '80%'}}>
                    <div className="progress-percent"><div className="counter counter-inherit counter-instant"><span data-from="0" data-to="80" data-refresh-interval="30" data-speed="1000">80</span>%</div></div>
                  </div>
                </li>
                <li data-percent="80">
                  <span>UX/UI</span>
                  <div className="progress skills-animated" style={{width: '80%'}}>
                    <div className="progress-percent"><div className="counter counter-inherit counter-instant"><span data-from="0" data-to="80" data-refresh-interval="30" data-speed="1000">80</span>%</div></div>
                  </div>
                </li>
              </ul>

         

          </div>

          <div className="w-100"></div>

          

      </div>
</div>







    </div>

    

  </section>
  )
}

export default  About; 
