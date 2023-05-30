import React from 'react';
import './style/Main.scss';
import originalChatbot from "../../asset/images/original_chatbot.png";
import outChatbot from "../../asset/images/ours_chatbot.png";
import serviceCapture from "../../asset/images/service-capture.png";

function Main(props) {
    return (
        <div id={"Main"}>
            <div className="content-wrapper banner">
                <div className="banner-wrapper">
                    <div className="banner-img-wrapper">
                        <img src={serviceCapture} alt="" className="banner-img"/>
                    </div>
                    <div className="banner-text-wrapper">
                        <div className="banner-text-row">캡스톤디자인</div>
                        <div className="banner-text-row big bold">BERT & GPT 파인튜닝 및 파이프라이닝을 활용한 감성 대화 챗봇</div>
                        <div className="banner-text-row-result">
                            <div className="result-img-wrapper">-></div>
                            <div className="banner-text">감성 Chatbot</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-wrapper">
                <div className="service-wrapper">
                    <div className="service-img-wrapper">
                        <div className="service-img-box left">
                            <img className='service-img' alt={'service-img'} src={originalChatbot}/>
                            <div className="service-description">기존 Chatbot의 형태</div>
                        </div>
                        <div className="service-img-box">
                            <img className='service-img' alt={'service-img'} src={outChatbot}/>
                            <div className="service-description">해당 서비스 Chatbot의 형태</div>
                        </div>
                    </div>

                    <div className="service-text">
                        서비스 설명
                    </div>
                </div>
            </div>
            <div className="content-wrapper">
                <div className="content-title">
                    Technique
                </div>
                <div className="technique-wrapper">
                    뭘 넣지이이이잉이ㅣㅇ이이ㅣ이이ㅣ이이이이이이이이이이이이이ㅣ잉이
                </div>
            </div>


            <div className="content-wrapper">
                <div className="content-title">
                    Review
                </div>
                <div className="review-wrapper">
                    <div className="review-row-wrapper">
                        <div className="review-box-wrapper">
                            <div className="writer-wrapper">
                                <div className="img-box"></div>
                                <div className="writer-name">김형준</div>
                            </div>
                            <div className="review-text-wrapper">정말 유용하게 잘 쓰고 있습니다. 저에게 딱 필요한 서비스입니다. 정말 유용하게 잘 쓰고 있습니다.
                                저에게 딱 필요한 서비스입니다. 정말 유용하게 잘 쓰고 있습니다. 저에게 딱 필요한 서비스입니다.
                            </div>
                        </div>
                        <div className="review-box-wrapper">
                            <div className="writer-wrapper">
                                <div className="img-box"></div>
                                <div className="writer-name">김형준</div>
                            </div>
                            <div className="review-text-wrapper">정말 유용하게 잘 쓰고 있습니다. 저에게 딱 필요한 서비스입니다. 정말 유용하게 잘 쓰고 있습니다.
                                저에게 딱 필요한 서비스입니다. 정말 유용하게 잘 쓰고 있습니다. 저에게 딱 필요한 서비스입니다.
                            </div>
                        </div>
                    </div>
                    <div className="review-row-wrapper">
                        <div className="review-box-wrapper">
                            <div className="writer-wrapper">
                                <div className="img-box"></div>
                                <div className="writer-name">김형준</div>
                            </div>
                            <div className="review-text-wrapper">정말 유용하게 잘 쓰고 있습니다. 저에게 딱 필요한 서비스입니다. 정말 유용하게 잘 쓰고 있습니다.
                                저에게 딱 필요한 서비스입니다. 정말 유용하게 잘 쓰고 있습니다. 저에게 딱 필요한 서비스입니다.
                            </div>
                        </div>
                        <div className="review-box-wrapper">
                            <div className="writer-wrapper">
                                <div className="img-box"></div>
                                <div className="writer-name">김형준</div>
                            </div>
                            <div className="review-text-wrapper">정말 유용하게 잘 쓰고 있습니다. 저에게 딱 필요한 서비스입니다. 정말 유용하게 잘 쓰고 있습니다.
                                저에게 딱 필요한 서비스입니다. 정말 유용하게 잘 쓰고 있습니다. 저에게 딱 필요한 서비스입니다.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-wrapper">
                <div className="content-title">
                    Contact Us
                </div>
                <div className="contact-us-wrapper">
                    <div className="contact-row-wrapper">
                        <div className="name">김형준</div>
                        <div className="email">gudwns4985@khu.ac.kr</div>
                    </div>
                    <div className="contact-row-wrapper">
                        <div className="name">박정민</div>
                        <div className="email">jungmin59@khu.ac.kr</div>
                    </div>
                    <div className="contact-row-wrapper">
                        <div className="name">유재형</div>
                        <div className="email">dbwogud227@khu.ac.kr</div>
                    </div>
                    <div className="contact-row-wrapper">
                        <div className="name">이성주</div>
                        <div className="email">juscomputer@khu.ac.kr</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;