import styled from 'styled-components';
export const NavWrapper = styled.div`
  @keyframes zoom {
    0%, 100% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.1);
    }
  }

  .full-menu {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: #1e88e5;
    opacity: 0.5;
    transform: translateX(100%);
    transition: all 400ms ease-in;
    li {
      font-size: 4em;
      color: #fff;
      opacity: 0;
      transform: translateY(2%);
      transition: all 300ms ease-in;
      cursor: pointer;
      &:after {
        content: "";
        position: absolute;
        height: 5px;
        width: 0%;
        left: 0;
        bottom: 0;
        background-color: #fff;
        transition: width 200ms ease-in;
      }
      &:hover:after {
        width: 100%;
      }
    }
    &.active {
      transform: translateX(0%);
      opacity: 1;
      z-index: 112;
      text-align: center;
      .home {
        transition-delay: 0.3s;
      }
      .info {
        transition-delay: 0.4s;
      }
      .works {
        transition-delay: 0.5s;
      }
      .contact {
        transition-delay: 0.6s;
      }
      li {
        opacity: 1;
        transform: translateX(0%);
        &:hover {
          animation: zoom 200ms ease-in;
        }
      }
    }
  }

  .hamburguer {
    position: absolute;
    width: 2em;
    height: 2em;
    margin: 3em;
    z-index: 113;
    cursor: pointer;
    &:hover {
      animation: zoom 300ms ease-in;
    }
  }

  .lines {
    background-color: #fff;
    width: 100%;
    height: 5px;
    margin: 5px 0;
    transition: all 450ms ease-in;
  }

  .close-hamburguer {
    .lines {
      cursor: pointer;
    }
    .line-top {
      transform: translateY(200%) rotate(45deg);
    }
    .line-mid {
      opacity: 0;
    }
    .line-bottom {
      transform: translateY(-200%) rotate(135deg);
    }
  }
`;
