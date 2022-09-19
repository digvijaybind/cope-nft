import React from "react";
import MetaIcon from "../assets/image/metaIcon.svg";

const MetaMaskWallet = ({ onMetamaskClick }) => {
  return (
    <div className="modal-menu" onClick={onMetamaskClick}>
      <img src={MetaIcon} alt='' />
      <div className="menu-title">
        <div className="main-heading">MetaMask</div>

        <div className="sub-heading">Connect to your MetaMask Wallet </div>
      </div>
      <div>
        <div className="popular">POPULAR</div>
      </div>
    </div>
  );
};

export default MetaMaskWallet;
