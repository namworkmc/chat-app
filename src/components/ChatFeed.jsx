import React from "react";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMesssage";
import MessageForm from "./MessageForm";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;

  /*
   * Thông tin cơ bản của chat
   * Thông tin của tin nhắn cuối cùng
   * */
  const chat = chats && chats[activeChat];

  // Hiển thị avatar thông báo đã đọc tin nhắn (giống trong messenger)
  const renderReadReceipts = (message, isMyMessage) => {
    return chat.people.map(
      (person, index) =>
        person.last_read === message.id && (
          <div
            key={`read_${index}`}
            className={"read-receipt"}
            style={{
              float: isMyMessage ? "right" : "left",
              backgroundImage: `url(${person?.person?.avatar})`,
            }}
          />
        )
    );
  };

  // Render tin nhắn
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
              <TheirMessage
                message={message}
                lastMessage={message[lastMessageKey]}
              />
            )}
          </div>

          <div
            className="read-receipts"
            style={{
              marginLeft: isMyMess ? "0px" : "68px",
              marginRight: isMyMess ? "18px" : "0px",
            }}
          >
            {renderReadReceipts(message, isMyMess)}
          </div>
        </div>
      );
    });
  };

  // Loading
  if (!chat) {
    return "hehe";
  }

  // Render chat feed
  return (
    <div>
      <div className="chat-feed">
        <div className={"chat-title-container"}>
          <div className={"chat-title"}>{chat.title}</div>
          <div className={"chat-subtitle"}>
            {chat.people.map((e) => `${e.person.username}\n`)}
          </div>
        </div>
        {renderMessage()}
        <div style={{ height: "100px" }} />
      </div>

      <div className={"message-form-container"}>
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;
