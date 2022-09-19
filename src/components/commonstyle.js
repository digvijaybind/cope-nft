import { styled } from "@mui/material/styles";
import Color from "../assets/color";

// this for common Container
const MainContainer = styled("div")`
  .testing {
    color: ${Color.white};
  }
  .headerPart{
    display:flex;
    justify-content:space-between;
    width:100%;
    position:absolute;
  
 }
 .headerTypographyLeft{
  font-family: Avenir !important;
     font-weight: 800;
     font-size: 16px;
     line-height: 130%;
     color:${Color.black}; 
     margin-left:68px;
     margin-top:34px;
     text-transform: uppercase;
 }
 .headerTypographyRight{
  cursor: pointer;
  font-family: Avenir !important;
    font-weight: 800;
    font-size: 16px;
    line-height: 130%;
    color:${Color.black}; 
    margin-right:78px;
    margin-top:34px;
    text-transform: uppercase;
 }

 .master-content{
  width:100%;
  display: flex;
  padding-top:130px;
 }
 .title{
  font-family: Clash Display;
  font-style: normal;
  font-weight: 700;
  font-size: 88px;
  line-height: 120%;
  text-transform: uppercase;  
  color: ${Color.black};
 }

 .description{
  font-family: Avenir;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 140%;
  color: #1A1A1A;
  margin:0px 0px 20px 0px;
 }

@media(max-width: 650px){
  .headerTypographyLeft{
       font-size: 12px;
       margin-left:15px;
   }
   .headerTypographyRight{
      font-size: 12px;
      margin-right:15px;
      text-overflow: ellipsis;
      overflow: hidden;
      width: 35%;
   }
     .title{
    font-size: 30px;
   }
   .description{
    font-size: 15px;
   }
   .contentSection{
    width:85% !important;
   }
   .BombImg{
    width: 100%;
   }
 }
 @media(min-width: 651px and max-width: 800px){ 
    .title{
    font-size: 60px;
   }
   .description{
    font-size: 20px;
   }
   .contentSection{
    width:80% !important;
   }
   .BombImg{
    width: 100%;
   }
 }

 ,`;
const LeftSideSection = styled("div")`
  display: flex;
  justify-content: center;
  align-item: center;
  width: 50%;
`;
const RightSideSection = styled("div")`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;

  .contentSection {
    width: 77%;
    text-align: start;
  }
`;

// THis is for button
const ButtonContainer = styled("div")`
  .customBtn {
    font-family: ClashDisplay-semibold;
    background: ${Color.white};
    width: 100%;
    height: 72px;
    color: ${Color.black};
    border: 1px solid ${Color.white};
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.08);
    border-radius: 35px;
    font-weight: 600;
    font-size: 24px;
    &:hover {
      color: ${Color.white};
      background: radial-gradient(
            174.14% 393.95% at 13.8% -108.62%,
            #ff0000 0%,
            rgba(255, 0, 0, 0) 100%
          )
          /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
        linear-gradient(
          92.5deg,
          #fefeff 1.23%,
          #4e3fff 35.96%,
          #306aff 63.66%,
          #071f9e 97.9%
        ),
        #ffffff;
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.08);
    }
  }
  .startIcon{
    width: 20px;
    margin-right: 8px;
  }
  @media(max-width: 650px){
    .customBtn{
      font-size: 15px;
      height: 45px;
    }
    .startIcon{
      width: 15px;
      margin-right: 8px;
    }
  }
  @media(min-width: 651px and max-width: 800px){
    .customBtn{
      font-size: 18px;
      height: 65px;
    }
  }
`;

const ImageContainer = styled("div")`
  .imgStart {
    margin: 200px 0 10px 100px;
  }
  .imgEnd {
    margin: 200px 100px 10px 0;
  }
  .image-content {
    display: flex;
    align-items: flex-end;
  }
  .developerTitle {
    font-family: Clash Display;
    color: ${Color.lightGray};
    font-weight: 700;
    font-size: 42px;
  }
  .developername {
    font-family: Clash Display;
    color: ${Color.black};
    font-weight: 700;
    font-size: 64px;
  }
  .developer-info {
    position: relative;
    right: 30px;
  }

  .developer-details {
    position: relative;
    left: 30px;
  }

  @media(max-width: 650px){ 
    .imgStart {
      margin: 200px 0 10px 50px;
    }
    .imgEnd {
      margin: 200px 50px 10px 0;
    }
    .dev-image{
      width: 60%;
    }
    .developerTitle {
      font-size: 17px;
    }
    .developername {
      font-size: 28px;
    }
    .mobile-end{
      display: flex;
      justify-content: flex-end;
    }
   }

 @media(min-width: 651px and max-width: 800px){ 
  .imgStart {
    margin: 200px 0 10px 70px;
  }
  .imgEnd {
    margin: 200px 70px 10px 0;
  }
  .dev-image{
    width: 70%;
  }
  .developerTitle {
    font-size: 30px;
  }
  .developername {
    font-size: 42px;
  }
 }
`;
const WalletContainer = styled("div")`
  .hedaer-modal {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid ${Color.lightGray};
  }
  .modal-content {
    padding: 20px 20px 0 20px;
  }
  .modal-title {
    color: ${Color.darkGray};
    font-weight: 400;
    font-size: 22px;
    line-height: 130%;
  }

  .modal-menu {
    display: flex;
    padding: 20px;
    background: ${Color.lightBg};
    margin-bottom: 20px;
    border-radius: 8px;
    cursor: pointer;
  }
  .menu-title {
    padding-left: 20px;
    width: 80%;
  }
  .main-heading {
    font-weight: 900;
    font-size: 22px;
  }
  .sub-heading {
    font-weight: 500;
    font-size: 16px;
  }
  .popular {
    background: linear-gradient(125.77deg, #bf89ff -4.5%, #9855e1 70.94%);
    border-radius: 4px;
    color: ${Color.white};
    font-weight: 900;
    font-size: 14px;
    line-height: 160%;
    text-align: center;
    padding: 10px;
    cursor: pointer;
  }
  .closeIcon {
    cursor: pointer;
  }

  .ToastElement .Icon{
    background: red !important;
  }
  @media(max-width: 650px){
    .modal-container{
      width: 95% !important;
    }
  }
`;

export {
  MainContainer,
  ButtonContainer,
  LeftSideSection,
  RightSideSection,
  ImageContainer,
  WalletContainer,
};
