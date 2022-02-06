import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";
import { SendOutlined, PictureOutlined } from "@ant-design/icons";

function MessageForm(props) {
  const { chatId, creds } = props;
  const [value, setValue] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const text = value.trim();
    if (text.length > 0) {
      sendMessage(props, chatId, { text });
    }

    setValue("");
  };

  const handleOnChange = (e) => {
    setValue(e.target.value);
    isTyping(props, chatId);
  };

  const handleUploadImage = (e) => {
    sendMessage(creds, chatId, { files: e.target.files, text: "" });
  };

  return (
    <form className={"message-form"} onSubmit={handleOnSubmit}>
      <input
        className={"message-input"}
        placeholder={"Aa"}
        value={value}
        onChange={handleOnChange}
        onSubmit={handleOnSubmit}
        type="text"
      />

      <label htmlFor={"upload-button"}>
        <span className={"image-button"}>
          <PictureOutlined className={"picture-icon"} />
        </span>
      </label>
      <input
        id={"upload-button"}
        type="file"
        onChange={handleUploadImage}
        multiple={false}
        hidden={true}
      />

      <button type={"submit"} className={"send-button"}>
        <SendOutlined className={"send-icon"} />
      </button>
    </form>
  );
}

export default MessageForm;
