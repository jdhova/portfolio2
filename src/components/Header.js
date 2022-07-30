// Header.js

import React from 'react'

const Header = () => {
  return (
	<header id="header" className="full-header">

			<div id="header-wrap">

				<div className="container clearfix">

					<div id="primary-menu-trigger"><i className="icon-reorder"></i></div>

					<div id="logo" className='one-page-menu' data-easing="easeInOutExpo" data-speed="1500">
						<a href="/#" data-href="#home" class="standard-logo" data-dark-logo="images/logo.png"><img src="images/logo.png" alt="Logo" /></a>
						<a href="/#" data-href="#home" class="retina-logo" data-dark-logo="images/logo.png"><img src="images/logo.png" alt="Logo" /></a>
					</div>
					

					
					<nav id="primary-menu">

					<ul className="one-page-menu" data-easing="easeInOutExpo" data-speed="1500">
							{/* <li><a href="/#" data-href="#home"><div>Home</div></a></li> */}
							<li><a href="/#" data-href="#section-about"><div>About</div></a></li>
							<li><a href="/#" data-href="#section-portfolio"><div>Portfolio</div></a></li>
							<li><a href="/#" data-href="#section-contact"><div>Contact</div></a></li>
						</ul>

					

					</nav>

				</div>

			</div>

		</header>
  )
}
export default Header