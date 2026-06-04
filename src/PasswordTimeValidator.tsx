import React, { useState, useEffect } from "react";
import type { PasswordData, PasswordTimeResult } from "./types";

type Props = {
    data: PasswordData;
};

const PasswordTimeValidator: React.FC<Props> = ({ data }) => {
    const { createdAt } = data;
    const [currentTime, setCurrentTime] = useState(() => Date.now());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(Date.now());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const elapsedTime = Math.floor((currentTime - createdAt) / 1000);

    const result: PasswordTimeResult = {
        isValid: elapsedTime >= 5,
        elapsedTime,
    };

    return (
        <div>
            <p>
                Časová validace hesla:{" "}
                <strong>{result.isValid ? "Splněno" : "Zadáno příliš rychle"}</strong>
            </p>
            <p>Čas od začátku zadávání: {result.elapsedTime} s</p>
        </div>
    );
};

export default PasswordTimeValidator;