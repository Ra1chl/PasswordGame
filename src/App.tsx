import React, { useState, useEffect, useCallback } from "react";
import PasswordInput from "./components/PasswordInput";
import PasswordStrength from "./components/PasswordStrength";
import CharacterSequenceValidator from "./components/CharacterSequenceValidator";
import PasswordTimeValidator from "./components/PasswordTimeValidator";
import CountryFlagValidator from "./components/CountryFlagValidator";
import type { PasswordData } from "./types";
import "./App.css";

const App: React.FC = () => {
    const [data, setData] = useState<PasswordData>(() => ({
        password: "",
        createdAt: Date.now(),
    }));

    const setPassword = (value: string) => {
        setData((prev) => ({
            ...prev,
            password: value,
            createdAt: prev.password === "" ? Date.now() : prev.createdAt,
        }));
    };

    const evaluatePassword = useCallback((password: string): string => {
        const hasMinLength = password.length >= 8;
        const hasUppercase = /[A-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*]/.test(password);
        const score = [hasMinLength, hasUppercase, hasNumber, hasSpecialChar].filter(Boolean).length;
        if (score <= 1) return "Slabé";
        if (score <= 3) return "Střední";
        return "Silné";
    }, []);


    const passwordStrength = evaluatePassword(data.password);

    // #5 – titulek stránky
    useEffect(() => {
        document.title = `Síla hesla: ${passwordStrength}`;
    }, [passwordStrength]);

    // #6 – škodič
    useEffect(() => {
        const sabotageInterval = setInterval(() => {
            setData((prev) => {
                const action = Math.random() < 0.5 ? "add" : "remove";
                if (action === "add") {
                    return { ...prev, password: prev.password + "😜" };
                } else {
                    if (prev.password.length === 0) return prev;
                    const index = Math.floor(Math.random() * prev.password.length);
                    return {
                        ...prev,
                        password: prev.password.slice(0, index) + prev.password.slice(index + 1),
                    };
                }
            });
        }, 10000);
        return () => clearInterval(sabotageInterval);
    }, []);

    return (
        <div className="container">
            <h1 className="title">Kontrola hesla</h1>
            <PasswordInput password={data.password} setPassword={setPassword} />
            <PasswordStrength password={data.password} />
            <CharacterSequenceValidator data={data} />
            <PasswordTimeValidator data={data} />
            <CountryFlagValidator password={data.password} />
        </div>
    );
};

export default App;