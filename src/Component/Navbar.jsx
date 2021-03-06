import React from 'react'
import PropTypes from 'prop-types'
import About from './About'

const Navbar = (props) => {
    return (
        <> 
          <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.logo}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">About</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                            </li>
                            
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <div className={`form-check form-switch  text-${props.mode === 'light'? 'dark' : 'light'}`}>
                            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault"></input>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>  

        
        </> 
    )
}

Navbar.propTypes = {
  logo: PropTypes.string.isRequired // these are used to declare that my props are what types
}

Navbar.defaultProps = {
    logo: 'logo'   // it is used if i am not passing anythin in props then it will send default value to the server
}

export default Navbar
