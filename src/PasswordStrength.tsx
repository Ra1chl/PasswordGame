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

    const getStrength = () => {
        if (score <= 1) return "Slabé";
        if (score <= 3) return "Střední";
        return "Silné";
    };

    const strengthClass =
        score <= 1 ? "weak" : score <= 3 ? "medium" : "strong";

    return (
        <div className="mt-4">
            <button
                className="btn primary-btn mb-3"
                onClick={() => setShowPassword(!showPassword)}
            >
                {showPassword ? "Skrýt heslo" : "Zobrazit heslo"}
            </button>

            {showPassword && (
                <p className="alert alert-secondary py-2">{password}</p>
            )}

            <div className="progress mb-3">
                <div
                    className={`progress-bar custom-progress ${strengthClass}`}
                    style={{ width: `${(score / 4) * 100}%` }}
                />
            </div>

            <p className="fw-bold">Síla hesla: {getStrength()}</p>

            <ul className="list-group">
                <li className={`list-group-item ${hasMinLength ? "valid" : "invalid"}`}>
                    Minimálně 8 znaků
                </li>
                <li className={`list-group-item ${hasUppercase ? "valid" : "invalid"}`}>
                    Alespoň jedno velké písmeno
                </li>
                <li className={`list-group-item ${hasNumber ? "valid" : "invalid"}`}>
                    Alespoň jedno číslo
                </li>
                <li className={`list-group-item ${hasSpecialChar ? "valid" : "invalid"}`}>
                    Speciální znak (!@#$%^&*)
                </li>
            </ul>
        </div>
    );
};

export default PasswordStrength;