import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./COMPONENTS/ChatFeed";
import LoginForm from "./COMPONENTS/LoginForm";

function App() {
  if (!localStorage.getItem("username")) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      projectID="01b4e461-f304-46b1-8fe2-987c6088436d"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
