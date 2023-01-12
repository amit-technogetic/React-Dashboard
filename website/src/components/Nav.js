import React from "react";
import {Link } from 'react-router-dom';
import "./Nav.css";
const Nav = () => {
    const listStyle = {
        "textDecoration": "none",
        "color": "white"
      };
    return (
        <nav>
        <div>
            <ul className="nav-ul">
                <li><Link to ="/" style={listStyle}>Home</Link> </li>
                <li><Link to ="/react" style={listStyle}>React</Link> </li>
                <li><Link to ="/nodejs" style={listStyle}>Node Js</Link> </li>
                <li><Link to ="/typescript" style={listStyle}>Typescript</Link> </li>
                <li><Link to ="/javascript" style={listStyle}>Javascript</Link> </li>
                <li><Link to ="/nestjs" style={listStyle}>Nest Js</Link> </li>
                 <li><Link to ="/materialui" style={listStyle}>Material UI</Link> </li>
                
            </ul>
        </div>
        </nav>
    )
}

export default Nav;