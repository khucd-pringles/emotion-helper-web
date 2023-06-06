import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import "./style/Service.scss";
import example from "../../asset/images/example.png";
import ReactLoading from 'react-loading'

function Service(props) {

    const [chatLength, setChatLength] = useState(0)
    const [isLoading, setIsLoading] = useState(false);
    const [responseData, setResponseData] = useState([]);
    const [textValue, setTextValue] = useState("");
    const [chatList, setChatList] = useState([]);
    const chatRef = useRef();

    const handleButtonClick = async () => {
        await axios
            .post("http://127.0.0.1:5000/predict", {text: textValue})
            .then((response) => {
                setResponseData((prevResponseData) => [
                    ...prevResponseData,
                    response.data
                ])
                setChatLength(prev => prev + 1);
                chatList.push(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => setIsLoading(false))
    };

    const onTypeEnter = (e) => {
        e.preventDefault();
        if (e.keyCode === 13 && textValue !== '') {
            //chatList에 추가, 오른쪽에 표시(내 채팅)
            setIsLoading(true)
            chatList.push(textValue);
            handleButtonClick();
            //등록 후 초기화
            setChatLength(prev => prev + 1);
            setTextValue("");
        }
    };

    const handleButtonClickAgain = async (feel, index) => {
        await axios
            .post("http://127.0.0.1:5000/predict-again", {feel: feel, text: textValue})
            .then((response) => {
                setResponseData((prevResponseData) => [
                    ...prevResponseData,
                    response.data
                ])
                chatList.push(response.data);
                setChatLength(prevState => prevState + 1);

            })
            .catch((error) => {
                console.error(error);
            })
            .finally(()=>{
                setIsLoading(false);
            })

    }

    const onClickEmotion = (feel, index) => {
        setIsLoading(true);
        let text = ''
        if (index !== 0) {
            text = chatList[index - 1];
        }
        chatList.push(text);
        setChatLength(prevState => prevState + 1)

        handleButtonClickAgain(feel, index);
    }

    useEffect(() => {
        if(chatRef.current){
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    },[chatLength])


    return (
        <div id={"Service"}>
            {
                isLoading &&
                <div className={'loading-wrapper'}>
                    <div className={'loading'}>
                        <ReactLoading type={'bubbles'} color={'#8968ef'}/>
                    </div>
                </div>
            }
            <div ref={chatRef} className="chat-wrapper">
                {
                    chatList.length === 0 &&
                    <div className='how-to-use-wrapper'>
                        <div className="how-to-use-title">
                            How to use
                        </div>
                        <div className="row-wrapper">
                            1. 원하는 일상대화를 입력하고 'Enter' 키를 눌러주세요.
                        </div>
                        <div className="row-wrapper">
                            2. Bert가 당신의 감정을 분석해줄거에요.
                        </div>
                        <div className="row-wrapper">
                            3. 보라색으로 표시된 감정에 해당하는 답변을 줄거에요.
                        </div>
                        <div className="row-wrapper important">
                            {'#. 본인의 의도가 보라색으로 표시된 감정이 아닌 검정색으로 표시된 감정이라면 해당되는 감정을 클릭해주세요.\n 선택한 감정에 해당되는 답변을 다시 해줄거에요.'}
                        </div>
                        <div className="row-wrapper">
                            Example)
                            <img className='example-img' src={example}/>
                        </div>
                    </div>
                }
                {chatList.map((li, index) => {
                    return (
                        <div key={index}>
                            {index % 2 === 0 ?
                                <>
                                    <div className={"user-chat-row-wrapper"} key={index}>
                                        <div className="user-chat-box">
                                            {li}
                                        </div>
                                    </div>
                                </>
                                :
                                <>
                                    <div className="emotion-wrapper">

                                        {
                                            li.feel_list === '' ?
                                                null
                                                :
                                                <div className="emotion-text-box-wrapper">
                                                    <div className="emotion-index">당신의 감정</div>
                                                    <div className="emotion-list-wrapper">
                                                        <div className="emotion-box main">{li.feel_list[0]}</div>
                                                        <div className="emotion-box cursor"
                                                             onClick={() => onClickEmotion(li.feel_list[1], index)}>{li.feel_list[1]}</div>
                                                        <div className="emotion-box cursor"
                                                             onClick={() => onClickEmotion(li.feel_list[2], index)}>{li.feel_list[2]}</div>
                                                    </div>
                                                </div>

                                        }
                                    </div>
                                    <div className={"model-chat-row-wrapper"} key={index}>
                                        <div className="model-chat-box">
                                            <div className="model-chat-text">
                                                {li.result}
                                            </div>
                                        </div>

                                    </div>
                                </>
                            }
                        </div>
                    );
                })}
            </div>
            <div className="chat-input-wrapper">
                <input
                    type="text"
                    className="chat-input"
                    placeholder={'Sweet Chat에게 채팅을 전송해 보세요'}
                    value={textValue}
                    onChange={(e) => setTextValue(e.target.value)}
                    onKeyUp={(e) => onTypeEnter(e)}
                />
                <div className="enter-btn">Enter</div>
            </div>
        </div>
    );
}

export default Service;
