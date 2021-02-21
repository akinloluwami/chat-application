import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./COMPONENTS/ChatFeed";

function App() {
  return (
    <ChatEngine
      height="100vh"
      userName="akinkunmi"
      userSecret="Akinology"
      projectID="01b4e461-f304-46b1-8fe2-987c6088436d"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
