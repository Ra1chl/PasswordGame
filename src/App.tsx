import React, { useState } from "react";
import PasswordInput from "./PasswordInput";
import PasswordStrength from "./PasswordStrength";
import CharacterSequenceValidator from "./CharacterSequenceValidator";
import PasswordTimeValidator from "./PasswordTimeValidator";
import type {PasswordData} from "./types";
import "./App.css";

const App: React.FC = () => {
    const [data, setData] = useState<PasswordData>({
        password: "",
        createdAt: Date.now(),
    });

    const setPassword = (value: string) => {
        setData((prev) => ({
            ...prev,
            password: value,
            createdAt: prev.password === "" ? Date.now() : prev.createdAt,
        }));
    };

    return (
        <div className="container">
            <h1 className="title">Kontrola hesla</h1>

            <PasswordInput password={data.password} setPassword={setPassword} />
            <PasswordStrength password={data.password} />

            <CharacterSequenceValidator data={data} />
            <PasswordTimeValidator data={data} />
        </div>
    );
};

export default App;