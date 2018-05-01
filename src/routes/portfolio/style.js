import styled from 'styled-components';
export const PortfolioWrapper = styled.ul`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 0 50px 0;
  text-align: center;
  .icon {
    font-size: 60px;
  }
  li {
     height: 250px;
    position: relative;
    width: 300px;
    margin: 30px 10px 0 10px;
    &:nth-child(1) {
      .banner {
        background-color: #A65FE7;
      }
      .desc {
        color: #A65FE7;
      }
    }
    &:nth-child(2) {
      .banner {
        background-color: #FFEBB5;
      }
      .desc {
        color: #FFEBB5;
      }
    }
    &:nth-child(3) {
      .banner {
        background-color: #5F92CB;
      }
      .desc {
        color: #5F92CB;
      }
    }
    &:nth-child(4) {
      .banner {
        background-color: #CD6D54;
      }
      .desc {
        color: #CD6D54;
      }
    }
    &:nth-child(5) {
      .banner {
        background-color: #DBF1FA;
      }
      .desc {
        color: #DBF1FA;
      }
    }
    &:nth-child(6) {
      .banner {
        background-color: #FED766;
      }
      .desc {
        color: #FED766;
      }
    }
    &:nth-child(7) {
      .banner {
        background-color: #F8AEAA;
      }
      .desc {
        color: #F8AEAA;
      }
    }
    &:nth-child(8) {
      .banner {
        background-color: #58B88C;
      }
      .desc {
        color: #58B88C;
      }
    }
    &:nth-child(9) {
      .banner {
        background-color: #97CB67;
      }
      .desc {
        color: #97CB67;
      }
    }
    .banner {
      z-index: 10;
      height: 100%;
      padding: 15px;
      position: relative;
      transition: transform 0.4s;
      &:hover {
        transform: translateY(-100px);
      }
      h4 {
        margin: 15px 0;
        font-size: 35px;
        font-weight: 300;
      }
      .bannerContent {
        transform: translateY(-50%);
        top: 50%;
        position: relative;
      }
    }

    .desc {
      position: absolute;
      left: 0;
      padding: 10px;
      background: #000;
      width: 100%;
      bottom: 0;
      height: 100px;
      backface-visibility: hidden;
      h3 {
        margin: auto;
      }
      p {
        font-size: 15px;
        margin: 5px 0 0 0;
      }
    }
  }
`;
