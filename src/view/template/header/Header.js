import React, {useState} from 'react';
import './style/Header.scss';
import Modal from 'react-modal';
import {useNavigate} from "react-router-dom";
import {BsArrowRightCircle} from 'react-icons/bs'

function Header(props) {
    let navigate = useNavigate();

    const onClickStart = () => {
        navigate('/service');
    }

    const handleClickScroll = (idText) => {
        const element = document.getElementById(idText);
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }


    return (
        <div id={"Header"}>
            <div className="header-container">
                <div className="left-wrapper">
                    <div className="logo-wrapper">
                        KHU
                    </div>
                    <div className="tab-wrapper">
                        <div className="tab-box-wrapper" onClick={()=>handleClickScroll('Overview')}>
                            Overview
                        </div>
                        <div className="tab-box-wrapper" onClick={()=>handleClickScroll('How')}>
                            How
                        </div>
                        <div className="tab-box-wrapper" onClick={()=>handleClickScroll('Technique')}>
                            Technique
                        </div>
                        <div className="tab-box-wrapper" onClick={()=>handleClickScroll('Contact')}>
                            Contact
                        </div>

                    </div>
                </div>
                <div className="btn-wrapper" onClick={() => onClickStart()}>
                    <div className="start-btn">Start</div>
                    <BsArrowRightCircle className='right-arrow'/>
                </div>
            </div>
        </div>
    );
}

export default Header;