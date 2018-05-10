import styled from 'styled-components';
import { media } from '../../style/media';

export const TypewriterWrapper = styled.div`
  position: absolute;
  left: auto;
  ${media.sm`left: 50%;`};
  top: 50%;
  transform: translate(0, -50%);
  margin: 0 auto;
  width: 100%;
  ${media.sm`transform: translate(-50%, -50%);`};
  h1 {
    color: #fff;
    font-family: monospace;
    margin: 0 auto 15px;
    ${media.sm`margin: 0 auto;`};
    font-size: 36px;
    ${media.sm`font-size: 56px;`};
    line-height: 50px;
    ${media.sm`line-height: 70px;`};
    text-align: center;
  }
  h3 {
    color: #fff;
    font-family: monospace;
    margin: 0 auto;
    line-height: 50px;
    text-align: center;
    font-size: 30px;
  }
`;

export const BannerImage = styled.div`
  height: 100vh;
  background-image: url('../assets/computer.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  position:  relative;
`;
