import useContract from "./useContract";

import Nft from "../contracts/Nft.json";

const useColorContract = () =>
  useContract(process.env.REACT_APP_NFT_ADDRESS, Nft, true);

export default useColorContract;
