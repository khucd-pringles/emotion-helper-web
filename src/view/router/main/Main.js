import React from 'react';
import './style/Main.scss';

function Main(props) {
    return (
        <div id={"Main"}>
            <div className="main-start-wrapper">
                시작하기
            </div>
            <div className="content-wrapper">
                <div className="content-title">
                    Technique
                </div>
                <div className="technique-wrapper">
                    ㅁㄴ아ㅣㅓㅁㄴ이ㅓㅏㅁㅇ니ㅏㅁ어ㅣ나ㅣㅓㅏㅁ너이만어ㅣ마너이ㅏ먼이ㅏㅓ
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
            </div>
        </div>
    );
}

export default Main;