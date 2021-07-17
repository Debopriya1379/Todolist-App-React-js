import React from 'react';
import PropTypes from 'prop-types'
import "./Header.css";
import { Link } from "react-router-dom";


export default function Header(props) {
    return (
        <div className="Header">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><h3>{props.title}</h3></li>
                <li><Link to='#'>Services</Link></li>
                <li><Link to='#'>Contact Us</Link></li>
            </ul>
        </div>
    )
}
Header.defaultProps = {
    title: "Your title here"
}

Header.prototype = {
    title: PropTypes.string.isRequired
}