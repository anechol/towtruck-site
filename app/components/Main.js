import React from 'react';

export default React.createClass({
  render() {
    return (
      <div>
        <header>
					<a data-toggle='collapse' href='#nav'><i className="fa fa-bars fa-3x float-right" aria-hidden="true"></i></a>
          <nav id='nav' className='collapse'>
            <ul className='nav justify-content-end'>
              <li className='nav-item'>
                <a className='nav-link active'>Home</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link active'>About</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link active'>Services</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link active'>Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
})
