import { h, Component } from "preact";
import { Link } from "preact-router/match";
import { AboutContent } from "./style";

export default class About extends Component {
  render() {
    return (
      <div id="about" class="row">
        <div class="col6">
          <div class="profilePic"><div class="layer"></div></div>
        </div>
        <div class="col6 wrapper">
          <AboutContent>
            <h3>Hey there, I am Arijit, a Front-End Developer from India.</h3>

            <p>I am creating offline first, progressive, robust, delightful user experience in web. Skilled in React, AngularJs, Webpack, PWA, Web Performance, CI/CD.</p>
          </AboutContent>
        </div>
      </div>
    );
  }
}
