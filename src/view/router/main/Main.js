import React from 'react';
import './style/Main.scss';

function Main(props) {
    return (
        <div id={"Main"}>
            <div className="content-wrapper no-border">
                <div className="main-wrapper">
                    <div className="service-img-wrapper">
                        <img className='service-img' alt={'service-img'}/>
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