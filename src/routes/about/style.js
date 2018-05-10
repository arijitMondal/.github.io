import styled from 'styled-components';

export const AboutContent = styled.div`
  padding: 20px 40px;
  color: #FFF;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  h3 {
    font-size: 40px;
    line-height: 45px;
  }
  p {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const ProfilePic = styled.div`
  height: 600px;
  background-image: url('../assets/user.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  position: relative;
  .layer {
    background-color: #424b5fb3;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
