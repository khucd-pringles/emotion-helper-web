import React, {useState} from "react";
import axios from "axios";
import "./style/Service.scss";
import UserAvatar from '../../asset/images/image_user_avatar.png'
function Service(props) {

  const [responseData, setResponseData] = useState([]);
  const [textValue, setTextValue] = useState("");
  const [chatList, setChatList] = useState([
    '안녕!', {feel_list: ['행복', '슬픔', '웃음'], result: '행복을 느끼고 계시네요!'},
    '안녕!안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕',
    {feel_list: ['행복', '슬픔', '웃음'], result: '행복을 느끼고 계시네요!행복을 느끼고 계시네요!행복을 느끼고 계시네요!행복을 느끼고 계시네요!행복을 느끼고 계시네요!'}, '안녕!',
    {feel_list: ['행복', '슬픔', '웃음'], result: '행복을 느끼고 asdsadsad계시네요!'}, '안녕!',
    {feel_list: ['행복', '슬픔', '웃음'], result: '행복을 느끼고 asd계시네요!'}, '안녕!',
    {feel_list: ['행복', '슬픔', '웃음'], result: '행복을 느끼고 !'}, '안녕!',
    {feel_list: ['행복', '슬픔', '웃음'], result: '행복네요!'}, '안녕!',
    {feel_list: ['행복', '슬픔', '웃음'], result: '행복asdasassaddadadasd을 느끼고 계시네요!'}, '안녕!',
    {feel_list: ['행복', '슬픔', '웃음'], result: '행복을 느끼고 계시네요!'}, '안녕!',
    {feel_list: ['행복', '슬픔', '웃음'], result: '행복을 느끼고 계asdasdasdaddsdasdsdasdasdasa시네요!'}, '안녕!',
    {feel_list: ['행복', '슬픔', '웃음'], result: '행!'}, '안녕!',
    {feel_list: ['행복', '슬픔', '웃음'], result: '행복을 느끼고 계시네요!'}, '안녕!',

  ]);

  const handleButtonClick = () => {
    axios
      .post("http://127.0.0.1:5000/predict", {text: textValue})
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

  console.log('chatList', chatList)

  return (
    <div id={"Service"}>
      {/*<div className="description-wrapper"></div>*/}
      <div className="chat-wrapper">
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
                  <div className="emotion-wrapper">Bert가 분석한 당신의 감정 : <span style={{fontWeight: 500, color: '#7950f7'}}>{li.feel_list[0]}</span></div>
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
          placeholder={'Bert에게 채팅을 전송해 보세요'}
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          onKeyUp={(e) => onTypeEnter(e)}
        />
        <div className="enter-btn" onClick={() => handleButtonClick()}>Enter</div>
      </div>
    </div>
  );
}

export default Service;
