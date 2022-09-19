import React from "react";
import { useWeb3React } from "@web3-react/core";
import Routepage from "./routes";
import Loader from "./components/Loader/Loader";
import WrongNetworkModal from "./components/WrongNetworkModal";
import "./App.css";

const App = () => {
  const { active, chainId } = useWeb3React();

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
      <Routepage />
    </React.Suspense>
  );
};

export default App;
