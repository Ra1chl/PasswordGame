import React from "react";

type PasswordInputProps = {
    password: string;
    setPassword: (value: string) => void;
};

const PasswordInput: React.FC<PasswordInputProps> = ({
                                                         password,
                                                         setPassword,
                                                     }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return (
        <input
            className="input"
            type="password"
            value={password}
            onChange={handleChange}
            placeholder="Zadejte heslo"
        />
    );
};

export default PasswordInput;