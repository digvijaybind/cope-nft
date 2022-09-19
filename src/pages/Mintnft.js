import React, { useEffect, useState } from "react";
import Bomb from "../assets/image/money-bag-dynamic-color.svg";
import { useWeb3React } from "@web3-react/core";
import { useNavigate, useLocation } from "react-router-dom";
import { useNftcontract } from "../hooks";
import ProgresNft from "../pages/Progressnft";
import Alert from '@mui/material/Alert';
import CommonPage from "../components/CommonPage";
import { MintContainer, Toaster } from "./Commonstylepage";

const Mintnft = (props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);
  const { account, active } = useWeb3React();
  const params = new URLSearchParams(useLocation().search);
  const status = params.get('status');

  const nftContract = useNftcontract();
  useEffect(() => {
    if (status == 1) {
      setToast(true)
    }
  }, [status])
  console.log(nftContract);
  const onMintClick = async () => {
    try {
      setLoading(true);
      const response = await nftContract.methods.claimNFT(account).send({
        from: account,
      });
      console.log(nftContract.methods);
      console.log(response, "resp");
      response && navigate("/burnnft");
    } catch (err) {
      setLoading(false);
    }
  };
  const closeToaster = (data) => {
    setToast(data)
    navigate(`/Mintnft?status=${null}`)
  }
  console.log(status, 'icon')
  return (
    <div>
      {loading ? (
        <ProgresNft />
      ) : (

        <MintContainer>
          <CommonPage
            Img={Bomb}
            title={"MINT YOUR NFT"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet ut nulla donec egestas."
            }
            btnName={"MINT NFT"}
            onClick={onMintClick}
            firstText="Test Project"
            lastText={active ? account : "Connect to wallet"}
          />
          {toast &&
            <Toaster>
              <div className={`custom-toast toastSuc`}>
                <Alert onClose={() => closeToaster(false)} variant="filled" severity="success" icon={false}>Metamask succesfully connected
                </Alert>
              </div>
            </Toaster>
          }

        </MintContainer>
      )}
    </div>
  );
};

export default Mintnft;
