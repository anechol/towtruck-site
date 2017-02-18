import React from 'react';
import RouteLink from './RouteLink';
import main from '../styles/mainStyle';

export default React.createClass({
  render() {
    return (
      <div style={main.body}>
        <header style={main.header}>
          <nav className='container navbar navbar-inverse navbar-toggleable-sm' role='navigation'>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav" aria-controls="navbarhiddencontent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
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
        <main style={main.main}>
          {this.props.children}
        </main>
      </div>
    )
  }
})
