import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
            <a className="navbar-brand" href="#"><FontAwesomeIcon icon={faChalkboardTeacher} /> Online School</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <a className="nav-item nav-link text-light" href="#">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link text-light" href="#">Courses</a>
                    <a className="nav-item nav-link text-light" href="#">Contact</a>
                    <button id="nav" class="btn btn-primary cart-btn" onClick={() => {
                        props.scrollBottom();
                    }}>Go To Cart</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;