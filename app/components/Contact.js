import React from 'react'

export default React.createClass({
	render() {
		return (
			<section>
				<div className='container'>
					<h2>Contact</h2>
					<form className='container'>
						<div className='form-group row'>
							<input type='text' className='form-control col-xs-12 col-md col-lg-3 offset-lg-3' id='firstname' aria-describedby='first name' placeholder='First Name'/>
							<input type='text' className='form-control col-xs-12 col-md col-lg-3' id='lastname' aria-describedby='last name' placeholder='Last Name'/>
						</div>
						<div className='form-group row'>
							<input type='tel' className='form-control col-xs-12 col-md col-lg-3 offset-lg-3' id='phonenumber' aria-describedby='phone number' placeholder='Phone Number'/>
							<input type='email' className='form-control col-xs-12 col-md col-lg-3' id='email' aria-describedby='email' placeholder='Email'/>
						</div>
						<div className='form-group row'>
							<input type='text' className='form-control col-xs-12 col-lg-6 offset-lg-3' id='title' aria-describedby='title' placeholder='Title'/>
						</div>
						<div className='form-group row'>
							<textarea className="form-control col-xs-12 col-lg-6 offset-lg-3" id="textarea" placeholder='Write message...' rows="5"></textarea>
						</div>
						<div className='row'>
							<button type="submit" className="btn btn-success col col-lg-6 offset-lg-3">Submit</button>
						</div>
					</form>
				</div>
			</section>
		)
	}
})
