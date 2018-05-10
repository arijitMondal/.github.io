import styled from 'styled-components';
import { media } from '../../style/media';

export const ContactWrapper = styled.div`
  @keyframes zoom {
    0%, 100% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.1);
    }
  }
  background: url(../assets/dark_texture.jpg) repeat;
  padding: 50px 25px 75px;
  text-align: center;
  color: white;
  position: relative;
  h3 {
    font-size: 40px;
    margin: 0 0 10px;
    ${media.sm`margin: 0 0 30px;`};
  }
  .twitter {
    color: #1da1f2;
    &:hover {
      color: #FFF;
      background-color: #1da1f2;
    }
  }

  .linkedin {
    color: #0077B5;
    &:hover {
      color: #FFF;
      background-color: #0077B5;
    }
  }

  .mail {
    color: #db3236;
    &:hover {
      color: #FFF;
      background-color: #db3236;
    }
  }

  .github {
    color: #4078c0;
    &:hover {
      color: #FFF;
      background-color: #4078c0;
    }
  }

  .social a {
    padding: 10px;
    ${media.sm`padding: 15px;`};
    margin: 0 10px;
    display: inline-block;
    border-radius: 50px;
    background-color: white;
    &:hover {
      animation: zoom 200ms ease-in;
    }
    span {
      font-size: 20px;
      ${media.sm`font-size: 30px;`};
    }
  }

  .footer {
    position: absolute;
    text-align: center;
    bottom: 5px;
    line-height: 22px;
    width: calc(100% - 50px);
  }

  .icon-heart {
    color: #db3236;
  }

`;
