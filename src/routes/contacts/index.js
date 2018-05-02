import { h, Component } from "preact";
import { ContactWrapper } from "./style";

export default class Contacts extends Component {
  render() {
    return (
      <div id="contacts" class="contacts">
        <ContactWrapper>
          <h3>Get In Touch</h3>
          <ul class="social inline">
            <li><a href="https://twitter.com/Arijitm_dev" class="twitter" target="_blank">
              <span class="icon-twitter"></span></a>
            </li>
            <li> <a href="https://github.com/arijitMondal" class="github" target="_blank"><span class="icon-github"></span></a>
            </li>
            <li> <a href="https://www.linkedin.com/in/arijit-mondal1" class="linkedin" target="_blank"><span class="icon-linkedin2"></span></a>
            </li>
            <li> <a href="mailto:arijitmondalee@gmail.com" class="mail" target="_blank"><span class="icon-mail4"></span></a>
            </li>
          </ul>
          <div class="footer">
            <p>Made with  <span class="icon-heart"></span>  by Arijit Mondal,  All Rights Reserved.</p>
          </div>
        </ContactWrapper>
      </div>
    );
  }
}
