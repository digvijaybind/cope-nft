import React, { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { useNftcontract } from "../hooks";
import { useNavigate } from "react-router-dom";
import CommonPage from "../components/CommonPage";
import Bomb from "../assets/image/money-bag-dynamic-color.svg";
import { BurnContainer } from "./Commonstylepage";

const Burnnft = () => {
  const navigate = useNavigate();
  const nftContract = useNftcontract();
  const [loafdng, setLoading] = useState(false);
  const { account ,active} = useWeb3React();
  
  const onBurnClick = async () => {
    setLoading(true);
    const response = await nftContract.methods.burnNFT().send({
      from: account,
    });
    console.log(nftContract.methods);
    console.log(response);
    setLoading(false);
    navigate('/')
  };

  return (
    <BurnContainer>
      <CommonPage
        Img={Bomb}
        title={"BURN YOUR PACK "}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet ut nulla donec egestas."
        }
        btnName={"BURN NFT"}
        onClick={onBurnClick}
        firstText='Test Project'
        middleText='View your NFTs'
        lastText={active ? account : "Connect to wallet"}
        icon  
      />
    </BurnContainer>
  );
};

export default Burnnft;
