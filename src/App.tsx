import React, { useState } from "react";
import PasswordInput from "./PasswordInput";
import PasswordStrength from "./PasswordStrength";

const App: React.FC = () => {
  const [password, setPassword] = useState<string>("");

  return (
      <div style={{ padding: "20px", maxWidth: "400px" }}>
        <h1>Kontrola hesla</h1>

        <PasswordInput password={password} setPassword={setPassword} />

        <PasswordStrength password={password} />
      </div>
  );
};

export default App;