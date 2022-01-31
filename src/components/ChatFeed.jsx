import React from "react";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMesssage";
import MessageForm from "./MessageForm";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];

  const renderMessage = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMess = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMyMess ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessage message={message} lastMessage={message[lastMessageKey]} />
            )}
          </div>

          <div
            className="read-receipts"
            style={{
              marginLeft: isMyMess ? "0px" : "68px",
              marginRight: isMyMess ? "18px" : "0px",
            }}
          >
            read receipts
          </div>
        </div>
      );
    });
  };

  renderMessage();

  if (!chat) {
    return "hehe";
  }

  return (
    <div>
      <div className="chat-feed">
        <div className={"chat-title-container"}>
          <div className={"chat-title"}>{chat.title}</div>
          <div className={"chat-subtitle"}>
            {chat.people.map((e) => `${e.person.username}`)}
          </div>
        </div>
        {renderMessage()}
        <div style={{ height: "100px" }} />
        <div className={"message-form-container"}>
          <MessageForm {...props} chatId={activeChat} />
        </div>
      </div>
    </div>
  );
};

export default ChatFeed;
