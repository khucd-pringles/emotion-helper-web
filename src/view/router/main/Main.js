import React from 'react';
import './style/Main.scss';
import originalChatbot from "../../asset/images/original_chatbot.png";
import outChatbot from "../../asset/images/ours_chatbot.png";
import serviceTechnique from "../../asset/images/emotion_service.png";
import serviceMain from "../../asset/images/service_main.png";
import {TypeAnimation} from 'react-type-animation';
import {FaLongArrowAltDown} from "react-icons/fa"

const Feel = [
    {"label": "가난한", color: 'darkgray'},
    {"label": "불우한", color: 'lightgray'},
    {"label": "감사하는", color: 'darkgray'},
    {"label": "걱정스러운", color: 'lightgray'},
    {"label": "고립된", color: 'darkgray'},
    {"label": "괴로워하는", color: 'lightgray'},
    {"label": "구역질 나는", color: 'darkgray'},
    {"label": "기쁨", color: 'lightgray'},
    {"label": "낙담한", color: 'darkgray'},
    {"label": "의식하는", color: 'lightgray'},
    {"label": "노여워하는", color: 'darkgray'},
    {"label": "눈물이 나는", color: 'lightgray'},
    {"label": "느긋", color: 'lightgray'},
    {"label": "당혹스러운", color: 'darkgray'},
    {"label": "당황", color: 'lightgray'},
    {"label": "두려운", color: 'darkgray'},
    {"label": "마비된", color: 'lightgray'},
    {"label": "만족스러운", color: 'darkgray'},
    {"label": "방어적인", color: 'lightgray'},
    {"label": "배신당한", color: 'darkgray'},
    {"label": "버려진", color: 'lightgray'},
    {"label": "부끄러운", color: 'darkgray'},
    {"label": "분노", color: 'lightgray'},
    {"label": "불안", color: 'darkgray'},
    {"label": "비통한", color: 'darkgray'},
    {"label": "상처", color: 'lightgray'},
    {"label": "성가신", color: 'darkgray'},
    {"label": "스트레스 받는", color: 'lightgray'},
    {"label": "슬픔", color: 'darkgray'},
    {"label": "신뢰하는", color: 'lightgray'},
    {"label": "신이 난", color: 'darkgray'},
    {"label": "실망한", color: 'lightgray'},
    {"label": "악의적인", color: 'darkgray'},
    {"label": "안달하는", color: 'lightgray'},
    {"label": "안도", color: 'darkgray'},
    {"label": "억울한", color: 'lightgray'},
    {"label": "열등감", color: 'lightgray'},
    {"label": "염세적인", color: 'darkgray'},
    {"label": "외로운", color: 'lightgray'},
    {"label": "우울한", color: 'darkgray'},
    {"label": "자신하는", color: 'lightgray'},
    {"label": "조심스러운", color: 'darkgray'},
    {"label": "좌절한", color: 'lightgray'},
    {"label": "죄책감의", color: 'darkgray'},
    {"label": "질투하는", color: 'lightgray'},
    {"label": "짜증내는", color: 'darkgray'},
    {"label": "초조한", color: 'lightgray'},
    {"label": "충격 받은", color: 'darkgray'},
    {"label": "취약한", color: 'darkgray'},
    {"label": "툴툴대는", color: 'lightgray'},
    {"label": "편안한", color: 'darkgray'},
    {"label": "한심한", color: 'lightgray'},
    {"label": "혐오스러운", color: 'darkgray'},
    {"label": "혼란스러운", color: 'lightgray'},
    {"label": "환멸을 느끼는", color: 'darkgray'},
    {"label": "회의적인", color: 'lightgray'},
    {"label": "후회되는", color: 'darkgray'},
    {"label": "흥분", color: 'lightgray'},
    {"label": "희생된", color: 'darkgray'},
    {"label": "당황", color: 'lightgray'},
]

function Main(props) {

    return (
        <div id={"Main"}>
            <div className="container">
                <div className="content-wrapper" id={'Overview'}>
                    <div className="banner-text">캡스톤디자인</div>
                    <div className="banner-title-wrapper">
                        <div className="banner-title-row">BERT & GPT 파인튜닝 및 파이프라이닝을</div>
                        <div className="banner-title-row">활용한 감성 대화 챗봇</div>
                    </div>
                    <div className="banner-img-wrapper">
                        <img src={serviceMain} alt="" className="service-img"/>
                        <div className="img-background-wrapper"/>
                    </div>
                </div>

                <div className="content-wrapper">
                    <div className="problem-wrapper">
                        <div className="problem-text-wrapper">
                            <div className="problem-title">Problem</div>
                            <div className="problem-text">기존의 문제점 블라블라블라블라인 문제점이 있었다.</div>
                        </div>
                        <div className="problem-img-wrapper">
                            <img src={originalChatbot} alt="" className="problem-img"/>
                        </div>
                    </div>
                    <div className="problem-wrapper">
                        <div className="problem-text-wrapper margin-less">
                            <div className="problem-title">Solution</div>
                            <div className="problem-text">문제점을 해결하기 위해 이런 방안 들을 적용했고, 어찌저찌하도록 수정했습니다.</div>
                        </div>
                        <div className="problem-img-wrapper">
                            <img src={outChatbot} alt="" className="problem-img"/>
                        </div>
                    </div>
                </div>

                <div className="content-wrapper" id={'How'}>
                    <div className="content-title">How ?</div>
                    <div className="sub-content-wrapper">
                        <div className="sub-title">사용자의 입력을 약 60개의 감정으로 분류</div>
                        <div className="emotion-wrapper">
                            <div className="service-emotion-list-wrapper">
                                {
                                    Feel.map((li, index) => {
                                        return (
                                            <div className="list-box" key={index} style={{backgroundColor:li.color}}>
                                                {li.label}
                                            </div>
                                        )
                                    })}
                            </div>
                        </div>
                    </div>
                    <div className="sub-content-wrapper">
                        <div className="sub-title">
                            분석한 감정을 답변 생성에 반영하여 출력
                        </div>
                        <div className="description-wrapper">
                            <div className="example-wrapper">
                                <div className="example-text">
                                    <div className="example-index">User의 입력</div>
                                    <div className="example-result">'시험을 망쳐서 속상해'</div>
                                </div>
                                <div className="arrow-wrapper">
                                    <FaLongArrowAltDown className='arrow-down'/>
                                </div>

                                <div className="example-text">
                                    <div className="example-index">Model이 분석한 감정</div>
                                    <div className="example-result">'낙담하는'</div>
                                </div>
                            </div>
                            <div className="arrow-wrapper">
                                <FaLongArrowAltDown className='arrow-down'/>
                            </div>
                            <div className="result-text">결과</div>
                            <TypeAnimation
                                sequence={[
                                    '시험 망쳤을 땐 너무 답답하고 어렵죠. 하지만 그만큼 더 열심히 다음 시험을 준비할 수 있는 기회가 있다고 생각해요.',
                                    1000,
                                    '시험에서 좋은 결과를 얻지 못해서 마음이 상하시겠죠. 하지만 지금은 힘들어서 그럴 수 있으니까 일단은 잠시 마음의 정리를 할 시간을 가져보는 것도 좋겠어요.',
                                    1000,
                                    '이럴 땐 일단 잠시 마음을 비우고 다른 일에 집중할 수 있는 시간을 가지면서 기분을 전환해보는 것도 좋을 거예요. 그리고 다음 시험을 준비할 때는 실패했던 이유를 분석하고 더 철저하게 준비해보는 것도 좋은 방법이 될 수 있을 거에요.',
                                    1000,
                                    () => {
                                        console.log('Sequence completed'); // Place optional callbacks anywhere in the array
                                    }
                                ]}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                                style={{fontSize: '20px', display: 'inline-block',maxWidth:'400px',marginBottom:'50px'}}
                            />
                            <div className="description-text-wrapper"></div>
                        </div>
                    </div>
                </div>
                <div className="content-wrapper technique" id={'Technique'}>
                    <div className="content-title">
                        Technique
                    </div>
                    <div className="technique-wrapper">
                        <div className="technique-img-wrapper">
                            <img src={serviceTechnique} alt="" className="technique-img"/>
                        </div>
                    </div>
                </div>
                <div className="content-wrapper footer" id='Contact'>
                    <div className="content-title small">
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

        </div>

    );
}

export default Main;