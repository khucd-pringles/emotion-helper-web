import React, {useState} from 'react';
import './style/Service.scss';

function Service(props) {

    const [textValue, setTextValue] = useState('');

    const [chatList, setChatList] = useState([]);

    const onTypeEnter = (e) => {
        e.preventDefault();
        if (e.keyCode === 13) {
            //chatList에 추가, 오른쪽에 표시(내 채팅)
            chatList.push(textValue);

            //등록 후 초기화
            setTextValue('');
        }
    }

    console.log(chatList);

    return (
        <div id={"Service"}>
            {/*<div className="description-wrapper"></div>*/}
            <div className="chat-wrapper">
                {
                    chatList.map((li, index) => {
                        return (
                            <div className="chat-row-wrapper" key={index}>
                                {chatList[index]}
                            </div>
                        )
                    })
                }
            </div>
            <div className="chat-input-wrapper">
                <input type="text" className="chat-input" value={textValue}
                       onChange={(e) => setTextValue(e.target.value)} onKeyUp={(e) => onTypeEnter(e)}/>
                <div className="enter-btn">Enter</div>
            </div>
        </div>
    );
}

export default Service;