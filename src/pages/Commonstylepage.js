import { styled } from "@mui/material/styles";
import Color from "../assets/color";
import Background from "../assets/image/Background.png";
import MinipageBg from "../assets/image/MinipageBg.jpeg";
// this for common Container
const CustomModal = styled("div")``;

const AppContainer = styled("div")`
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  .bottomSection {
    display: flex;
    justify-content: space-between;
  }

  .title {
    font-family: Clash Display;
    font-weight: 700;
    font-size: 64px;
    color: ${Color.black};
  }
  .subTitle {
    font-family: Clash Display;
    position: absolute;
    color: ${Color.white};
    font-weight: 700;
    font-size: 64px;
  }
  .bottomContain {
    text-align: start;
    padding-left: 78px;
  }
  .Subtitleandimage {
    position: relative;
  }
  .bottomSection {
    padding: 200px 0px 100px 0px;
  }
  @media(max-width:650px){
    .bottomimg {
      width:100%;
    }
    .title {
      font-size: 16px;
    }
    .subTitle {
      font-size: 14px;
    }
    .bottomContain{
      padding-left:25px;
    }
    .bottomSection {
      padding: 100px 0px 50px 0px;
    }
  }

`;

const EmptyContainer = styled('div')`
margin-top: 140px;
.empty-box {
  background: #c4c4c4;
  width: 10.1%;
  height: 150px;
  margin: 15px;
}

.frontMargin{
  margin: 15px 15px 15px 0;
}

.backMargin{
  margin: 15px 0px 15px 15px;
}

.empty-content {
  display: flex;
  justify-content: space-between;
}

.middle-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media(max-width:650px){
  .empty-box {
    background: #c4c4c4;
    width: 10.1%;
    height: 50px;
    margin: 5px;
  }
  
  .frontMargin{
    margin: 5px 5px 5px 0;
  }
  
  .backMargin{
    margin: 5px 0px 5px 5px;
  }
}

@media(min-width: 651px and max-width:800px){
  .empty-box {
    width:10.2%;
    height: 75px;
    margin: 7px;
  }
  
  .frontMargin{
    margin: 7px 7px 7px 0;
  }
  
  .backMargin{
    margin: 7px 0px 7px 7px;
  }
}
`;

const ProgressContainer = styled("div")`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${MinipageBg});
  background-repeat: no-repeat;
  background-size: cover;

  .progress-title{
    text-align: center;
    font-weight: 700;
    font-size: 56px;  
    font-family: Clash Display;
  }

  .loader{
    position: relative;
    top:25px;
  }
  .dot-flashing {
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${Color.black};
    color: ${Color.black};
    animation: dotFlashing 1s infinite linear alternate;
    animation-delay: .5s;
  }
  
  .dot-flashing::before, .dot-flashing::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
  }
  
  .dot-flashing::before {
    left: -15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${Color.black};
    color: ${Color.black};
    animation: dotFlashing 1s infinite alternate;
    animation-delay: 0s;
  }
  
  .dot-flashing::after {
    left: 15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${Color.black};
    color: ${Color.black};
    animation: dotFlashing 1s infinite alternate;
    animation-delay: 1s;
  }
  
  @keyframes dotFlashing {
    0% {
      background-color: ${Color.black};
    }
    50%,
    100% {
      background-color: #ebe6ff;
    }
  }
  @media(max-width: 650px){
    .progress-title{
      font-size:20px;
    }
  }
`;

const BurnContainer = styled("div")`
  background-image: url(${MinipageBg});
  // background-attachment:fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;
const MintContainer = styled("div")`
  background-image: url(${MinipageBg});
  // background-attachment:fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

const Toaster = styled('div')`
// position: relative;
  .custom-toast{
    position: absolute;
     top: 80px;
      left: 0;
      right: 50px;
       zIndex: 999;
       width: '100%';
       display: flex;
       justify-content: flex-end;
  }
  .custom-toast .MuiAlert-root{
    width: 30%;
  }
  .toastSuc .MuiAlert-root{
    background: ${Color.success};
  }
  .toastFail .MuiAlert-root{
    background: ${Color.purple};
  }
  .plugin{
    color: ${Color.white};
  }

  @media(max-width: 650px){
    .custom-toast .MuiAlert-root{
      width: 90%;
    }
  }
`

export {
  CustomModal,
  AppContainer,
  ProgressContainer,
  BurnContainer,
  MintContainer,
  EmptyContainer,
  Toaster
};
