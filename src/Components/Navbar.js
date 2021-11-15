import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode !== "light" ? "dark" : "light"} bg-${props.mode !== "light" ? "dark" : "light"}`}>
            <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">{props.about}</a>
                </li>
                </ul>
                {/* <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-primary" type="submit">Search</button>
                </form> */}
                <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                    <button type="button" className="btn btn-primary round-button mx-1" value="blue" onClick={e => props.toggleDarkMode(e)}></button>
                    <button type="button" className="btn btn-success round-button mx-1" value="green" onClick={e => props.toggleDarkMode(e)}></button>
                    <button type="button" className="btn btn-danger round-button mx-1" value="red" onClick={e => props.toggleDarkMode(e)}></button>
                    {/* <input className="form-check-input" onClick={props.toggleDarkMode} type="button" role="switch" id="flexSwitchCheckDefault" /> */}
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                </div>
            </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Project Title',
    about: 'About Us'
}