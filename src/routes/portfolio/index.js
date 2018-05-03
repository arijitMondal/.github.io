import { h, Component } from "preact";
import { PortfolioWrapper } from "./style";

export default class Portfolio extends Component {
  render() {
    return (
      <div id="portfolio">
        <h2 class="header">A collection of my works</h2>
        <PortfolioWrapper className="inline">
          <li>
            <div class="banner">
              <div class="bannerContent">
                <span class="icon icon-quill"></span>
                <h4> Vibe</h4>
              </div>
            </div>
            <div class="desc">
              <h3>TCS</h3>
              <p>Enterprise Blogging platform powered by react/redux, es6, webpack.</p>
            </div>
          </li>
          <li>
            <div class="banner">
              <div class="bannerContent">
                <span class="icon icon-credit-card"></span>
                <h4> Max</h4>
              </div>
            </div>
            <div class="desc">
              <h3>PwC</h3>
              <p>Tax compliance platform built on AngularJs, grunt, bower.</p>
            </div>
          </li>
          <li>
            <div class="banner">
              <div class="bannerContent">
                <span class="icon icon-files-empty"></span>
                <h4> Docs</h4>
              </div>
            </div>
            <div class="desc">
              <h3>TCS</h3>
              <p>Enterprise Document sharing platform powered by AngularJs, grunt, bower.</p>
            </div>
          </li>
          <li>
            <div class="banner">
              <div class="bannerContent">
                <span class="icon icon-bubbles2"></span>
                <h4> Talk</h4>
              </div>
            </div>
            <div class="desc">
              <h3>TCS</h3>
              <p>Enterprise Collaboration app powered by AngularJs, ngReact, reactjs, grunt.</p>
            </div>
          </li>
          <li>
            <div class="banner">
              <div class="bannerContent">
                <span class="icon icon-truck"></span>
                <h4>V Delivery</h4>
              </div>
            </div>
            <div class="desc">
              <h3>Target</h3>
              <p>Hybrid app for product delivery powered by AngularJs, cordova, Ionic</p>
            </div>
          </li>
          <li>
            <div class="banner">
              <div class="bannerContent">
                <span class="icon icon-cogs"></span>
                <h4> OBSO</h4>
              </div>
            </div>
            <div class="desc">
              <h3>GE Oil & Gas</h3>
              <p>Gamified machine managing platform powered by AngularJs, bootstrap, grunt, bower.</p>
            </div>
          </li>
          <li>
            <div class="banner">
              <div class="bannerContent">
                <span class="icon icon-airplane"></span>
                <h4> Crewcollab</h4>
              </div>
            </div>
            <div class="desc">
              <h3>Singapore Airlines</h3>
              <p>Hybrid app for maintaining flight schedule of airlines crew powered by Angularjs, Jquery mobile, css3, html5</p>
            </div>
          </li>
          <li>
            <div class="banner">
              <div class="bannerContent">
                <span class="icon icon-cart"></span>
                <h4> Michales</h4>
              </div>
            </div>
            <div class="desc">
              <h3>Michales</h3>
              <p>Michaels responsive coupon site powered by html and css3.</p>
            </div>
          </li>
          <li>
            <div class="banner">
              <div class="bannerContent">
                <span class="icon icon-share2"></span>
                <h4> Knome</h4>
              </div>
            </div>
            <div class="desc">
              <h3>TCS</h3>
              <p>Enterprise social network platform powered by slim, html5, css3, coffeescript.</p>
            </div>
          </li>
        </PortfolioWrapper>
      </div>
    );
  }
}
