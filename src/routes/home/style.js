import styled from 'styled-components';

export const TypewriterWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  h1 {
    color: #fff;
    font-family: monospace;
    margin: 0 auto;
    font-size: 56px;
    line-height: 70px;
    text-align: center;
  }
  h3 {
    color: #fff;
    font-family: monospace;
    margin: 0 auto;
    font-size: 56px;
    line-height: 70px;
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
