import React, { Component } from 'react'


export class NavBar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Top-Headlines</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/general">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/business">Business</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/entertainment">Entertainment</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/health">Health</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/science">Science</a></li>
                <li className="nav-item">
                  <a className="nav-link" href="/sports">Sports</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/technology">Technology</a>
                </li>
                <li className="nav-item dropdown d-flex"style={{marginRight:"10px"}}>
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Country
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown" >
                    <li><a className="dropdown-item" href="/US">US</a></li>
                    <li><a className="dropdown-item" href="/Russia">Russia</a></li>
                    <li><a className="dropdown-item" href="/Australia">Australia</a></li>
                  </ul>
                </li>
              </ul>
              
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar
