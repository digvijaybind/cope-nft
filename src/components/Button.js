import React from 'react'
import Button from '@mui/material/Button';
import { ButtonContainer } from "./commonstyle";
import FireIcon from "../assets/image/FireIcon.svg";


export default function CommonButton({ btnName, btnClick, icon }) {
    return (
        <ButtonContainer>
            <Button className={`customBtn`} onClick={btnClick} startIcon={icon}>
                {icon && <img src={FireIcon} alt='' className='startIcon' />}
                <div>{btnName}</div>
            </Button>
        </ButtonContainer>

    )
}
