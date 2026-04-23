import React from "react";
import type {PasswordData, CharacterSequenceResult} from "./types";

type Props = {
    data: PasswordData;
};

const CharacterSequenceValidator: React.FC<Props> = ({ data }) => {
    const { password } = data;

    const countValidSequences = (text: string): number => {
        let count = 0;

        for (let i = 0; i <= text.length - 4; i++) {
            const part = text.slice(i, i + 4);

            const hasLowercase = /[a-z]/.test(part[0]);
            const hasUppercase = /[A-Z]/.test(part[1]);
            const hasNumber = /[0-9]/.test(part[2]);
            const hasSpecialChar = /[!@#$%^&*]/.test(part[3]);

            if (hasLowercase && hasUppercase && hasNumber && hasSpecialChar) {
                count++;
            }
        }

        return count;
    };

    const validSequencesCount = countValidSequences(password);

    const result: CharacterSequenceResult = {
        isValid: validSequencesCount > 0,
        validSequencesCount,
    };

    return (
        <div>
            <p>
                Sekvence malý znak + velký znak + číslo + speciální znak:
                {" "}
                <strong>{result.isValid ? "Splněno" : "Nesplněno"}</strong>
            </p>
            <p>Počet nalezených validních sekvencí: {result.validSequencesCount}</p>
        </div>
    );
};

export default CharacterSequenceValidator;