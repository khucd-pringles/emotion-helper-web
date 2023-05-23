import React, {useState} from 'react';
import './style/Header.scss';
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";

function Header(props) {
    let navigate = useNavigate();
    const customStyles = {
        content: {
            position:'absolute',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const [isLogInModalOpen, setIsLogInModalOpen] = useState(false);

    const [isLogIn, setIsLogIn] = useState(false);

    const [password, setPassword] = useState('');

    const onChangePw = (e) => {
        setPassword(e.target.value);
    }

    const onClickConfirm = () =>{
        if(password === '1234'){
            setIsLogIn(true);
            setIsLogInModalOpen(false);
        }
        else{
            window.alert('Wrong password!');
        }
    }

    const onClickLogIn = () => {
        setIsLogInModalOpen(true);
    }

    const onClickStart = () => {
        navigate('/service');
    }

    return (
        <>
            <Modal
                className='log-in-modal'
                isOpen={isLogInModalOpen}
                onRequestClose={() => setIsLogInModalOpen(false)}
                style={customStyles}
                ariaHideApp={false}
            >
                <div className="modal-title">
                    Log In
                </div>
                <div className="modal-content">
                    <div className="input-wrapper">
                        <div className="input-text">Enter Admin Password</div>
                        <input type="password" className="pw-input" onChange={(e)=>onChangePw(e)}/>
                    </div>
                    <div className="btn-wrapper">
                        <div className="btn close" onClick={()=>setIsLogInModalOpen(false)}>Close</div>
                        <div className="btn confirm" onClick={()=>onClickConfirm()}>OK</div>
                    </div>
                </div>


            </Modal>
            <div id={"Header"}>
                <div className="header-container">
                    <div className="left-wrapper">
                        <div className="logo-wrapper">
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
                    {
                        isLogIn ?
                            <div className="btn-wrapper" onClick={()=>onClickStart()}>
                                <div className="btn sign-in">Start</div>
                            </div>
                            :
                            <div className="btn-wrapper" onClick={() => onClickLogIn()}>
                                <div className="btn sign-in">Log In</div>
                            </div>
                    }
                </div>
            </div>
        </>
    );
}

export default Header;