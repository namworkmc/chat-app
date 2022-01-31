import { Parser } from "html-to-react";

function MyMessage({ message }) {
  if (message?.attachments?.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="avatar-image"
        className={"message-image"}
        style={{ float: "right" }}
      />
    );
  }

  const text = new Parser().parse(message.text);
  return (
    <div
      className={"message"}
      style={{ float: "right", marginRight: "18px", color: "white", backgroundColor: 'blue' }}
    >
      {text}
    </div>
  );
}

export default MyMessage;
