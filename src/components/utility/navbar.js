import React from 'react';
import {Link} from 'react-router-dom';

class navbar extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <a className="navbar-brand" href="/">Power Africa</a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link active">Home <span className="sr-only">(current)</span></Link>
            <Link to="/objectives" className="nav-item nav-link">Objectives</Link>
            <Link to="/baseline" className="nav-item nav-link">baseline</Link>
            <Link to="/yearOne" className="nav-item nav-link disabled">Year One</Link>
            <Link to="/yearTwo" className="nav-item nav-link disabled">Year Two</Link>
            <Link to="/participants" className="nav-item nav-link disabled">Participants</Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default navbar;
