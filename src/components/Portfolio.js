// Portfolio.js

import React from 'react'

export const Portfolio = () => {
  return (
	<section id="section-portfolio" className="page-section topmargin-lg bg--secondary">

					<div className="heading-block center">
						<h2>My Projects</h2>
						<span>Check Out my mind blowing projects.</span>
					</div>

          <div className="container clearfix">

						
						<ul id="portfolio-filter" className="portfolio-filter clearfix" data-container="#portfolio">

							<li className="activeFilter"><a href="/#" data-filter="*">Show All</a></li>
							<li><a href="/#" data-filter=".node">Node Js</a></li>
							<li><a href="/#" data-filter=".react">REACT-JS</a></li>
							<li><a href="/#" data-filter=".js">JAVASCRIPT</a></li>

						</ul>

						

						<div className="clear"></div>

					
						<div id="portfolio" className="portfolio grid-container portfolio-nomargin clearfix">

							<article className="portfolio-item react pf-icons">
								<div className="portfolio-image">
									<a href="/#">
										<img src="images/portfolio/thumb-1.jpg" alt="Open Imagination" />
									</a>
									<div className="portfolio-overlay">
										<a href="images/portfolio/react1.png" className="left-icon" data-lightbox="image"><i className="icon-line-eye"></i></a>
										<a href="/#" className="right-icon"><i className="icon-line-ellipsis"></i></a>
									</div>
								</div>
								<div className="portfolio-desc">
									<h3><a href="/#">Gifts Delight</a></h3>
									<span><a href="/#">
										React JS</a></span>
								</div>
							</article>

							

							<article className="portfolio-item react node pf-icons">
								<div className="portfolio-image">
									<a href="/#">
										<img src="images/portfolio/thumb-2.jpg" alt="Open Imagination" />
									</a>
									<div className="portfolio-overlay">
										<a href="images/portfolio/thumb-2.jpg" className="left-icon" data-lightbox="image"><i className="icon-line-eye"></i></a>
										<a href="/#" className="right-icon"><i className="icon-line-ellipsis"></i></a>
									</div>
								</div>
								<div className="portfolio-desc">
									<h3><a href="/#">Flexx Recruitment
										</a></h3>
									<span><a href="/#">React JS & Firebase </a>, <a href="/#">Node</a></span>
								</div>
							</article>

								

							<article className="portfolio-item js pf-icons">
								<div className="portfolio-image">
									<a href="/#">
										<img src="images/portfolio/thumb-3.jpg" alt="Open Imagination" />
									</a>
									<div className="portfolio-overlay">
										<a href="images/portfolio/thumb-3.jpg" className="left-icon" data-lightbox="image"><i className="icon-line-eye"></i></a>
										<a href="/#" className="right-icon"><i className="icon-line-ellipsis"></i></a>
									</div>
								</div>
								<div className="portfolio-desc">
									<h3><a href="/#">Data Structures
										
										</a></h3>
										<span><a href="/#">JavaScript</a></span>
								</div>
							</article>

	

							<article className="portfolio-item js pf-icons">
								<div className="portfolio-image">
									<a href="/#">
										<img src="images/portfolio/thumb-4.jpg" alt="Open Imagination" />
									</a>
									<div className="portfolio-overlay">
										<a href="images/portfolio/thumb-4.jpg" className="left-icon" data-lightbox="image"><i className="icon-line-eye"></i></a>
										<a href="/#" className="right-icon"><i className="icon-line-ellipsis"></i></a>
									</div>
								</div>
								<div className="portfolio-desc">
									<h3><a href="/#">JS Maths Game
										
										
										</a></h3>
									<span><a href="/#">JavaScript</a></span>
								</div>
							</article>
	

							
							<article className="portfolio-item js pf-icons">
								<div className="portfolio-image">
									<a href="/#">
										<img src="images/portfolio/thumb-7.jpg" alt="Open Imagination" />
									</a>
									<div className="portfolio-overlay">
										<a href="images/portfolio/thumb-7.jpg" className="left-icon" data-lightbox="image"><i className="icon-line-eye"></i></a>
										<a href="/#" className="right-icon"><i className="icon-line-ellipsis"></i></a>
									</div>
								</div>
								<div className="portfolio-desc">
									<h3><a href="/#">Type Script Maths Game
										
										</a></h3>
									<span><a href="/#">JavaScript </a></span>
								</div>
							</article>
							
							
							<article className="portfolio-item js pf-icons">
								<div className="portfolio-image">
									<a href="/#">
										<img src="images/portfolio/thumb-8.jpg" alt="Open Imagination" />
									</a>
									<div className="portfolio-overlay">
										<a href="images/portfolio/thumb-8.jpg" className="left-icon" data-lightbox="image"><i className="icon-line-eye"></i></a>
										<a href="/#" className="right-icon"><i className="icon-line-ellipsis"></i></a>
									</div>
								</div>
								<div className="portfolio-desc">
									<h3><a href="/#">Music Player
										
										
										</a></h3>
										<span><a href="/#">JavaScript</a></span>
								</div>
							</article>
							
						</div>


					</div>

				</section>
  )
}

export default Portfolio