import React, { useEffect, useState, useRef } from "react";
import { WalletContainer } from "./commonstyle";
import Box from "@mui/material/Box";
import { useWeb3React } from "@web3-react/core";
import MetaMaskOnboarding from "@metamask/onboarding";
import MuiAlert from '@mui/material/Alert';
import Cancelicon from "../assets/image/cancel.svg";
import MetaMaskWallet from "./MetaMaskWallet";
import WalletConnect from "./WalletConnect";
import { Toaster } from "../pages/Commonstylepage";
import { useEagerConnect, useInactiveListener } from "../hooks";

import {
  injected,
  walletconnect,
} from "../utils/connectors";
import { useNavigate } from "react-router-dom";

// const ONBOARD_TEXT = "Click to install MetaMask!";
const CONNECT_TEXT = "Connect Metamask";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: "16px",

  boxShadow: 24,
};
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const WalletModal = ({ open, onClose, callToast }) => {
  const [toast, setToast] = useState(false)
  // const [metamaskButtonText, setMetamaskButtonText] = useState(ONBOARD_TEXT);
  const [activatingConnector, setActivatingConnector] = useState();
  const { account, activate, connector } = useWeb3React();
  const onboarding = useRef();
  const navigate = useNavigate();


  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  const onConnectWithMetamaskClick = async () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      await setActivatingConnector(injected);
      await activate(injected);
      navigate(`/Mintnft?status=${1}`)

    } else {

      callToast(true)
    }
    localStorage.setItem("fortmaticConnect", "false");

  };
  const onConnectWithWalletConnectClick = () => {
    if (connector && connector.walletConnectProvider?.wc?.uri) {
      connector.walletConnectProvider = undefined;
    }
    setActivatingConnector(walletconnect);
    activate(walletconnect);

  };

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
        // setMetamaskButtonText(CONNECT_TEXT);
      }
    }
  }, [account]);
  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  return (
    <WalletContainer>
      <Box sx={style} className="modal-container">
        <div className="hedaer-modal">
          <div id="keep-mounted-modal-title" className="modal-title">
            Connect Wallet
          </div>
          <img src={Cancelicon} onClick={onClose} className="closeIcon" alt="" />
        </div>
        <div id="keep-mounted-modal-description" className="modal-content">
          <MetaMaskWallet onMetamaskClick={onConnectWithMetamaskClick} />
          <WalletConnect onWalletConnect={onConnectWithWalletConnectClick} />

        </div>
      </Box>
      {toast &&
        <Toaster>
          <div className="custom-toast">
            <Alert onClose={() => setToast(false)} variant="filled" severity="success" icon={false}>
              Metamask succesfully connected
            </Alert>
          </div>
        </Toaster>
      }
    </WalletContainer>
  );
};

export default WalletModal;
