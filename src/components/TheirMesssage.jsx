import {Parser} from "html-to-react";

function TheirMessage({ message, lastMessage }) {
  const isFirstMessage =
    !lastMessage || lastMessage.sender.username !== message.sender.username;

  const text = new Parser().parse(message.text);

  return (
    <div className={"message-row"}>
      {isFirstMessage && (
        <div
          className={"message-avatar"}
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}

      {message?.attachments?.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="avatar-image"
          className={"message-image"}
          style={{ marginLeft: isFirstMessage ? "4px" : "48px" }}
        />
      ) : (
        <div
          className={"message"}
          style={{
            float: "left",
            backgroundColor: "grey",
            marginLeft: isFirstMessage ? "4px" : "48px"
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
}

export default TheirMessage;
