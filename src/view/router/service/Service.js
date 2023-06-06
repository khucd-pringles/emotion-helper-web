import React, { useState } from "react";
import axios from "axios";
import "./style/Service.scss";

function Service(props) {

  const [responseData, setResponseData] = useState([]);
  const [textValue, setTextValue] = useState("");
  const [chatList, setChatList] = useState([]);

  const handleButtonClick = () => {
    axios
      .post("http://127.0.0.1:5000/predict", { text: textValue } )
      .then((response) => {
        console.log(response);
        setResponseData((prevResponseData) => [
            ...prevResponseData,
            response.data
        ])
        chatList.push(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onTypeEnter = (e) => {
    e.preventDefault();
    if (e.keyCode === 13 && textValue !== '') {
      //chatList에 추가, 오른쪽에 표시(내 채팅)
      chatList.push(textValue);
      handleButtonClick();
      //등록 후 초기화
      setTextValue("");
    }
  };

  console.log('chatList',chatList)

  return (
    <div id={"Service"}>
      {/*<div className="description-wrapper"></div>*/}
      <div className="chat-wrapper">
        {chatList.map((li, index) => {
          return (
              <div key={index}>
                  {index % 2 === 0 ?
                      <div className={"user-chat-row-wrapper"} key={index}>
                          <div className="user-chat-box">
                              {li}
                          </div>
                      </div>
                  :
                      <>
                          <div className="emotion-wrapper">Bert가 분석한 User 감정 : {li.feel_list[0]}</div>
                          <div className={"model-chat-row-wrapper"} key={index}>
                              <div className="model-chat-box">
                                  {li.result}
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
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          onKeyUp={(e) => onTypeEnter(e)}
        />
        <div className="enter-btn" onClick={()=>handleButtonClick()}>Enter</div>
      </div>
    </div>
  );
}

export default Service;
