import React from 'react';
import NavLink from './NavLink';

export default React.createClass({
  render() {
    return (
      <div>
        <header>
          <nav className='navbar navbar-inverse bg-inverse' role='navigation'>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav" aria-controls="navbarhiddencontent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div id='nav' className='container collapse navbar-collapse'>
              <ul className='nav text-center row'>
                <li className='nav-item col'>
                  <NavLink to='/' className='nav-link active'>Home</NavLink>
                </li>
                <li className='nav-item col'>
                  <NavLink to='about' className='nav-link'>About</NavLink>
                </li>
                <li className='nav-item col'>
                  <NavLink to='services' className='nav-link'>Services</NavLink>
                </li>
                <li className='nav-item col'>
                  <NavLink to='contact' className='nav-link'>Contact</NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
})
