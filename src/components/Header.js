import React from "react";

function Header() {
  var divStyle = {
    paddingLeft: 100,
    paddingTop: 20
  };
  return (
    <div>
      <header style={divStyle} id="header">
        <div class="inner">
          <a href="index.html" class="logo">
            <span class="symbol">
              <img src="images/grid.svg" alt="" />
            </span>
            <span class="title">Grid Stacks</span>
          </a>

          <nav>
            <ul>
              <li>
                <a href="#menu">Menu</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
