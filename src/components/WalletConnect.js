import React from "react";

import Walleticon from "../assets/image/Walleticon.svg";

import scanner from "../assets/image/scanner.svg";

const WalletConnect = ({ onWalletConnect }) => {
  return (
    <div className="modal-menu" onClick={onWalletConnect}>
      <img src={Walleticon} />
      <div className="menu-title">
        <div className="main-heading">WalletConnect</div>
        <div className="sub-heading">Scan with WalletConnect to connect</div>
      </div>
      <div>
        <img src={scanner} />
      </div>
    </div>
  );
};

export default WalletConnect;
