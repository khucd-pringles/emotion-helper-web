import React from 'react';
import './style/Header.scss';
import logo from "../../asset/images/logo.jpeg";

function Header(props) {
    return (
        <div id={"Header"}>
            <div className="header-container">
                <div className="left-wrapper">
                    <div className="logo-wrapper">
                        <img alt='' src={logo} className='logo-img'/>
                    </div>
                    <div className="tab-wrapper">
                        <div className="tab-box-wrapper">
                            서비스 소개
                        </div>
                        <div className="tab-box-wrapper">
                            서비스 소개
                        </div>
                    </div>
                </div>
                <div className="btn-wrapper">
                    <div className="btn sign-up">회원가입</div>
                    <div className="btn sign-in">로그인</div>
                </div>
            </div>
        </div>
    );
}

export default Header;