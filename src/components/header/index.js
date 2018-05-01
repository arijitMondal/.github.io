import { h, Component } from 'preact';
import { NavWrapper } from './style';

export default class Header extends Component {
  componentDidMount() {
    const that = this;
    document.querySelector('.hamburguer').addEventListener('click', () => {
      that.processToggle();
    });
  }

  goToSection = (event) => {
    this.processToggle();
    const sectionToSlide = event.target.getAttribute('data-id');
    document.getElementById(sectionToSlide).scrollIntoView({ behavior: 'smooth' });
  }

  processToggle = () => {
    document.querySelector('.full-menu').classList.toggle('active');
    document.querySelector('.hamburguer').classList.toggle('close-hamburguer');
  }

  render() {
    return (
      <NavWrapper>
        <div class="full-menu">
          <nav id="menu" class="menu">
            <ul onClick={this.goToSection}>
              <li class="home" data-id="home">Home</li>
              <li class="works" data-id="portfolio">Portfolio</li>
              <li class="info" data-id="about">About</li>
              <li class="contact" data-id="contacts">Contacts</li>
            </ul>
          </nav>
        </div>
        <div class="hamburguer">
          <div class="lines line-top" />
          <div class="lines line-mid" />
          <div class="lines line-bottom" />
        </div>
      </NavWrapper>
    );
  }
}
