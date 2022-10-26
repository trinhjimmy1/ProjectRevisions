import React from 'react';
import {Link} from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
           <Link to="/">Home</Link>
           <Link to="/arraystate">ArrayState</Link>
           <Link to="/users">Users</Link>
           <Link to="/lifecycles">LifeCyles</Link>
           <Link to="/films">Films</Link>
           <Link to="/liftingstateup">LiftingStateUp</Link>
           <Link to="/converter">Converter</Link>
        </div>
    );
};

export default Navbar;