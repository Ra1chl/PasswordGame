import React from "react";

type PasswordInputProps = {
    password: string;
    setPassword: (value: string) => void;
};

const PasswordInput: React.FC<PasswordInputProps> = ({
                                                         password,
                                                         setPassword,
                                                     }) => {
    return (
        <input
            className="form-control mb-3"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Zadejte heslo"
        />
    );
};

export default PasswordInput;