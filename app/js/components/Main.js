import React from 'react';
import RouteLink from './RouteLink';

export default React.createClass({
  render() {
    return (
      <div className='mainContainer'>
        <header className='topbar'>
          <nav className='navbar navbar-inverse navbar-toggleable' role='navigation'>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav" aria-controls="navbarhiddencontent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* // NOTE: Use this for navbar-toggler-right until fixed */}
            {/* <span className='nav-text'>&nbsp;</span> */}
            <div id='nav' className='collapse navbar-collapse'>
              <ul className='nav'>
                <li className='nav-item'>
                  <RouteLink to='/' className='nav-link active'>Home</RouteLink>
                </li>
                <li className='nav-item'>
                  <RouteLink to='about' className='nav-link'>About</RouteLink>
                </li>
                <li className='nav-item'>
                  <RouteLink to='services' className='nav-link'>Services</RouteLink>
                </li>
                <li className='nav-item'>
                  <RouteLink to='contact' className='nav-link'>Contact</RouteLink>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <main className='main'>
          {this.props.children}
        </main>
      </div>
    )
  }
})
