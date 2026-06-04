import React, { useState } from "react";
import PasswordInput from "./PasswordInput";
import PasswordStrength from "./PasswordStrength";
import CharacterSequenceValidator from "./CharacterSequenceValidator";
import PasswordTimeValidator from "./PasswordTimeValidator";
import type { PasswordData } from "./types";
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
        <div className="app-page">
            <div className="container py-5">
                <div className="card app-card shadow-lg">
                    <div className="card-body">
                        <h1 className="mb-4 text-center">Kontrola hesla</h1>

                        <PasswordInput
                            password={data.password}
                            setPassword={setPassword}
                        />

                        <PasswordStrength password={data.password} />

                        <CharacterSequenceValidator data={data} />
                        <PasswordTimeValidator data={data} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;