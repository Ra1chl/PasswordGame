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

    const score = [
        hasMinLength,
        hasUppercase,
        hasNumber,
        hasSpecialChar,
    ].filter(Boolean).length;

    const getStrength = (): string => {
        if (score <= 1) return "Slabé";
        if (score <= 3) return "Střední";
        return "Silné";
    };

    const strengthClass =
        score <= 1 ? "weak" : score <= 3 ? "medium" : "strong";

    return (
        <div className="password-strength">
            <button
                className="button"
                onClick={() => setShowPassword(!showPassword)}
            >
                {showPassword ? "Skrýt heslo" : "Zobrazit heslo"}
            </button>

            {showPassword && <p className="password-preview">{password}</p>}

            <div className="progressBar">
                <div
                    className={`progress ${strengthClass}`}
                    style={{ width: `${(score / 4) * 100}%` }}
                />
            </div>

            <p className="strength-text">Síla hesla: {getStrength()}</p>

            <ul className="criteria">
                <li className={hasMinLength ? "valid" : "invalid"}>
                    Minimálně 8 znaků
                </li>
                <li className={hasUppercase ? "valid" : "invalid"}>
                    Alespoň jedno velké písmeno
                </li>
                <li className={hasNumber ? "valid" : "invalid"}>
                    Alespoň jedno číslo
                </li>
                <li className={hasSpecialChar ? "valid" : "invalid"}>
                    Speciální znak (!@#$%^&*)
                </li>
            </ul>
        </div>
    );
};

export default PasswordStrength;