import React from "react";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Item from "./Item";

function Main() {
  var divStyle = {
    paddingLeft: 100,
    PaddingTop: 50,
    paddingRight: 100
  };
  return (
    <div>
      <div style={divStyle} id="main">
        <div class="inner">
          <header>
            <h1>
              This is Phantom, a free, fully responsive site
              <br />
              template designed by <a href="http://html5up.net">HTML5 UP</a>.
            </h1>
            <p>
              Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod
              sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus
              quis venenatis orci lorem ipsum et magna feugiat veroeros aliquam.
              Lorem ipsum dolor sit amet nullam dolore.
            </p>
          </header>
          <Item />
        </div>
      </div>
    </div>
  );
}

export default Main;
