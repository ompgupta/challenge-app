import React from 'react'
const Header = ()=>{
    return (
        <>
     <nav className="navbar navbar-expand-lg navbar-light container">
  <a className="navbar-brand font-weight-bold" href="#">YourChallenge</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link act" href="#">Product</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Download</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
    </ul>
  </div>
</nav>

        </>
    )
}
export default Header;