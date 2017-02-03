import React from 'react';
import { IndexLink, Link } from 'react-router';

const active = {
  backgroundColor: '#c3c3c3',
  color: '#fff',
}

export const Navigation = () => (
  <nav className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <IndexLink className="navbar-brand" activeStyle={active} to="/">Home</IndexLink>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/one" activeStyle={active}>One</Link></li>
          <li><Link to="/two" activeStyle={active}>Two</Link></li>
          {/* <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
            <ul className="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" className="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </li> */}
        </ul>
      </div>
    </div>
  </nav>
)