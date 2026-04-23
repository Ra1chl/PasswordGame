export type PasswordData = {
    password: string;
    createdAt: number;
};

export type CharacterSequenceResult = {
    isValid: boolean;
    validSequencesCount: number;
};

export type PasswordTimeResult = {
    isValid: boolean;
    elapsedTime: number;
};