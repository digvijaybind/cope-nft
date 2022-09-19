import React, { useState } from "react";
import { Modal, Alert } from "@mui/material";
import { ethers } from "ethers";
import CommonPage from "../components/CommonPage";
import WalletModal from "../components/Modal";
import { AppContainer, EmptyContainer } from "./Commonstylepage";
import ImageContent from "../components/ImageContent";
import Bomb from "../assets/image/money-bag-dynamic-color.svg";
import PortateOne from "../assets/image/Rectangle.svg";
import PortateTwo from "../assets/image/RectangleTwo.svg";
import Bottomleft from "../assets/image/Bottomleft.svg";
import Bottomright from "../assets/image/Bottomright.svg";
import "./Commonstylepage";
import { Toaster } from "./Commonstylepage";

const Bottomarray = [
    {
        img: Bottomleft,
        title: "Lorem ipsum",
        subtitle: "dolor sit amet",
    },
    {
        img: Bottomright,
        title: "Lorem ipsum",
        subtitle: "dolor sit amet",
    },
];


function Home() {
    const [open, setOpen] = useState();
    const [toast, setToast] = useState(false);

    const handleClose = (data) => {
        setOpen(false)
        setToast(data)
    };

    const handleOpen = () => setOpen(true);
    return (
        <AppContainer>
            <CommonPage
                Img={Bomb}
                title={"Connect your wallet"}
                description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet ut nulla donec egestas."
                }
                btnName={"CONNECT WALLET"}
                btnClick={handleOpen}
                firstText="Test Project"
                lastText="Connect to wallet"
            />
            <Modal
                className="customModal"
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
                hideBackdrop={true}
            >
                <WalletModal onClose={handleClose} callToast={(data) => handleClose(data)} />
            </Modal>
            <EmptyContainer>
                <div className="empty-content">
                    {Array.from(Array(8)).map((_, index) => {
                        return <div className={`empty-box ${index === 0 && 'frontMargin'} ${index === 7 && 'backMargin'}`}></div>;
                    })}
                </div>
                <div className="middle-content">
                    {Array.from(Array(7)).map((_, index) => {
                        return <div className={`empty-box`}></div>;
                    })}
                </div>
                <div className="empty-content">
                    {Array.from(Array(8)).map((_, index) => {
                        return <div className={`empty-box ${index === 0 && 'frontMargin'} ${index === 7 && 'backMargin'}`}></div>;
                    })}
                </div>
            </EmptyContainer>


            <ImageContent
                image={PortateOne}
                name={"ADARSH"}
                role={"DEVELOPER"}
                align={"flex-start"}
            />

            <ImageContent
                image={PortateTwo}
                name={"JOSHUA"}
                role={"DEVELOPER"}
                align={"flex-end"}
                side
            />
            {toast &&
                <Toaster>
                    <div className={`custom-toast toastFail}`}>
                        <Alert onClose={() => setToast(false)} variant="filled" severity="error" icon={false}>Unable to detect your Metamask Wallet <a className="plugin" target="_blank" href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn">Install plugin</a> from Chrome

                        </Alert>
                    </div>
                </Toaster>
            }
            <div className="bottomSection">
                {Bottomarray.map((data, index) => {
                    return (
                        <div className="bottomContain">
                            <div className="title">{data.title}</div>
                            <div className="Subtitleandimage">
                                <div className="subTitle">{data.subtitle}</div>
                                <img className="bottomimg" src={data.img} />
                            </div>
                        </div>

                    );
                })}
            </div>
        </AppContainer>
    );
}

export default Home;
