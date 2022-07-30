// Contact.js

import React from 'react'

export const Contact = () => {
  return (
	<section id="section-contact" className="page-section topmargin-lg">

			<div className="heading-block title-center">
				<h2>GET IN TOUCH </h2>
				<span>Still have Questions? Contact Jude with the Form below or via Social Media.</span>
			</div>

			<div className="container clearfix">

				
				<div className="col_full">

					<div className="fancy-title title-dotted-border">
						<h3>Send us an Email</h3>
					</div>

					<div className="form-widget">

						<div className="form-result"></div>

						<form className="nobottommargin" id="template-contactform" name="template-contactform" action="#" method="post">

						<div className="form-process"></div>

						<div className="col_one_third">
							<label htmlFor="template-contactform-name">Name <small>*</small></label>
							<input required type="text" id="template-contactform-name" name="template-contactform-name" defaultValue="" className="sm-form-control required" />
						</div>

						<div className="col_one_third">
							<label htmlFor="template-contactform-email">Email <small>*</small></label>
							<input required type="email" id="template-contactform-email" name="template-contactform-email" defaultValue="" className="required email sm-form-control" />
						</div>

						<div className="col_one_third col_last">
							<label htmlFor="template-contactform-phone">Phone</label>
							<input required type="text" id="template-contactform-phone" name="template-contactform-phone" defaultValue="" className="sm-form-control" />
						</div>

						<div className="clear"></div>

						<div className="col_two_third">
							<label htmlFor="template-contactform-subject">Subject <small>*</small></label>
							<input required type="text" id="template-contactform-subject" name="subject" defaultValue="" className="required sm-form-control" />
						</div>

						<div className="col_one_third col_last">
							<label htmlFor="template-contactform-service">Services</label>
							<select id="template-contactform-service" name="template-contactform-service" className="sm-form-control">
								<option defaultValue="">-- Select One --</option>
								<option defaultValue="Wordpress">Wordpress</option>
								<option defaultValue="PHP / MySQL">PHP / MySQL</option>
								<option defaultValue="HTML5 / CSS3">HTML5 / CSS3</option>
								<option defaultValue="Graphic Design">Graphic Design</option>
							</select>
						</div>

						<div className="clear"></div>

						<div className="col_full">
							<label htmlFor="template-contactform-message">Message <small>*</small></label>
							<textarea className="required sm-form-control" id="template-contactform-message" name="template-contactform-message" rows="6" cols="30"></textarea>
						</div>

						<div className="col_full hidden">
							<input required type="text" id="template-contactform-botcheck" name="template-contactform-botcheck" defaultValue="" className="sm-form-control" />
						</div>

						<div className="col_full">
							<button className="button button-3d nomargin" type="submit" id="template-contactform-submit" name="template-contactform-submit" defaultValue="submit">Send Message</button>
						</div>

						<input required type="hidden" name="prefix" defaultValue="template-contactform-" />

					</form>

				</div>


				</div>

				


			</div>

		</section>
  )
}

export default Contact