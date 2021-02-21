import axios from "axios";
import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const authObject = {
      "Project-ID": "01b4e461-f304-46b1-8fe2-987c6088436d",
      "User-Name": username,
      "User-Secret": password,
    };
    try {
      axios.get("https://api.chatengine.io/chats");
    } catch (error) {}
  };
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Sh...it's a secret"
            required
          />
          <div align="center">
            <button type="submit">
              <span>Starting Texting</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
