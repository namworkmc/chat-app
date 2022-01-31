import React from "react";
import { ChatEngine } from "react-chat-engine";

import "./App.css";
import ChatFeed from "./components/ChatFeed";

function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID="5f564386-4459-4416-9845-44182a92e254"
      userName="namworkmc"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
