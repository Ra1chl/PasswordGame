import React, { useState } from "react";

type Props = {
    password: string;
};

const PasswordStrength: React.FC<Props> = ({ password }) => {
    const [showPassword, setShowPassword] = useState(false);

    const hasMinLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);

    const criteria = [
        hasMinLength,
        hasUppercase,
        hasNumber,
        hasSpecialChar,
    ];

    const score = criteria.filter(Boolean).length;

    const getStrength = () => {
        if (score <= 1) return "Slabé";
        if (score <= 3) return "Střední";
        return "Silné";
    };

    const getColor = () => {
        if (score <= 1) return "red";
        if (score <= 3) return "orange";
        return "green";
    };

    return (
        <div style={{ marginTop: "20px" }}>
            <button onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Skrýt heslo" : "Zobrazit heslo"}
            </button>

            {showPassword && <p>{password}</p>}

            <div
                style={{
                    height: "10px",
                    width: "100%",
                    backgroundColor: "#ddd",
                    marginTop: "10px",
                }}
            >
                <div
                    style={{
                        height: "100%",
                        width: `${(score / 4) * 100}%`,
                        backgroundColor: getColor(),
                        transition: "0.3s",
                    }}
                />
            </div>

            <p>Síla hesla: {getStrength()}</p>

            <ul>
                <li style={{ color: hasMinLength ? "green" : "red" }}>
                    Minimálně 8 znaků
                </li>
                <li style={{ color: hasUppercase ? "green" : "red" }}>
                    Alespoň jedno velké písmeno
                </li>
                <li style={{ color: hasNumber ? "green" : "red" }}>
                    Alespoň jedno číslo
                </li>
                <li style={{ color: hasSpecialChar ? "green" : "red" }}>
                    Speciální znak (!@#$%^&*)
                </li>
            </ul>
        </div>
    );
};

export default PasswordStrength;