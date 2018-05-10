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
              <p>Gamified machine managing platform powered by AngularJs, bootstrap, grunt.</p>
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
              <p>Hybrid app for maintaining flight schedule of crew powered by Angularjs, Jq mobile</p>
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
              <p>Enterprise social network platform powered by slim, html5, css3, Js.</p>
            </div>
          </li>
        </PortfolioWrapper>
      </div>
    );
  }
}
