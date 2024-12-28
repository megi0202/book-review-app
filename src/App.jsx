import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateForm = () => {
    if (!email.includes("@") || password.length < 6) {
      setError("メールアドレスまたはパスワードに不備があります。");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <h1>ログイン</h1>
      <input
        type="email"
        placeholder="メールアドレス"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="パスワード"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={validateForm}>ログイン</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default App;
