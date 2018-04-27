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
            <h3>Hello, my name is Arijit. I am a Front-End Developer located in India.</h3>

            <p>I design and develop websites and web applications using HTML, CSS and JavaScript. When dealing with a project I pay attention to the smallest details addressing problems with patience. Web design and development help me to free my creative mind and allow me satisfy my desire towards constant self growth.</p>
          </AboutContent>
        </div>
      </div>
    );
  }
}
