import React, { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import Burnnft from "./pages/Burnnft";
import Mintnft from "./pages/Mintnft";
import Progressnft from "./pages/Progressnft";
import Home from "./pages/Home";
import Alert from '@mui/material/Alert';


const RoutePage = () => {
  const { active, chainId, account } = useWeb3React();

  console.log("active", active);

  let mainContent = (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/Mintnft" element={<Mintnft />} />
      <Route path="/progressnft" element={<Progressnft />} />
      <Route path="/burnnft" element={<Burnnft />} />
      {/* {localStorage.getItem ("userData") === null && <Redirect to="/" />} */}
    </>
  );

  // if (active) {
  //   localStorage.setItem("shouldEagerConnect", true);
    // const shouldEagerConnect= localStorage.getItem("shouldEagerConnect");
   
    // shouldEagerConnect && alert('succesful')
  

  //   mainContent = (
  //     <>
  //       <Route path="/" element={<Mintnft activeSts={active} />} />
  //       <Route path="/Mintnft" element={<Mintnft />} />
  //       <Route path="/progressnft" element={<Progressnft />} />
  //       <Route path="/burnnft" element={<Burnnft />} />
  //     </>
  //   );
  // } 


  return (
    <BrowserRouter>
      <Routes>
        {mainContent}
      
      </Routes>
    </BrowserRouter>
  );
};

export default RoutePage;
