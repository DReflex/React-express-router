import React from 'react';
import { Link } from 'react-router-dom'

class Navbar extends React.Component{

  render(){
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to='/'>WebsiteName</Link>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li> <Link to='/'>Home</Link></li>
              <li> <Link to='/about'>About</Link></li>
                <li> <Link to='/list'>List</Link></li>

            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
export default Navbar
