import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import { ToastProvider, useToasts } from 'react-toast-notifications';

import Routepage from "./routes";
import "./App.css";
import Loader from "./components/Loader/Loader";
import WrongNetworkModal from "./components/WrongNetworkModal";

const App = () => {
  const { active, chainId } = useWeb3React();
  console.log("active", active); 


  const onChangeNetworkClick = async () => {
    // Metamask adds Ropsten chain by default, so no need to check wether chain is added or not
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x13881" }],
    });
  };

  return (
    <React.Suspense fallback={<Loader />}>
      <WrongNetworkModal
        show={chainId !== 80001 && active}
        onChangeNetworkClick={onChangeNetworkClick}
      />
       <ToastProvider>
      <Routepage />
      </ToastProvider>
    </React.Suspense>
  );
};

export default App;
