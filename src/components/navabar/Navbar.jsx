import React from 'react'
import { IMAGES } from '../../constants'
import { Link } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light color" style={{ padding: "15px 30px" }}>
      <a className="navbar-brand" href="/">
        <img src={IMAGES.Socimo} alt="Socimo" width="30" height="30" />
      </a>
      <a className="cmpname" href="/">𝕊𝕠𝕔𝕚𝕞𝕠</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div>
          <form className="d-flex">
            <input className="form-control mr-sm-2 search" type="search" placeholder="Search..." aria-label="Search" />
          </form>
        </div>
        <div className='heder'>
          <ul className="navbar-nav mr-auto align-items-center">
            <button className="custom-navbutton" >
              <li className="nav-item">
                <a className="navbutton" href="">Today's Newsfeed</a>
              </li>
            </button>
            <li className="nav-item">
              <a className="navbar-brand" href="" />
            </li>
            Help
            <li className="nav-item">
              <a className="navbar-brand" href="" />
            </li>
            <img src={IMAGES.inianflag} alt="inianflag" width="20" height="20" />
            <li className="nav-item">
              <a className="navbar-brand" href="" />
            </li>
            <li className="nav-item">
              <Link className="no-underline color" to="/login">𝕃𝕠𝕘𝕚𝕟/</Link>
              <Link className="no-underline color" to="/register">ℝ𝕖𝕘𝕚𝕤𝕥𝕖𝕣</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar