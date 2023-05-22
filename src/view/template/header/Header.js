import React from 'react';
import './style/Header.scss';
import logo from "../../asset/images/logo.jpeg";

function Header(props) {
    return (
        <div id={"Header"}>
            <div className="header-container">
                <div className="left-wrapper">
                    <div className="logo-wrapper">
                        {/*<img alt='' src={logo} className='logo-img'/>*/}
                        KHU
                    </div>
                    <div className="tab-wrapper">
                        <div className="tab-box-wrapper">
                            Overview
                        </div>
                        <div className="tab-box-wrapper">
                            Technique
                        </div>
                        <div className="tab-box-wrapper">
                            Review
                        </div>
                        <div className="tab-box-wrapper">
                            Contact
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