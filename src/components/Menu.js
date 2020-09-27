import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  var divStyle = {
    padding: 10
  };
  return (
    <div>
      <nav style={divStyle} id="menu">
        <h2>Menu</h2>
        <ul style={{ listStyleType: "none" }}>
          <Link to="/Item">
            <li>
              <a style={{ color: "white" }}>Courses</a>
            </li>
          </Link>
          <Link to="/Content">
            <li>
              <a style={{ color: "white" }}>Contents</a>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
