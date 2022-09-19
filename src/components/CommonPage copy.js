import React, { useState, useRef, useEffect } from "react";
import {
  MainContainer,
  LeftSideSection,
  RightSideSection,
} from "./commonstyle";
import CommonButton from "./Button";

import MetaMaskOnboarding from "@metamask/onboarding";
import { useWeb3React } from "@web3-react/core";
import { useEagerConnect, useInactiveListener } from "../../hooks";

const ONBOARD_TEXT = "Click to install MetaMask!";
const CONNECT_TEXT = "Connect Metamask";
//

function CommonPage({
  Img,
  title,
  description,
  btnName,
  btnClick,
  firstText,
  middleText,
  lastText,
  onClick,
}) {
  //
  const [metamaskButtonText, setMetamaskButtonText] = useState(ONBOARD_TEXT);
  const [activatingConnector, setActivatingConnector] = useState();

  const { account, activate, connector, active, deactivate } = useWeb3React();
  const onboarding = useRef();

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  // For Metamask OnBoarding
  useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);

  useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (account && account.length > 0) {
        onboarding.current.stopOnboarding();
      } else {
        setMetamaskButtonText(CONNECT_TEXT);
      }
    }
  }, [account]);

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  //
  const onLogoutClick = () => {
    if (active) {
      deactivate();
      localStorage.clear();
      localStorage.setItem("shouldEagerConnect", false);
    }
  };

  console.log(firstText, middleText, lastText, "test");
  return (
    <MainContainer>
      <div className="headerPart">
        {firstText && <div className="headerTypographyLeft">{firstText}</div>}
        {middleText && <div className="headerTypographyLeft">{middleText}</div>}
        {lastText && (
          <div className="headerTypographyRight" onClick={onLogoutClick}>
            {lastText}
          </div>
        )}
      </div>
      <div>
        <div className="master-content">
          <LeftSideSection>
            <img className="BombImg" src={Img} />
          </LeftSideSection>

          <RightSideSection>
            <div className="contentSection">
              <div className="title"> {title}</div>
              <div className="description">{description}</div>
              <CommonButton
                btnName={btnName}
                btnClick={onClick ? onClick : btnClick}
              />
            </div>
          </RightSideSection>
        </div>
      </div>
    </MainContainer>
  );
}

export default CommonPage;
